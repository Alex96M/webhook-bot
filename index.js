const express = require("express");
const app = express();

app.use(express.json());

// 🔥 Simulación de señales (luego aquí conectamos TradingView)
let signals = [
  { symbol: "EURUSD", signal: "CALL", time: "10:00" },
];

// 🔥 Endpoint para frontend
app.get("/signals", (req, res) => {
  res.json(signals);
});

// 🔥 Servir frontend
app.use(express.static(".")); // sirve index.html

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor en puerto", PORT);
});
