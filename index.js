const express = require("express");
const app = express();

app.use(express.json());

app.post("/webhook", (req, res) => {
    console.log("Señal recibida:", req.body);

    if (req.body.signal === "CALL") {
        console.log("🟢 COMPRA");
    }

    if (req.body.signal === "PUT") {
        console.log("🔴 VENTA");
    }

    res.send("OK");
});

app.get("/", (req, res) => {
    res.send("Servidor activo");
});

app.listen(3000, () => console.log("Servidor corriendo"));
