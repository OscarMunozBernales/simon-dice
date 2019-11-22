/**
 * PARAMETROS POR VALOR Y POR REFERENCIA
 */

var persona = {
    nombre: 'Oscar',
    apellidos: 'Muñoz Bernales',
    edad: 28,
}

/**
 * LOS OBJETOS PASADOS EN PARAMETROS EN UNA FUNCION, PARA POR REFERENCIA, ESTO QUIERE DECIR QUE SI EN LA
 * FUNCION SUS ATRIBUTOS SON MOFICADOS, EN EL GLOBAL TAMBIEN SE VA VAN A MODIFICAR.
 * @param {OBJETO} persona 
 */
function birthday(persona){
    // persona.edad += 1

    //EXISTE UNA FORMA DE COPIAR UN OBJETO Y ES LA SIGUIENTE
    var personaOld = {
        ...persona,
        edad: persona.edad + 1
    }

    return personaOld
}