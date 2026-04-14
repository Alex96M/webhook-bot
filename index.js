const express = require("express");
const app = express();

app.use(express.json());

// test ruta simple
app.get("/", (req, res) => {
    res.send("Servidor funcionando 🚀");
});

// webhook simple
app.post("/webhook", (req, res) => {
    console.log("Webhook:", req.body);
    res.send("OK");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Servidor corriendo en puerto " + PORT);
});
