# Currency Converter & Market Insights

A modern, real-time currency converter with market insights, live charts, and financial news updates. Built with vanilla JavaScript and powered by ExchangeRate-API and GNews API.

## Features

### 1. Currency Conversion
- Real-time exchange rates for 15+ major currencies
- Instant conversion with live rates
- Support for major currencies including USD, EUR, GBP, JPY, INR, and more
- Currency swap functionality
- Cached rates for better performance

### 2. Interactive Charts
- Live exchange rate charts
- 7-day historical data visualization
- Interactive tooltips
- Real-time rate updates
- Support for multiple currency pairs

### 3. Market Insights
- Live currency news feed
- Market sentiment analysis
- News volume tracking
- Top currency mentions
- Auto-updating news every 30 minutes

### 4. User Experience
- Clean, modern interface
- Dark/Light mode toggle
- Mobile responsive design
- Smooth animations
- Error handling and user feedback

## Technologies Used
- HTML5
- CSS3
- JavaScript (Vanilla)
- Chart.js for data visualization
- ExchangeRate-API for live rates
- GNews API for financial news
- Font Awesome for icons

## APIs Used
- ExchangeRate-API v6
- GNews API

## Setup and Installation

1. Clone the repository:
```bash
git clone https://github.com/Biswajit0408/ConvCurrency.git
```

2. Navigate to the project directory:
```bash
cd ConvCurrency
```

3. Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve public
```

## Security Best Practices

### API Key Security
- Never commit API keys directly in your code
- Store API keys in environment variables or use a backend service
- For development, use a `.env` file (add it to .gitignore)
- For production, use environment variables in your hosting platform

### Setting up API Keys
1. Create a `.env` file in your project root:
```bash
GNEWS_API_KEY=your_api_key_here
EXCHANGE_RATE_API_KEY=your_api_key_here
```

2. Add `.env` to your `.gitignore` file:
```bash
echo ".env" >> .gitignore
```

3. For production deployment:
   - Set up environment variables in your hosting platform (Netlify, Vercel, etc.)
   - Never expose API keys in client-side code
   - Consider using a backend proxy service for API calls

## Configuration

The application requires the following API keys:
- GNews API: For fetching currency news
- ExchangeRate-API: For real-time exchange rates

For security reasons, these keys should be:
1. Stored in environment variables
2. Never committed to version control
3. Managed through your hosting platform's environment settings

## Features in Detail

### Currency Conversion
- Support for 15+ major currencies
- Real-time exchange rates
- 5-minute rate caching for better performance
- Instant swap between currencies

### Chart Features
- Interactive line chart
- 7-day historical data
- Real-time updates
- Current rate display
- 24-hour change percentage

### News and Market Insights
- Latest currency news
- Market sentiment analysis
- News volume metrics
- Top currency tracking
- Auto-refresh every 30 minutes

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- ExchangeRate-API for providing real-time exchange rates
- GNews API for financial news data
- Chart.js for beautiful charts
- Font Awesome for icons

## Contact

Biswajit Rout - routbiswajit.0408@gmail.com

Project Link: [https://github.com/Biswajit0408/ConvCurrency](https://github.com/Biswajit0408/ConvCurrency)

---

Made with ❤️ by [Biswajit]
