/**
 * OBJETOS EN JAVASCRIPTS
 * ESTAMOS HABLANDO DE PROTOTIPOS Y NO EXACTAMENTE DE CLASE
 */

const ALTURA_MINIMA = 1.8


function Persona(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura

}

Persona.prototype.saludar = () => {
    console.log(`HOLA ME LLAMO ${this.nombre.toUpperCase()} ${this.apellido.toUpperCase()}`)
}

Persona.prototype.soyAlto = function(){
    if(this.altura > ALTURA_MINIMA){
        console.log(`${this.nombre} es alt@`)
    }else{
        console.log(`${this.nombre} es baj@`)
    }
}
/**
 * NEW INSTANCIA EL "OBJETO" PERSONA
 */
var oscar = new Persona('oscar', 'muñoz', 1.9)
var Stephy = new Persona('Stephy', 'Garrido', 1.6)

console.log(oscar.saludar(), Stephy.saludar())
console.log(oscar.soyAlto(), Stephy.soyAlto())




