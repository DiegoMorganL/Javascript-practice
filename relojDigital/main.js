let hora = document.querySelector('.hora');

function actualizarHora() {
    let ahora = new Date();
    let horas = String(ahora.getHours()).padStart(2,'0');
    let minutos = String(ahora.getMinutes()).padStart(2,'0');
    let segundos = String(ahora.getSeconds()).padStart(2,'0');

    hora.textContent = `${horas}:${minutos}: ${segundos}`;
}

actualizarHora();

setInterval(actualizarHora, 1000);

document.addEventListener('mousemove', (e) => {
    let centroX = window.innerWidth / 2;
    let centroY = window.innerHeight / 2;

    let offsetX = (e.clientX - centroX) / -40;
    let offsetY = (e.clientY - centroY) / -40;

    hora.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
