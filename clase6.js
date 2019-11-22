/**
 * OBJETOS
 */


/**
 * PARA DECLARAR UN OBJETO EN JS OCUPAMOS LA SIGUIENTE DENOTACION VAR NOMBRE_VAR = {ATRIBUTO:VALOR, KEY:VALUE}
 */
var persona = {
    nombre: 'Oscar',
    apellidos: 'Muñoz Bernales',
    edad: 28,
}

/**
 * LOS VALORES DEL VALUE PUEDEN SER ENTEROS, STRING, FLOAT, BOOL, FUNCIONES !!
 */


function imprimirNombreEnMayusculaSinTocarVariableGLobal(n){
    n = n.toUpperCase()
    console.log(n)
}

function imprimir(objeto){
    var { nombre } = objeto //ESTO ES UNA FORMA DE DESECTRUCTURAR UN OBJETO, TENEMOS EL OBJETO Y GUARDAMOS EL ATRIBUTO NOMBRE EN LA VARIABLE NOMBRE
    console.log(nombre)
}

/**
 * RETO DEL CURSO, IMPRIMIR NOMBRE Y EDAD
 */
function imprimirNombreYEdad(persona){
    var { nombre, edad } = persona
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`);
}

imprimirNombreYEdad(persona)


//PARA ACCEDER A UN VALOR DE UN ATRIBUTO DEL OBJETO LO HACEMOS DE LA SIGUIENTE FORMA persona.nombre
imprimirNombreEnMayusculaSinTocarVariableGLobal(persona.nombre);
imprimir(persona)

