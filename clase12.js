/**
 * ASINCRONISMO
 */

/**
 * FUNCIONES COMO PARAMETRO
 */

class Persona {
    constructor(nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido,
        this.altura = altura
    }

    saludar(fn){
        var { nombre, apellido } = this
        console.log(`Hola, me llamo ${this.nombre}`)
        if(fn) fn(nombre, apellido)
    }

    soyAlto(){
        return this.altura > 1.8
    }
}

class Desarrollador extends Persona{
    constructor(nombre, apellido, altura){
        super(nombre,apellido, altura)
    }

    saludar(fn){
        var { nombre, apellido } = this
        console.log(`Hola, me llamo ${this.nombre} y soy DEV-OPS`)

        if(fn) fn(nombre, apellido, true)
    }
}


function responderSaludo(nombre, apellido, devOps){
    console.log(`Buen dia, ${nombre} ${apellido}`);   
    if(devOps) console.log(`Que bueno que seas programador`);   
}

var oscar = new Desarrollador('oscar', 'muñoz', 1.75)
var stephy = new Persona('Stephy', 'Garrido', 1.5)

oscar.saludar(responderSaludo)
stephy.saludar(responderSaludo)