/**
 * OBJETOS EN JAVASCRIPTS
 * ESTAMOS HABLANDO DE PROTOTIPOS Y NO EXACTAMENTE DE CLASE
 */

const ALTURA_MINIMA = 1.8

function herencia(prototipoHijo, prototipoPadre){
    //VAMOS A DECIRLE AL PROTOTIPO HIJO QUIEN VA A SER SU PROTOTIPO PADRE

    //DEFINIMOS UN A FUNCIONA VACIA
    var fn = function(){}

    //A LA FUNCION VACIA LE ASIGNAMOS EL PROTOTIPO PADRE
    fn.prototype = prototipoPadre.prototype

    //PARA NO PASAR A LLEVAR EL PROTOTYPE PADRE LO ASIGNAMOS AL FN, AHORA EL PROTOTY HIJO 
    //SE VA A INSTANCIA CON LA FUNCION FN
    prototipoHijo.prototype = new fn

    //ASIGNAMOS LA FUNCION CONSTRUCTURA
    prototipoHijo.prototype.constructor = prototipoHijo
}

/**
 * 
 * @param {string} nombre 
 * @param {string} apellido 
 * @param {double} altura 
 */
function Persona(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura


    Persona.prototype.saludar = function() {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
    }
    
    Persona.prototype.soyAlto = function() {
        // debugger
        return this.altura > ALTURA_MINIMA
    } 
}



/**
 * NEW INSTANCIA EL "OBJETO" PERSONA
 */

// var oscar = new Persona('oscar', 'muñoz', 2.9)
// var stephy = new Persona('Stephy', 'Garrido', 1.6)


/**
 * "HERENCIA" ENTRE PROTOTIPOS
 */

function desarrollador(nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido
}

herencia(desarrollador, Persona)

desarrollador.prototype.saludar = function(){
    console.log(`Hola soy ${this.nombre} y soy un DESARROLLADOR`)
}

