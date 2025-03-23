const canvas = document.getElementById('portfolioCanvas');
const ctx = canvas.getContext('2d');

// Ajustar el tamaño del canvas al tamaño de la ventana
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Datos del portafolio
const portfolioData = {
  sections: [
    { title: "Videos", color: "#FF6B6B", x: 50, y: 50, width: 200, height: 100 },
    { title: "Fotos", color: "#4ECDC4", x: 300, y: 50, width: 200, height: 100 },
    { title: "Proyectos", color: "#C44E4E", x: 550, y: 50, width: 200, height: 100 },
    { title: "Renders", color: "#4E77C4", x: 50, y: 200, width: 200, height: 100 },
    { title: "Redes Sociales", color: "#C4A24E", x: 300, y: 200, width: 200, height: 100 },
    { title: "Contacto", color: "#7C4EC4", x: 550, y: 200, width: 200, height: 100 },
  ],
};

// Dibujar las secciones del portafolio
function drawSections() {
  portfolioData.sections.forEach(section => {
    ctx.fillStyle = section.color;
    ctx.fillRect(section.x, section.y, section.width, section.height);

    // Texto de la sección
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "20px Arial";
    ctx.textAlign = "center";
    ctx.fillText(section.title, section.x + section.width / 2, section.y + section.height / 2 + 10);
  });
}

// Manejar clics en las secciones
canvas.addEventListener('click', (event) => {
  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  portfolioData.sections.forEach(section => {
    if (
      mouseX >= section.x &&
      mouseX <= section.x + section.width &&
      mouseY >= section.y &&
      mouseY <= section.y + section.height
    ) {
      alert(`Has hecho clic en: ${section.title}`);
      // Aquí puedes redirigir a otra página o mostrar contenido dinámico
    }
  });
});

// Función principal para renderizar
function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawSections();
  requestAnimationFrame(render);
}

render();