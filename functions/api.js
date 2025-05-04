const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const path = event.path.replace('/.netlify/functions/api/', '');
  const segments = path.split('/');

  if (segments[0] === 'news') {
    try {
      const response = await fetch(`https://gnews.io/api/v4/search?q=currency+exchange+rates&lang=en&country=us&max=5&apikey=${process.env.GNEWS_API_KEY}`);
      const data = await response.json();
      return {
        statusCode: 200,
        body: JSON.stringify(data)
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed to fetch news' })
      };
    }
  }

  if (segments[0] === 'rates' && segments[1]) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.EXCHANGE_RATE_API_KEY}/latest/${segments[1]}`);
      const data = await response.json();
      return {
        statusCode: 200,
        body: JSON.stringify(data)
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed to fetch exchange rates' })
      };
    }
  }

  return {
    statusCode: 404,
    body: JSON.stringify({ error: 'Not found' })
  };
}; 