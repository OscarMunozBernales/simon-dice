var nombre = 'Violeta', apellido = 'Garrido'

//COMVERTIR NOMBRE EN MAYUSCULA
var nombreMayucula = nombre.toUpperCase()
console.log('Nombre en mayuscula: ' + nombreMayucula)

//CONVERTIR EL APEILLIDO EN MINUSCULA
var apellidoMayuscula = apellido.toLowerCase()
console.log('Apellido en minuscula: ' + apellidoMayuscula)

// PRIMERA LETRA DEL NOMBRE
var primeraLetraNombre = nombre.charAt(0);
console.log('Primera letra del nombre: ' + nombre + ' es: ' + primeraLetraNombre)

// CANTIDAD DE LETRAS DEL NOMBRE
var cantLetrasNombre = nombre.length;
console.log('Cantidad de letras de nombre: ' + cantLetrasNombre)


// CONCATENAR VARIABLES
var concatenarNormal = nombre + ' ' + apellido
var concatenarPolar = `${nombre}, ${apellido}`;

console.log('concatenar normal: ' + concatenarNormal)
console.log(`Concatenar polar ${concatenarPolar}`)

// SUB STRING
console.log(nombre.substr(3, 4));

//DESAFIO ... SABER LA ULTIMA LETRA DEL NOMBRE

var ultimaLetraNombre = nombre.charAt(nombre.length - 1).toUpperCase();
console.log(`Ultima letra del nombre ${nombre} es: ${ultimaLetraNombre}`)