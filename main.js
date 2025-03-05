// Obtener el contexto del canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Función para dibujar formas
function draw() {
    // Dibujar un rectángulo
    ctx.fillStyle = "blue";
    ctx.fillRect(50, 50, 150, 100);

    // Dibujar un triángulo
    ctx.beginPath();
    ctx.moveTo(250, 50);
    ctx.lineTo(300, 150);
    ctx.lineTo(200, 150);
    ctx.closePath();
    ctx.fillStyle = "red";
    ctx.fill();

    // Dibujar una línea
    ctx.beginPath();
    ctx.moveTo(50, 200);
    ctx.lineTo(300, 200);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.stroke();

    // Dibujar un arco
    ctx.beginPath();
    ctx.arc(150, 300, 50, 0, Math.PI * 2);
    ctx.fillStyle = "green";
    ctx.fill();

    // Dibujar una curva Bézier
    ctx.beginPath();
    ctx.moveTo(50, 400);
    ctx.bezierCurveTo(100, 350, 200, 450, 300, 400);
    ctx.strokeStyle = "purple";
    ctx.stroke();
}

// Llamar a la función draw()
draw();
