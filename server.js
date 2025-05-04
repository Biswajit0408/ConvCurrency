require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const app = express();
const port = process.env.PORT || 3000;

// API Keys
const GNEWS_API_KEY = '9a2b5999612fa6c2dfe6e938b314aae1';
const EXCHANGE_RATE_API_KEY = '6687e0d5cac897b775bf4095';

app.use(cors());
app.use(express.static('public'));

// News endpoint
app.get('/api/news', async (req, res) => {
  try {
    console.log('Fetching news from GNews API...');
    const response = await fetch(`https://gnews.io/api/v4/search?q=currency+exchange+rates&lang=en&country=us&max=5&apikey=${GNEWS_API_KEY}`);
    const data = await response.json();
    console.log('News API response:', data);
    res.json(data);
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

// Exchange rate endpoint
app.get('/api/rates/:from', async (req, res) => {
  try {
    console.log('Fetching exchange rates...');
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${EXCHANGE_RATE_API_KEY}/latest/${req.params.from}`);
    const data = await response.json();
    console.log('Exchange rate API response:', data);
    res.json(data);
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
    res.status(500).json({ error: 'Failed to fetch exchange rates' });
  }
});

// Add a test endpoint
app.get('/test', (req, res) => {
  res.json({ message: 'Server is running!' });
});

// Start server
const server = app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`Test the server at http://localhost:${port}/test`);
});
