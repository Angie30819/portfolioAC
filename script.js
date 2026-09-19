document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll(".navbar a");

    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((a) => {
        a.classList.remove("active");
        if (a.getAttribute("href").includes(current)) {
            a.classList.add("active");
        }
    });
});
// Generador de partículas ambientales futuristas
function createParticle() {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    // Posición inicial aleatoria
    particle.style.left = Math.random() * 100 + "vw";
    particle.style.top = "100vh";

    // Tamaño aleatorio
    const size = Math.random() * 8 + 4;
    particle.style.width = size + "px";
    particle.style.height = size + "px";

    // Duración aleatoria
    const duration = Math.random() * 4 + 3;
    particle.style.animationDuration = duration + "s";

    document.getElementById("particles").appendChild(particle);

    // Eliminar partícula cuando termina animación
    setTimeout(() => {
        particle.remove();
    }, duration * 1000);
}

// Crear partículas continuamente
setInterval(createParticle, 200);
