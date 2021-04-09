/* console.log(1)

document.addEventListener('DOMContentLoaded', () =>{ // se ejecuta al final  cuando el documento ya se mostró
    console.log(2)
})

console.log(3) */

const nav = document.querySelector('.navegacion')
nav.addEventListener('mouseenter', () =>{
    console.log('Pasa el mouse y ejecuto')
    nav.style.backgroundColor= 'white'
})

nav.addEventListener('mouseout', () => {
    console.log('ejecuto cuaando sales una vez pasado el mouse')
})

nav.addEventListener('dblclick', () => {
    console.log('ejecuto cuando sabas doble click')
})
/* nav.addEventListener('mousedown', () => {
    console.log('ejecutando como se hiciera click')
})
 */

/* nav.addEventListener('mouseup', () => {
    console.log('ejecutando cuando  dejo el click')
}) */