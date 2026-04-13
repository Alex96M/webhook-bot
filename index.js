const express = require("express");
const app = express();

app.use(express.json());

// Aquí guardamos las señales en memoria
let señales = [];

// Webhook (recibe señales de TradingView)
app.post("/webhook", (req, res) => {
    console.log("Señal recibida:", req.body);

    if (req.body.signal) {
        señales.push({
            signal: req.body.signal,
            time: new Date().toLocaleString()
        });
    }

    res.send("OK");
});

// Página web para ver señales
app.get("/", (req, res) => {
    let html = `
    <h1>📊 Señales en Vivo</h1>
    <ul>
    `;

    señales.slice().reverse().forEach(s => {
        html += `<li>${s.time} → ${s.signal}</li>`;
    });

    html += "</ul>";

    res.send(html);
});

// (Opcional) ver en formato JSON
app.get("/signals", (req, res) => {
    res.json(señales);
});

app.listen(3000, () => console.log("Servidor corriendo"));
