let boton = document.querySelector('button');
let fondo = document.querySelector('body');


boton.addEventListener('click', () => {
    fondo.style.backgroundColor = hexadecimalRandom();
});





//FUNCIONES
const hexadecimalRandom = () => {
    const digitos = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        const numeroRandom = Math.floor(Math.random() * digitos.length);
        color += digitos[numeroRandom];
    }
    return color;
}

console.log(hexadecimalRandom());

