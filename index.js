const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

// 🔥 Señales
let signals = [
  { symbol: "EURUSD", signal: "CALL", time: "10:00" }
];

// 🔥 API
app.get("/signals", (req, res) => {
  res.json(signals);
});

// 🔥 API
app.get("/signals", (req, res) => {
  res.json(signals);
});

// 🔥 WEBHOOK (AQUÍ VA)
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

// 🔥 Servir HTML correctamente
app.use(express.static(path.join(__dirname)));

// 🔥 Ruta raíz obligatoria para Railway
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const PORT = process.env.PORT || 8080;

// 🔥 MUY IMPORTANTE
app.listen(PORT, "0.0.0.0", () => {
  console.log("Servidor en puerto", PORT);
});
