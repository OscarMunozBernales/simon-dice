/**
 * ARROW FUNCTIONS
 */

var persona1 = {
     edad: 18,
     nombre: 'persona 1',
}

var persona2 = {
     edad: 10,
     nombre: 'persona 2',
}

const MAYORIA_EDAD = 18

/**
 * ESTO ES UN ARROW FUNCTIONS
 * @param {objeto} persona 
 */
const esMayorDeEdad = (persona) => {
    return persona.edad >= 18
}

/**
 * FUNCTIONA DE LA MISMA FORMA QUE LA FUNCION DE ARRIBA
 * @param {} persona 
 */
const esMayorDeEdad_v2 = (persona) => persona.edad >= MAYORIA_EDAD

const esMenorDeEdad = (persona) => !esMayorDeEdad(persona)

function imprimirSiEsMayorDeEdad(persona){
    if(esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}