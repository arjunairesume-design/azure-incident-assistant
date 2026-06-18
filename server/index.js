import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { analyzeIncident } from './lib/analyzeIncident.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: '1mb' }));

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'azure-incident-assistant' });
});

app.post('/api/analyze', async (req, res) => {
  try {
    const result = await analyzeIncident(req.body);
    res.json(result);
  } catch (error) {
    const status = error.statusCode || 500;
    res.status(status).json({
      error: error.message || 'An unexpected error occurred',
    });
  }
});

app.listen(PORT, () => {
  console.log(`Azure Incident Assistant API running on http://localhost:${PORT}`);
});
