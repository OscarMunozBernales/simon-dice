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

const getErr = (id) => {
    console.log(id)
    console.log(`Ocurrio un error con el personaje ${id}`)
}

var ids = [1,2,3,4,5,6,7,8,9]

var promesas = ids.map(id => getPeople(id))

Promise
    .all(promesas)
    .then( personaje => console.log(personaje))
    .catch(getErr)

// getPeople(1)
// .then((persona) => {
//     console.log(`EL personaje 1 es: ${persona.name}`)
//     return getPeople(2)
// })
// .then((persona) => {
//     console.log(`EL personaje 2 es: ${persona.name}`)
//     return getPeople(3)
// })
// .then((persona) => {
//     console.log(`EL personaje 3 es: ${persona.name}`)
//     return getPeople(4)
// })
// .then((persona) => {
//     console.log(`EL personaje 4 es: ${persona.name}`)
//     return getPeople(5)
// })
// .then((persona) => {
//     console.log(`EL personaje 5 es: ${persona.name}`)
//     return getPeople(6)
// })
// .then((persona) => {
//     console.log(`EL personaje 6 es: ${persona.name}`)
//     return getPeople(7)
// })
// .then((persona) => {
//     console.log(`EL personaje 7 es: ${persona.name}`)
// })
// .catch(getErr)