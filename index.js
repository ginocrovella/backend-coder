// let nombre = 'Juan'

// {

//     let nombre = 'Pedro' // tiene su SCOPE 
//     console.log(nombre)
// }                        Muestra el nombre Pedro


// const objetoPersona = {
//     nombre: "Juan"
// }

// const objetoPersona2 = objetoPersona

// console.log(objetoPersona2.nombre)

// objetoPersona.nombre = "Pedro"

// console.log(objetoPersona.nombre);

// let nombre = "Juan"

// let nombre2 = nombre

// nombre = "Pedro"

// console.log(nombre)


// FUNCIONES

// function saludar(...nombres) {
//     console.log(nombres);
    // console.log("Hola" + param1);
    // console.log("Hola" + param2);
    // console.log("Hola" + param3);
// }

// saludar("Juan", "Pedro", "Gino")

// Funcion anonima - 

// const saludar = function(param1) {
//     console.log("Hola" + param1)
//     return function(){
//         console.log("retorno de funcion anonima");
//     }
// }


// FUNCION AUTOEJECUTADA IIFE - sin parametro o con parametro 
// (function(nombre){
//     console.log('funcion anonima' + nombre);
// }) (' gino');


// // SCOPE
// let nombre = "Gino"         // scope global
//     function saludar() {    // scope secundario
//         console.log(nombre);
//     }
// saludar();



// CLOSURE
// function crearGritarNombre(nombre){
//     const signosDeExclamacion = "!!!"  // scope local
//     return function() {
//         console.log('bienvenido ' + nombre + ' ' + signosDeExclamacion)
//     }
// }

// const gritarCh = crearGritarNombre('Gino')
// // gritarCh es un CLOSURE
// gritarCh()



// TEMPLATE STRINGS 
// function crearGritarNombre(nombre){
//     const signosDeExclamacion = "!!!"  // scope local
//     return function() {
//         // console.log('bienvenido ' + nombre + ' ' + signosDeExclamacion)
//         console.log(`bienvenido ${nombre} ${signosDeExclamacion}`);
//     }
// }

// const gritarCh = crearGritarNombre('Gino')
// // gritarCh es un CLOSURE
// gritarCh()


// CLASES
// const objetoPersona = {
//     nombre: "Juan"  // propiedad-atributo
// }

// class animal {
//     constructor(sonido) {
//         this.sonido = sonido
//     }
//     emitirSonido() {     // método
//         console.log(this.sonido);
//     }
// }

// const gato = new animal('miau')
// gato.emitirSonido();

// const perro = new animal('guau')
// perro.emitirSonido();


// class Persona{
//     constructor(nombre, edad) {
//         this.nombre = nombre
//         this.edad = edad
//     }
//     saludar(){
//         console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años`);
//     }
// } saludar()

// HERENCIA 
// class Usuario extends Persona{
//     constructor(nombre, edad){
//         super(nombre, edad)
//     }
//     saludar2(){
//         console.log('Hola soy un Usuario');
//     }
// }

// const persona1 = new Usuario ('Juan', 20)
// const persona2 = new Persona ('Lucas', 22)

// persona1.saludar2()
// persona2.saludar()

class Curso {
    constructor (titulo, dificultad) {
        this.titulo = titulo;
        this._dificultad = dificultad;

        this.lecciones = [];
    }

    get dificultad() {
        console.log('GETTER');
        return this._dificultad
    }
    
    set dificultad(nuevaDificultad){
        console.log('SETTER');
        this._dificultad = nuevaDificultad
    }
}