/**
 * ARRAY
 */

var oscar = {
    nombre: 'Oscar',
    apellido: 'Muñoz',
    altura: 1.75
}

var alan = {
    nombre: 'Alan',
    apellido: 'Gomez',
    altura: 1.85
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.82
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barrios',
    altura: 1.65
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.59
}

var personas = [oscar, alan, martin, dario, paula, vicky]


 /**
  * FILTRAR UN ARRAY, A MODO EJEMPLO VAMOS A FILTRAR A LAS PERSONAS ALTAS
  */

const esAlta = ({altura}) => altura > 1.7
var personasAltas = personas.filter(esAlta)
console.log(personasAltas)

/**
 * VAMOS A TRANSFORMAR UN ARRAY, CON MAP
 */

const toCms = (persona) => {
    return {
        ...persona,
        altura: persona.altura * 100
    }
}
var personasCms = personas.map(toCms)
console.log(personasCms, personas)

/**
 * VAMOS REDUCIR UN ARRAY A UN VALOR, A MODO EJEMPLO VAMOS A CONTAR EL TOTAL DE LAS ALTURAS DE CADA PERSONA
 */

const countAltura = (acum, persona) => {
    console.log(acum, persona)
    return acum + persona.altura
}
var contAltura = personas.reduce(countAltura, 0)
console.log(contAltura);