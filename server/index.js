import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
app.use(cors()); // allow frontend access
app.use(express.json());

const BASE = 'https://torre.ai/api';

// Proxy search endpoint
app.post('/api/search', async (req, res) => {
  try {
    const resp = await axios.post(`${BASE}/entities/_searchStream`, {
      source: { filters: { name: { term: req.body.name } } },
      count: 10,
      include: ['basics', 'person'],
      fetchEntities: true
    });
    res.json(resp.data.entities || []);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Search failed' });
  }
});

// Proxy genome endpoint
app.get('/api/genome/:username', async (req, res) => {
  try {
    const resp = await axios.get(`${BASE}/genome/bios/${req.params.username}`);
    res.json(resp.data);
  } catch (err) {
    console.error(err);
    res.status(404).json({ error: 'User not found' });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Proxy running on port ${PORT}`));
