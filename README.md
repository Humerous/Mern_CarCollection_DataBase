# David Miller’s Garage

A restored MERN car collection CRUD application originally created as a Hyperion Development Bootcamp project.

The project began as a 2020 learning build and has since been repaired so the original core workflow works reliably on a current development stack while preserving the original repository history.

## Live Demo

**Online preview:** https://mern-car-collection-preview-fixed.vercel.app

The online version is a safe demo environment intended for testing the interface and CRUD workflow. Demo data is disposable and should not be treated as permanent storage.

## What It Does

David Miller’s Garage allows you to manage a simple car collection:

- View cars in the collection
- Add a car
- Edit existing car details
- Delete a car
- Validate required fields
- Display loading, empty and error states

Each car stores:

- Owner
- Make
- Model
- Colour
- Registration number

## Technology

### Frontend

- React 18
- React Router
- Axios
- Create React App

### Backend

- Node.js
- Express
- MongoDB / Mongoose
- CORS
- Morgan
- dotenv

## Project History

This repository started as a MERN CRUD learning project in 2020.

The modernisation work focused on restoration rather than replacing the application with an unrelated rewrite. The original Git history has been preserved while the working branch repairs issues found in the old project.

Key restoration work includes:

- repaired add, edit and delete request handling;
- removed hard-coded frontend API addresses;
- added safe environment configuration;
- added an in-memory demo data mode so the project can run without database credentials;
- improved form and table accessibility;
- improved responsive behaviour;
- added visible loading and error states;
- added API CRUD smoke testing;
- added GitHub Actions CI;
- verified the React production build.

## Current Working Branch

Development and restoration work is currently isolated on:

`modernisation/2026`

The historical `main` branch remains preserved.

## Local Setup

### Requirements

- Node.js 20 or newer
- npm

### Install the API

```bash
cd Mern_CarCollection_DataBase
npm install
```

### Install the React client

```bash
cd client
npm install
```

### Run the API

From `Mern_CarCollection_DataBase`:

```bash
npm start
```

The API runs on:

```text
http://localhost:4000
```

If no MongoDB connection is supplied, the app uses the safe in-memory demo data mode.

### Run the React client

From `Mern_CarCollection_DataBase/client`:

```bash
npm start
```

The client uses the local API through its development proxy.

## Optional MongoDB Mode

Copy `.env.example` to `.env` and configure the MongoDB connection value when persistent storage is required.

Do not commit `.env` or database credentials to Git.

## API Routes

```text
GET     /health
GET     /cars/
POST    /cars/add
GET     /cars/:id
POST    /cars/update/:id
DELETE  /cars/:id
```

## Testing

### API CRUD test

From `Mern_CarCollection_DataBase`:

```bash
npm test
```

The smoke test checks the core API flow:

```text
health → list → create → read → update → delete
```

### React test

From `Mern_CarCollection_DataBase/client`:

```bash
npm test
```

### Production build

From `Mern_CarCollection_DataBase/client`:

```bash
npm run build
```

GitHub Actions also runs the API test, React test and production build automatically on the modernisation branch.

## Accessibility

The restored interface includes improvements to:

- semantic headings;
- form label associations;
- keyboard focus states;
- action button semantics;
- responsive table handling;
- user-visible loading and error states.

## Limitations

- The public demo uses disposable demo data.
- Authentication is not part of the original project scope.
- The project remains intentionally small and focused on its original CRUD purpose.

## Original Context

Created as part of the Hyperion Development Bootcamp and retained as a record of early full-stack MERN development work.

## Author

**David Miller**

## License

MIT License
