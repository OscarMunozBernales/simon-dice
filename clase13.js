/**
 * CALL BACKS
 */

const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const getPeople = (id, callback) => {
    $
    .get(`${API_URL}${PEOPLE_URL.replace(':id', id)}`, callback)
    .fail(() => {
        console.log(`ERROR AL OBTENER EL PERSONAJE ${id}`)
    })
}

getPeople(1, function(data){
    console.log(`1. Nombre: ${data.name}`)
    getPeople(2, function(data){    
        console.log(`2. Nombre: ${data.name}`)
        getPeople(3, function(data){    
            console.log(`3. Nombre: ${data.name}`)
            getPeople(4, function(data){    
                console.log(`4. Nombre: ${data.name}`)
            })
        })
    })
})   
