# k8s-iot-hpa

A starter project with separate **backend (Node.js)** and **frontend (React + Vite)**.
It includes Dockerfiles, docker-compose, and Kubernetes manifests (example) plus a simple API route for posting IoT data.

## Quick start (Docker)

Build and run both services:
```bash
docker-compose up --build
```

- Backend API: http://localhost:5000
  - POST /api/iot/data
- Frontend: http://localhost:5173

## Development (without Docker)

### Backend
```bash
cd backend
npm install
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Kubernetes (example manifests)
There are example manifests in `k8s/` for deployment, service, and an HPA (HorizontalPodAutoscaler) for the backend.

## Notes
- This is a minimal starter. For production, add proper validation, logging, secure env handling, and persistent storage.
