let suma = 0;
let cantidadPersonas = parseInt(prompt("Ingresar la cantidad de edades/personas a calcular: "), 10);

while (isNaN(cantidadPersonas) || cantidadPersonas < 1) {
  cantidadPersonas = parseInt(prompt("SOLO ingresar numeros mayores a cero, no LETRAS."), 10);
}

for (let i = 0; i < cantidadPersonas; i++) {
  let edad = "";
  
  while (edad === "" || isNaN(edad) || edad === "0") {
    edad = prompt("Ingresa la edad de la persona numero " + (i + 1) + ":");
    if (edad === "" || isNaN(edad) || edad === "0") {
      alert("SOLO ingresar numeros mayores a cero, no LETRAS.");
    }
  }

  suma += parseInt(edad, 10);
}

let promedio = suma / cantidadPersonas;

alert("El promedio de todas las edades ingresadas es: " + promedio.toFixed(2));
