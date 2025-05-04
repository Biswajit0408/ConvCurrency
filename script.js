async function fetchExchangeRates(fromCurrency) {
  try {
    const response = await fetch(`/api/rates/${fromCurrency}`);
    const data = await response.json();
    if (!data.conversion_rates) {
      throw new Error('Invalid response format');
    }
    return data.conversion_rates;
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
    throw error;
  }
}

async function fetchNews() {
  try {
    const response = await fetch('/api/news');
    const data = await response.json();
    if (!data.articles) {
      throw new Error('Invalid response format');
    }
    return data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
} 