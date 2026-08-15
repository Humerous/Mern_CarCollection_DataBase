const assert = require('assert');
const { spawn } = require('child_process');

const port = 4123;
const baseUrl = `http://127.0.0.1:${port}`;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForServer() {
  for (let attempt = 0; attempt < 30; attempt += 1) {
    try {
      const response = await fetch(`${baseUrl}/health`);
      if (response.ok) return;
    } catch (error) {
      // Server is still starting.
    }
    await sleep(250);
  }
  throw new Error('Server did not become ready.');
}

async function request(path, options = {}) {
  const response = await fetch(`${baseUrl}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  });

  const body = await response.json();
  return { response, body };
}

async function run() {
  const server = spawn(process.execPath, ['server.js'], {
    env: {
      ...process.env,
      NODE_ENV: 'test',
      DATA_MODE: 'memory',
      PORT: String(port),
    },
    stdio: ['ignore', 'pipe', 'pipe'],
  });

  let stderr = '';
  server.stderr.on('data', (chunk) => {
    stderr += chunk.toString();
  });

  try {
    await waitForServer();

    const health = await request('/health');
    assert.equal(health.response.status, 200);
    assert.equal(health.body.dataMode, 'memory');

    const initial = await request('/cars/');
    assert.equal(initial.response.status, 200);
    assert.ok(Array.isArray(initial.body));

    const created = await request('/cars/add', {
      method: 'POST',
      body: JSON.stringify({
        owner: 'Test Owner',
        make: 'Test Make',
        model: 'Test Model',
        color: 'Black',
        registration_Number: 'TEST-001',
      }),
    });
    assert.equal(created.response.status, 201);
    assert.ok(created.body._id);

    const id = created.body._id;

    const fetched = await request(`/cars/${id}`);
    assert.equal(fetched.response.status, 200);
    assert.equal(fetched.body.make, 'Test Make');

    const updated = await request(`/cars/update/${id}`, {
      method: 'POST',
      body: JSON.stringify({
        owner: 'Test Owner',
        make: 'Updated Make',
        model: 'Updated Model',
        color: 'Blue',
        registration_Number: 'TEST-002',
      }),
    });
    assert.equal(updated.response.status, 200);
    assert.equal(updated.body.make, 'Updated Make');

    const deleted = await request(`/cars/${id}`, { method: 'DELETE' });
    assert.equal(deleted.response.status, 200);

    const missing = await request(`/cars/${id}`);
    assert.equal(missing.response.status, 404);

    console.log('API smoke test passed: health, list, create, read, update and delete.');
  } finally {
    server.kill('SIGTERM');
  }
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
