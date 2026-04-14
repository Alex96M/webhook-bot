const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

// 🔥 Señales
let signals = [];

// 🔥 API
app.get("/signals", (req, res) => {
  res.json(signals);
});

// 🔥 WEBHOOK
app.post("/webhook", (req, res) => {
  const nueva = {
    symbol: req.body.symbol,
    signal: req.body.signal,
    time: new Date().toLocaleTimeString()
  };

  signals.push(nueva);

  console.log("Nueva señal:", nueva);

  res.send("ok");
});

// 🔥 FRONTEND
app.use(express.static(__dirname));

// 🔥 RUTA RAÍZ (CLAVE PARA RAILWAY)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const PORT = process.env.PORT || 8080;

// 🔥 IMPORTANTE: 0.0.0.0
app.listen(PORT, "0.0.0.0", () => {
  console.log("Servidor en puerto", PORT);
});
