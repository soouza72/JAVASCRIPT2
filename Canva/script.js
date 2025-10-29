// Acessa o canvas e o contexto
const canvas = document.getElementById('meuCanvas');
const ctx = canvas.getContext('2d');

// 1 - Quadrado verde
ctx.fillStyle = 'green';
ctx.fillRect(20, 20, 100, 100);

// 2 - Círculo vermelho
ctx.beginPath();
ctx.arc(200, 70, 50, 0, Math.PI * 2);
ctx.fillStyle = 'red';
ctx.fill();

// 3 - Apagar parte do quadrado
ctx.clearRect(60, 60, 40, 40); // apaga o centro do quadrado verde

// 4.1 - Carinha feliz
// Cabeça
ctx.beginPath();
ctx.arc(400, 80, 50, 0, Math.PI * 2);
ctx.fillStyle = 'yellow';
ctx.fill();
ctx.stroke();

// Olhos
ctx.beginPath();
ctx.arc(380, 70, 5, 0, Math.PI * 2);
ctx.arc(420, 70, 5, 0, Math.PI * 2);
ctx.fillStyle = 'black';
ctx.fill();

// Boca
ctx.beginPath();
ctx.arc(400, 85, 20, 0, Math.PI);
ctx.stroke();

// 4.2 - Casa simples
// Base
ctx.fillStyle = 'orange';
ctx.fillRect(100, 200, 150, 100);

// Telhado
ctx.beginPath();
ctx.moveTo(100, 200);
ctx.lineTo(175, 140);
ctx.lineTo(250, 200);
ctx.closePath();
ctx.fillStyle = 'brown';
ctx.fill();

// Porta
ctx.fillStyle = 'darkred';
ctx.fillRect(160, 250, 30, 50);

// 4.3 - Bandeira do Brasil (simples)
ctx.fillStyle = 'green';
ctx.fillRect(350, 200, 180, 100); 

//
ctx.beginPath();
ctx.moveTo(440, 210);
ctx.lineTo(520, 250);
ctx.lineTo(440, 290);
ctx.lineTo(360, 250);
ctx.closePath();
ctx.fillStyle = 'yellow';
ctx.fill();

//
ctx.beginPath();
ctx.arc(440, 250, 25, 0, Math.PI * 2);
ctx.fillStyle = 'blue';
ctx.fill();
