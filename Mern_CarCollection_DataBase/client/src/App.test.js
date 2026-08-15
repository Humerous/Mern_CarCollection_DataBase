import React from 'react';
import { act } from 'react-dom/test-utils';
import { createRoot } from 'react-dom/client';
import axios from 'axios';
import App from './App';

jest.mock('axios');

test('renders the car collection application', async () => {
  axios.get.mockResolvedValue({ data: [] });

  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);

  await act(async () => {
    root.render(<App />);
  });

  expect(container.textContent).toContain('Car Collection');

  act(() => {
    root.unmount();
  });
  container.remove();
});
