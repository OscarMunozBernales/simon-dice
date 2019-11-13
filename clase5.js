var nombre = 'Stephy' //VARIABLE GLOBAL DENTRO DEL ARCHIVO JS

function imprimirNombreEnMayuscula(){
    nombre = nombre.toUpperCase() //VA A TOCAR UNA VARIABLE LOCAL, ESTO QUIERE DEICR QUE VA A MODIFICAR LA VARIABLE GLOBAL
    console.log(nombre)
}

function imprimirNombreEnMayusculaSinTocarVariableGLobal(n){
    n = n.toUpperCase()
    console.log(n)
}

//imprimirNombreEnMayuscula();
imprimirNombreEnMayusculaSinTocarVariableGLobal(nombre); //AQUI MANDAMOS LA VARIABLE NOMBRE GLOBAL, PERO NO VA A SER MODIFICADA EN LA FUNCION, SOLO SE VA A UTILIZAR SU VALOR.