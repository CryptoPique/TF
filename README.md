# 🔍 Solana Token Trader Analyzer

> Find common traders across multiple Solana tokens with ease

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/node-%3E%3D%2014.0.0-brightgreen)](https://nodejs.org/)
[![Solana](https://img.shields.io/badge/Solana-Mainnet-blueviolet)](https://solana.com/)

A powerful web application to analyze and identify wallets that have traded multiple tokens on the Solana blockchain.

## ✨ Features

- 🔍 **Multi-Token Analysis** - Analyze 2 or more tokens simultaneously
- 📋 **One-Click Copy** - Instantly copy wallet addresses to clipboard
- 🌐 **Quick Explorer Links** - Direct links to Solscan and Cielo.finance
- 🏷️ **Token Tracking** - See exactly which tokens each wallet traded
- 📊 **Real-Time Statistics** - Live progress tracking and results
- 🎨 **Modern UI** - Responsive, gradient-rich interface
- 🚀 **Fast & Efficient** - Batch processing with rate limiting protection

## 🎯 Use Cases

- Find early adopters across multiple token launches
- Identify common investors in related projects
- Track wallet behavior patterns
- Research token holder overlap
- Discover active traders in your niche

## 📸 Screenshot

![Solana Token Trader Analyzer Interface](https://via.placeholder.com/800x400/667eea/ffffff?text=Add+Your+Screenshot+Here)

## 🚀 Quick Start

### Option 1: Standalone (No Setup Required)

```bash
# Simply open in browser
open solana-trader-analyzer-standalone.html
```

**Note:** Uses public Solana RPC - may have rate limiting

### Option 2: With Proxy Server (Recommended)

```bash
# Install dependencies
npm install

# Start the server
npm start

# Open in browser
# http://localhost:3000/solana-trader-analyzer-v2.html
```

## 📋 Prerequisites

- Node.js >= 14.0.0 (for proxy server option)
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/solana-trader-analyzer.git
   cd solana-trader-analyzer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure RPC endpoint** (optional)
   
   Edit `server.js` to use your own RPC:
   ```javascript
   const HELIUS_RPC = 'https://your-rpc-endpoint.com';
   ```

4. **Start the application**
   ```bash
   npm start
   ```

5. **Open in browser**
   
   Navigate to `http://localhost:3000/solana-trader-analyzer-v2.html`

## 📖 How to Use

1. **Enter Token Addresses**
   - Add 2 or more Solana token contract addresses
   - Use the "+ Add Token" button for more tokens

2. **Configure Analysis**
   - Set maximum transactions to analyze per token (10-1000)
   - Higher numbers = more comprehensive but slower

3. **Analyze**
   - Click "Analyze Traders"
   - Wait for the analysis to complete

4. **Review Results**
   - See wallets that traded 2+ of your tokens
   - View statistics and detailed information
   - Use quick action buttons:
     - 📋 **Copy** - Copy wallet address
     - 🔍 **Solscan** - View on Solscan.io
     - 💎 **Cielo** - Analyze on Cielo.finance

## 🏗️ Project Structure

```
solana-trader-analyzer/
├── solana-trader-analyzer-v2.html      # Main app (with proxy)
├── solana-trader-analyzer-standalone.html  # Standalone version
├── server.js                           # Node.js proxy server
├── package.json                        # Dependencies
├── README.md                           # Documentation
├── LICENSE                             # MIT License
├── CONTRIBUTING.md                     # Contribution guidelines
└── .gitignore                          # Git ignore rules
```

## ⚙️ Configuration

### RPC Endpoint

**Using Helius (Recommended):**
```javascript
// In server.js
const HELIUS_RPC = 'https://mainnet.helius-rpc.com/?api-key=YOUR_API_KEY';
```

**Using Public RPC:**
```javascript
// Already configured in standalone version
const RPC_URL = 'https://api.mainnet-beta.solana.com';
```

### Transaction Limits

Adjust in the HTML interface:
- **Quick Test:** 50-100 transactions
- **Standard:** 100-500 transactions  
- **Comprehensive:** 500-1000 transactions

## 🔧 Troubleshooting

### "Failed to fetch" Error
- **Solution 1:** Use the proxy server version
- **Solution 2:** Check your RPC endpoint is working
- **Solution 3:** Verify internet connection

### No Results Found
- Verify token addresses are correct (44 characters)
- Increase transaction limit
- Try with more active/popular tokens
- Check that tokens actually have trading history

### Slow Performance
- Reduce number of transactions to analyze
- Analyze fewer tokens at once
- Use a faster RPC endpoint (e.g., Helius paid tier)

### Server Won't Start
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
npm start
```

## 🤝 Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details.

### Ways to Contribute:
- 🐛 Report bugs
- 💡 Suggest features
- 📝 Improve documentation
- 🔧 Submit pull requests

## 📝 API Reference

### Solana RPC Methods Used

- `getSignaturesForAddress` - Fetch transaction signatures for a token
- `getTransaction` - Get transaction details including signers

### External Services

- [Solscan.io](https://solscan.io) - Blockchain explorer
- [Cielo.finance](https://cielo.finance) - Wallet analytics

## 🔐 Security

- **No Private Keys:** Application never requests or stores private keys
- **Read-Only:** Only reads public blockchain data
- **Client-Side:** All processing happens in your browser

## 📊 Performance Tips

- Start with 100 transactions for initial testing
- Use 500+ for production analysis
- Batch processing minimizes rate limiting
- Proxy server reduces CORS issues

## 🎓 Example Use Case

**Finding common investors between two meme coins:**

```
Token A: 3bjvd9HuxBhhHPVapSjQ1DLbLP7eCWEKP3YyszsbsnBAGS
Token B: CDfGJAWj7UasGro63aKTvim5VgqAaVG8rxsFXCU7pump

Analysis Results:
- 156 wallets traded Token A
- 243 wallets traded Token B  
- 42 wallets traded BOTH tokens ✅
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Support

If you find this tool useful, please consider:
- ⭐ Starring the repository
- 🐛 Reporting issues
- 📢 Sharing with others
- 💰 Supporting development

## 🔗 Links

- [Solana Documentation](https://docs.solana.com/)
- [Helius RPC](https://www.helius.dev/)
- [Solscan Explorer](https://solscan.io/)
- [Cielo Finance](https://cielo.finance/)

## 📧 Contact

For questions or suggestions, please open an issue on GitHub.

---

**Built with ❤️ for the Solana community**

If you think this is usefull fell free to Donate: Solana Wallet: EFS4FyxTH2LoHUNjnZFfN7JYdNeQh23nhhjbHMzuVQZa
