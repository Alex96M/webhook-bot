const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.static("public"));

let señales = [];
let ultimaSeñal = "";

// === WEBHOOK ===
app.post("/webhook", (req, res) => {
    const { symbol, signal } = req.body;

    if (!symbol || !signal) {
        return res.status(400).send("Datos inválidos");
    }

    const nueva = symbol + signal;

    if (nueva !== ultimaSeñal) {
        ultimaSeñal = nueva;

        señales.push({
            symbol,
            signal,
            time: new Date().toLocaleString()
        });

        if (señales.length > 50) señales.shift();

        console.log("Nueva señal:", symbol, signal);
    }

    res.send("OK");
});

// === API ===
app.get("/signals", (req, res) => {
    res.json(señales);
});

// === SERVIDOR ===
app.listen(3000, () => console.log("Servidor corriendo"));
