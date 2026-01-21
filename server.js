// server.js - Proxy server per aggirare CORS
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Serve i file HTML nella stessa cartella

const HELIUS_RPC = 'https://mainnet.helius-rpc.com/?api-key=0b838cba-fa35-4bac-85f9-a335af3e891e';

// Endpoint proxy per le chiamate RPC
app.post('/api/rpc', async (req, res) => {
    try {
        const response = await fetch(HELIUS_RPC, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(req.body)
        });

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Errore RPC:', error);
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Server proxy in esecuzione su http://localhost:${PORT}`);
    console.log(`📄 Apri http://localhost:${PORT}/solana-trader-analyzer-proxy.html nel browser`);
});
