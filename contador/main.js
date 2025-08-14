//SELECCION DE ELEMENTOS
let restar = document.querySelector('.restar');
let numero = document.querySelector('.numero');
let sumar = document.querySelector('.sumar');
let valor = 0;
const input = document.getElementById('texto');
const mostrar = document.getElementById('mostrar');


restar.addEventListener('click', () => {
    valor--;
    numero.textContent = valor;
});

sumar.addEventListener('click', () => {
    valor++;
    numero.textContent = valor;
});

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        valor++;
        numero.textContent = valor;
    } else if(e.code === 'Enter') {
        valor--;
        numero.textContent = valor;
    }
});




input.addEventListener('input', () => {
    mostrar.textContent = input.value;
});