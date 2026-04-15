async function cargar() {
    const res = await fetch('/signals');
    const data = await res.json();

    let html = "";
    let total = data.length;

    data.slice().reverse().forEach(s => {
        html += `
        <div class="card">
            <strong>📊 ${s.symbol}</strong><br>
            ⏰ ${s.time}<br>
            ⏳ Exp: 5m<br>
            <span class="${s.signal === "CALL" ? "call" : "put"}">
                ${s.signal === "CALL" ? "📈 ARRIBA" : "📉 ABAJO"}
            </span>
        </div>
        `;
    });

    document.getElementById("contenedor").innerHTML = html;
    document.getElementById("stats").innerHTML = `Total señales: ${total}`;
}

setInterval(cargar, 2000);
cargar();
