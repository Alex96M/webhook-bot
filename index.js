const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

// 🔥 almacenamiento
let signals = [];

// 🔥 API
app.get("/signals", (req, res) => {
  res.json(signals);
});

// 🔥 webhook
app.post("/webhook", (req, res) => {
  const nueva = {
    symbol: req.body.symbol,
    signal: req.body.signal,
    time: new Date().toLocaleTimeString()
  };

  signals.push(nueva);

  console.log("Nueva señal:", nueva);

  res.json({ ok: true });
});

const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// 🔥 ESTÁTICOS
app.use(express.static(__dirname));

const PORT = process.env.PORT || 10000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Servidor en puerto", PORT);
});
