
// EJERCICIO 2 
let ladoCuadrado = parseFloat(prompt("Ingrese el lado del cuadrado:"));
let areaCuadrado = ladoCuadrado ** 2;
console.log("Área del cuadrado:", areaCuadrado);

let baseRect = parseFloat(prompt("Ingrese la base del rectángulo:"));
let alturaRect = parseFloat(prompt("Ingrese la altura del rectángulo:"));
let areaRect = baseRect * alturaRect;
console.log("Área del rectángulo:", areaRect);

let baseTri = parseFloat(prompt("Ingrese la base del triángulo:"));
let alturaTri = parseFloat(prompt("Ingrese la altura del triángulo:"));
let areaTri = (baseTri * alturaTri) / 2;
console.log("Área del triángulo:", areaTri);

let radio = parseFloat(prompt("Ingrese el radio del círculo:"));
let areaCirc = Math.PI * radio ** 2;
console.log("Área del círculo:", areaCirc);


//  EJERCICIO 3, 4 y 5 
let ingles = parseFloat(prompt("Ingrese la nota de Inglés:"));
let matem = parseFloat(prompt("Ingrese la nota de Matemática:"));
let lengua = parseFloat(prompt("Ingrese la nota de Lengua:"));

let promedio = (ingles + matem + lengua) / 3;
console.log("Promedio del estudiante:", promedio.toFixed(2));

if (promedio >= 7) {
  console.log("El estudiante APRUEBA");
} else {
  console.log("El estudiante REPRUEBA");
}

// Clasificación adicional
if (promedio === 10) {
  console.log("Satisfactorio (Beca) y APRUEBA");
} else if (promedio >= 8 && promedio <= 9.99) {
  console.log("Muy buena y APRUEBA");
} else if (promedio >= 7 && promedio < 8) {
  console.log("Buena y APRUEBA");
} else {
  console.log("Regular y REPRUEBA");
}


//  EJERCICIO 6 
let figura = prompt("Ingrese la figura (cuadrado, rectángulo, triángulo o círculo):").toLowerCase();

switch (figura) {
  case "cuadrado":
    let lado = parseFloat(prompt("Ingrese el lado del cuadrado:"));
    console.log("Área:", lado * lado);
    console.log("Perímetro:", lado * 4);
    break;

  case "rectángulo":
  case "rectangulo":
    let baseR = parseFloat(prompt("Base del rectángulo:"));
    let alturaR = parseFloat(prompt("Altura del rectángulo:"));
    console.log("Área:", baseR * alturaR);
    console.log("Perímetro:", 2 * (baseR + alturaR));
    break;

  case "triángulo":
  case "triangulo":
    let baseT = parseFloat(prompt("Base del triángulo:"));
    let alturaT = parseFloat(prompt("Altura del triángulo:"));
    let hipotenusa = Math.sqrt(baseT ** 2 + alturaT ** 2);
    console.log("Área:", (baseT * alturaT) / 2);
    console.log("Perímetro:", baseT + alturaT + hipotenusa);
    console.log("Hipotenusa:", hipotenusa);
    break;

  case "círculo":
  case "circulo":
    let r = parseFloat(prompt("Radio del círculo:"));
    console.log("Área:", Math.PI * r ** 2);
    console.log("Perímetro:", 2 * Math.PI * r);
    break;

  default:
    console.log("Figura no válida.");
}


// EJERCICIO 7 
let numero = parseInt(prompt("Ingrese un número para su tabla de multiplicar:"));
console.log(`Tabla de multiplicar del ${numero}`);
for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}


//  EJERCICIO 8 
let arreglo = [10, 20, 30, 40, 50];
console.log("Elementos del arreglo:", arreglo);


//  EJERCICIO 9 
function verificarPar() {
  let num = parseInt(prompt("Ingrese un número:"));
  if (num % 2 === 0) {
    console.log(`El número ${num} es PAR`);
  } else {
    console.log(`El número ${num} es IMPAR`);
  }
}
verificarPar();


//  EJERCICIO 10 
let frutas = ["Manzana", "Banano", "Pera", "Fresa", "Naranja"];
console.log("Frutas:");
frutas.forEach(f => console.log(f));


//  EJERCICIO 11 
let numeros = [5, 10, 15, 20, 25];
let sumaTotal = numeros.reduce((acc, n) => acc + n, 0);
console.log("Suma total:", sumaTotal);


// EJERCICIO 12 
let estudiantes = ["Ariel", "María", "Carlos", "Lucía", "Andrés"];
let nombre = prompt("Ingrese el nombre del estudiante a buscar:");
if (estudiantes.includes(nombre)) {
  console.log(`${nombre} SÍ está en la lista.`);
} else {
  console.log(`${nombre} NO está en la lista.`);
}


//  EJERCICIO 13 
let numeros2 = [15, 90, 7, 32, 54];
let mayor = Math.max(...numeros2);
console.log("El número mayor del arreglo es:", mayor);


//  EJERCICIO 14 
let nums = [1, 2, 3, 4, 5];
console.log("Arreglo original:", nums);
console.log("Arreglo en orden inverso:", nums.reverse());
