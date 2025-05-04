const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = 3000;
const API_KEY = 'YOUR_API_KEY'; // 👈 Put your real ExchangeRate-API key here

app.use(express.static('public')); // Serve your frontend files from 'public' folder

app.get('/convert/:from/:to', async (req, res) => {
  const { from, to } = req.params;

  try {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${from}/${to}`);
    const data = await response.json();

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Server error or API fetch failed' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
