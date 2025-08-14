//Crear array
const arr = [];
console.log(arr);

//crear un array con valores
const numbers = [0, 3.14, 9.81, 37, 98.6, 100];
const fruits = ["banana", "orange", "mango", "lemon"];
const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"];
const animalProducts = ["milk", "meat", "butter", "yoghurt"];
const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"];
const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];

//Creando un array usando split
let js= 'JavaScript';
const charsInJavaScript = js.split("");
console.log(charsInJavaScript);

//Metodo fill
const eightValues = Array(8).fill("x");
console.log(eightValues);

//Metodo CONCAT concatena 2 arrays
const firstList = [1,2,3];
const secondList = [4,5,6];
const thirdList = firstList.concat(secondList);
console.log(thirdList);

//Metodo Length
const numeros =[1,2,3,4,5];
console.log(numeros.length);

//Metodo indexOf verifica si un elemento existe si si devuelve el index si no devuelve -1
console.log(numeros.indexOf(5));

//Metodo lastIndexOf  Da la posición del último elemento en el array. Si existe, devuelve el index, de lo contrario, devuelve -1.
console.log(numeros.lastIndexOf(2));


//Metodo includes
console.log(numeros.includes(5));

//Metodo toString
console.log(numeros.toString());

//Metodo join
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];

console.log(names.join()); // Asabeneh,Mathias,Elias,Brook
console.log(names.join("")); //AsabenehMathiasEliasBrook
console.log(names.join(" ")); //Asabeneh Mathias Elias Brook
console.log(names.join(", ")); //Asabeneh, Mathias, Elias, Brook
console.log(names.join(" # ")); //Asabeneh # Mathias # Elias # Brook