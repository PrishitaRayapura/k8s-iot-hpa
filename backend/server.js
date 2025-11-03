import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// simple health route
app.get('/', (req, res) => {
  res.send({ status: 'ok', service: 'k8s-iot-hpa-backend' });
});

// example API route for IoT data ingest
app.post('/api/iot/data', (req, res) => {
  const payload = req.body || {};
  // in real app you'd validate and persist; here we echo back
  res.status(201).send({
    message: 'IoT data received',
    received: payload,
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});
