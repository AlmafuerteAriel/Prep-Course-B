// Repasamos objetos:
// var persona = {
//   nombre: "Lionel",
//   apellido: "Messi",
//   saluda: function () {
//     console.log("Hola, mi nombre es " + this.nombre);
//     //console.log(this); -> "this" hace referencia al objeto
//   },
// };
//console.log(persona);
//console.log(persona.nombre);
//console.log(persona.apellido);
//persona.saluda();

// Función constructora y new
// function Persona() {
//   this.nombre = "Lionel";
//   this.apellido = "Messi";
//   this.saluda = function () {
//     console.log("Hola, mi nombre es " + this.nombre);
//   };
// }
// var nuevaPersona = new Persona();
// console.log(nuevaPersona);

// Cada instancia de la clase hereda caractrísticas en común
//   aunque tienen propiedades características
// function Persona(nombre, apellido) {
//   this.nombre = nombre;
//   this.apellido = apellido;
//   this.saluda = function () {
//     console.log("Hola, mi nombre es " + this.nombre);
//   };
// }
// var nuevaPersona = new Persona("Lionel", "Messi");
// console.log(nuevaPersona);
// nuevaPersona.saluda();
// var otraPersona = new Persona("Angel", "DiMaria");
// console.log(otraPersona);
// otraPersona.saluda();

// function Persona(nombre, apellido) {
//   this.nombre = nombre || "No asignado"; // default operator
//   this.apellido = apellido || "No asignado";
//   // Tabla de verdad de "OR" ||
//   // V V -> V
//   // V F -> V
//   // F V -> V // Sólo cuando nuestro primer valor es F
//   // F F -> F //   chequea el segundo
//   this.saluda = function () {
//     console.log("Hola, mi nombre es " + this.nombre);
//   };
// }
// var nuevaPersona = new Persona("Lionel", "Messi");
// //console.log(nuevaPersona);
// //nuevaPersona.saluda();
// var otraPersona = new Persona();
// console.log(otraPersona);
// otraPersona.saluda();

//Invocamos funciones, por lo que podemos utilizar
//  todo lo que sabemos sobre ellas

//En JavaScript "todo es un objeto"
// Prototype: Todos los objetos tienen una referencia a otro objeto llamado proto
// var persona = {
//   nombre: "Lionel",
//   apellido: "Messi",
//   saluda: function () {
//     console.log("Hola, mi nombre es " + this.nombre);
//     //console.log(this); -> "this" hace referencia al objeto
//   },
// };
// var messi = {
//   nombre: "Lionel",
//   apellido: "Messi",
// };
// messi.__proto__ = persona; // NO ES BUENA PRÁCTICA!!!
// messi.saluda();
// Al asignar a "messi" el prototipo "persona"
//   nos permite utilizar sus métodos!!!
// Mostramos ejemplo de:
//    "console.log(Array.prototype)" en el navegador

//--- --- --- --- Copiar en el navegador!!!
function Persona(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.saluda = function () {
    console.log("Hola, mi nombre es " + this.nombre);
  };
}
Persona.prototype.presenta = function () {
  console.log("Hola, soy " + this.nombre + " " + this.apellido);
};
var nuevaPersona = new Persona("Lionel", "Messi");
nuevaPersona.juega = function () {
  console.log("Soy jugador del PSG");
};
nuevaPersona.saluda();
nuevaPersona.presenta();
nuevaPersona.juega();
//console.log(Persona);
//--- --- --- --- Copiar en el navegador y ejecutar!!!
//--- --- --- --- También mostrar "console.log(Persona.prototype)"
//--- En Persona se encuentra "saluda"
//      en su prototipo "presenta"
//      y en nuevaPersona "juega"
//--- Crear array = []; en el navegador y -> "array"
//      y buscamos los métodos de los mismos!!!

// CLASES -> ES6 Azúcar sintáctico
// Similar a lenguajes orientados a Clases
// class Persona {
//   constructor(nombre, apellido) {
//     (this.nombre = nombre), (this.apellido = apellido);
//   }
//   saluda() {
//     console.log("Hola, mi nombre es " + this.nombre);
//   } // y queda en el prototipo!!!
// }
// Persona.prototype.presenta = function () {
//   console.log("Soy " + this.nombre + " " + this.apellido);
// };
// var messi = new Persona("Lionel", "Messi");
// //console.log(Persona);
// messi.saluda();
// messi.presenta();

// HERENCIA
// Poseemos características que heredamos: Dos brazos, piernas, etc
//   Pero también tenemos características propias: carácter, etc
// Ejemplo: Mamíferos -> Perros
//                    \-> Gatos
// Ya vimos el ejemplo con Persona -> Messi
// Con funciones:
// class Persona {
//   constructor(nombre, apellido) {
//     (this.nombre = nombre), (this.apellido = apellido);
//   }
//   saluda() {
//     console.log("Hola, mi nombre es " + this.nombre);
//   }
// }
// class Jugador extends Persona {
//   constructor(nombre, apellido, puesto, club) {
//     super(nombre, apellido);
//     // El método "super" nos permite usar el constructor
//     //   de la clase de la cual estamos heredando (Persona)
//     this.puesto = puesto || "No establecido";
//     this.club = club || "No establecido";
//   }
//   indicaClub() {
//     console.log("Mi club es " + this.club);
//   }
// }
// var messi = new Jugador("Lionel", "Messi", "delantero", "PSG");
// messi.saluda();
// messi.indicaClub();
