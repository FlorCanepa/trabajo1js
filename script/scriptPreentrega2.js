function aleatorio (min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
 }
alert("Funciona por consola");

class Paciente {
    constructor(nombre, edad, sexo) {
      this.nombre = nombre;
      this.edad = edad;
      this.sexo = sexo;
    }
  }
  
  const pacientes = [
    new Paciente("Juan", aleatorio(21,80), "M"),
    new Paciente("Gabriel", aleatorio(21,80), "M"),
    new Paciente("Angela", aleatorio(21,80), "F"),
    new Paciente("Fernanda", aleatorio(21,80), "F"),
    new Paciente("David", aleatorio(21,80), "M"),
    new Paciente("Florencia", aleatorio(21,80), "F"),
    new Paciente("Jorge", aleatorio(21,80), "M"),
    new Paciente("Juan", aleatorio(21,80), "M"),
    new Paciente("Lola", aleatorio(21,80), "F"),
    new Paciente("Rosa", aleatorio(21,80), "F"),
    new Paciente("Jorge", aleatorio(21,80), "M"),
    new Paciente("Roberto", aleatorio(21,80), "M"),
    new Paciente("Luisa", aleatorio(21,80), "F")
  ];
  
  //filtrando por sexo y edades y creando arrays con sus resultados

  const pacientesMasculinos = pacientes.filter((paciente) => paciente.sexo === "M");

  const nombresPacientesMasculinos = pacientesMasculinos.map((paciente) => paciente.nombre);

  const pacientesFemeninos = pacientes.filter((paciente) => paciente.sexo === "F");

  const nombresPacientesFemeninos = pacientesFemeninos.map((paciente) => paciente.nombre);

  const mayoresDe30 = pacientes.filter((paciente) => paciente.edad > 30)


  //forEach para mostrar individualmente los datos
console.log("Nombres de pacientes masculinos")

  nombresPacientesMasculinos.forEach((paciente) => {
    console.log(paciente);
  });
  console.log("Nombres de pacientes femeninos")
  nombresPacientesFemeninos.forEach((paciente) => {
    console.log(paciente);
  });

  console.log("Mostrando SOLO las edades encontradas en los pacientes que superan los 30 años:\n");
  mayoresDe30.forEach((paciente) => {
    console.log(paciente.edad)
  })
  