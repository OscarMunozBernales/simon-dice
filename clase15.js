/**
 * PROMESAS MULTIPLES EN PARALELO   
 */

const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const getPeople = (id) => {

    return new Promise ((resolve, reject) => {
        $
        .get(`${API_URL}${PEOPLE_URL.replace(':id', id)}`, (data) => {
            resolve(data)
        })
        .fail(() => {
            reject(id)
        })


    })
}

// getPeople(1, function(data){
//     console.log(`1. Nombre: ${data.name}`)
//     getPeople(2, function(data){    
//         console.log(`2. Nombre: ${data.name}`)
//         getPeople(3, function(data){    
//             console.log(`3. Nombre: ${data.name}`)
//             getPeople(4, function(data){    
//                 console.log(`4. Nombre: ${data.name}`)
//             })
//         })
//     })
// })  

const getErr = (id) => {
    console.log(id)
    console.log(`Ocurrio un error con el personaje ${id}`)
}

getPeople(1)
.then((persona) => {
    console.log(`EL personaje 1 es: ${persona.name}`)
    return getPeople(2)
})
.then((persona) => {
    console.log(`EL personaje 2 es: ${persona.name}`)
    return getPeople(3)
})
.then((persona) => {
    console.log(`EL personaje 3 es: ${persona.name}`)
    return getPeople(4)
})
.then((persona) => {
    console.log(`EL personaje 4 es: ${persona.name}`)
    return getPeople(5)
})
.then((persona) => {
    console.log(`EL personaje 5 es: ${persona.name}`)
    return getPeople(6)
})
.then((persona) => {
    console.log(`EL personaje 6 es: ${persona.name}`)
    return getPeople(7)
})
.then((persona) => {
    console.log(`EL personaje 7 es: ${persona.name}`)
})
.catch(getErr)