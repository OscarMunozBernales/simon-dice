/**
 * CLASES CON ECS 5
 */

class Persona {
    constructor(nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido,
        this.altura = altura
    }

    saludar(){
        console.log(`Hola, me llamo ${this.nombre}`)
    }

    soyAlto(){
        return this.altura > 1.8
    }
}

class Desarrollador extends Persona{
    constructor(nombre, apellido, altura){
        super(nombre,apellido, altura)
    }

    saludo(){
        console.log(`Hola, me llamo ${this.nombre} y soy DEV-OPS`)
    }
}