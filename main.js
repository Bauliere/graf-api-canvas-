// Obtener el contexto del canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Función principal de dibujo
function draw() {
    // 1. Dibujar un rectángulo
    ctx.fillStyle = "blue";
    ctx.fillRect(50, 50, 150, 100);

    // 2. Dibujar un triángulo
    ctx.beginPath();
    ctx.moveTo(250, 50);
    ctx.lineTo(300, 150);
    ctx.lineTo(200, 150);
    ctx.closePath();
    ctx.fillStyle = "red";
    ctx.fill();

    // 3. Dibujar una "pluma" (líneas curvas como un trazo)
    ctx.beginPath();
    ctx.moveTo(400, 50);
    ctx.quadraticCurveTo(450, 100, 400, 150);
    ctx.strokeStyle = "purple";
    ctx.lineWidth = 3;
    ctx.stroke();

    // 4. Dibujar líneas individuales
    ctx.beginPath();
    ctx.moveTo(50, 200);
    ctx.lineTo(200, 250);
    ctx.lineTo(50, 300);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.stroke();

    // 5. Dibujar un arco
    ctx.beginPath();
    ctx.arc(300, 250, 50, 0, Math.PI * 1.5);
    ctx.strokeStyle = "green";
    ctx.stroke();

    // 6. Dibujar curvas Bézier y cuadráticas
    ctx.beginPath();
    ctx.moveTo(50, 350);
    ctx.bezierCurveTo(100, 300, 200, 400, 300, 350);
    ctx.strokeStyle = "orange";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(50, 400);
    ctx.quadraticCurveTo(150, 450, 300, 400);
    ctx.strokeStyle = "blue";
    ctx.stroke();

    // 7. Combinaciones de líneas y figuras
    ctx.beginPath();
    ctx.moveTo(400, 200);
    ctx.lineTo(450, 250);
    ctx.lineTo(400, 300);
    ctx.lineTo(350, 250);
    ctx.closePath();
    ctx.fillStyle = "cyan";
    ctx.fill();
    ctx.stroke();
}

// Llamar a la función draw() para dibujar las figuras
draw();

// se ve en local pero no en github

