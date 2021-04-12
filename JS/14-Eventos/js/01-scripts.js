/* console.log(1)

document.addEventListener('DOMContentLoaded', () =>{ // se ejecuta al final  cuando el documento ya se mostró
    console.log(2)
})

console.log(3) 

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
}) 

const btnBuscar = document.querySelector('.busqueda')


/* btnBuscar.addEventListener('keyup', () => {  // cuando digitas prduce el evento
    console.log('hiciste lick')
})


btnBuscar.addEventListener('keyup', () => {  // cuando presionas y sueltas la tecla
    console.log('hiciste lick')
})

btnBuscar.addEventListener('keydown', () => {  // cuando presionas  la tecla
    console.log('hiciste lick presionando la ttecla')
})

btnBuscar.addEventListener('blur', () => {  // cuando presionas fuera del input
    console.log('hiciste lick presionando fuera del input')
}) 

// existe el copy paste cut y input que funciona para todo menos para blur
btnBuscar.addEventListener('input', (e) => {  // si le colocar un parametro llama el evento input y puede sacar el valor
   // console.log(e.target.value)  te bota el valor del input
   if( e.target.value === ''){
    console.log(' el valor está vacío')
   }else{
       console.log(e.target.value)
   }
}) 

const btnBuscar= document.querySelector('.formulario')
 btnBuscar.addEventListener('submit', miFuncion)

 function miFuncion(e){
     e.preventDefault();
     console.log('enviar info')
     console.log(e.target.action)
 }

  const btnFormu= document.querySelector('.formulario')
 btnFormu.addEventListener('submit', (e) => {
     e.preventDefault(); // evita que realiza por defaul es decir ya no le el action que hay en el fomurlairo
     console.log('prueba') 
     console.log(e.target.action) // imprime la ruta del fomurlario (action)
 })
 */

/*  const premiun = document.querySelector('.premium') // elemento
  const ubicacion= premiun.getBoundingClientRect();  // te brinda propiedas como top( los pixeles  de arriba hacía el elemento)
 console.log(ubicacion) 
// scrolly : indica los pixeles que va dando mientra se presenta el scrooll
window.addEventListener('scroll', miFuncion)

function miFuncion(){
    const premiun = document.querySelector('.premium')
const ubicacion= premiun.getBoundingClientRect()
console.log(ubicacion)
if( ubicacion.top < 978){
    console.log('ya se ve el elemento')
}else{
    console.log('aun no se el elemento')
}
}

Event Bubbling: Se presenta cuando tanto un elemento padre 
como el elligo hay un evento, entonces cuand ose produce
el evento del elemento hijo inmediatamente ejecuta el evento del padre y es lo que no se quiere.*/

/* const card = document.querySelector('.card')
const info=document.querySelector('.info')
const titulo=document.querySelector('.titulo') */

// vemos que el padre car ejecuta un evento, pero como titulo es un hijo de card  al dar click al titulo se ejecutara automaticamente el evento del card y eso no queremos 
// e.stopPropagation()   se utilizara ára que sol ose ejecute el evento seleccionado
/* card.addEventListener('click', (e)=> {
    e.stopPropagation()
    console.log('funcion de card')
})

titulo.addEventListener('click', (e)=> {
    e.stopPropagation()  // se utilizara ára que sol ose ejecute el evento seleccionado
    console.log('funcion de titulo')
}) */
// Event Bubbling: por delegación
const card = document.querySelector('.card')

card.addEventListener('click', (e) => {
    if (e.target.classList.contains('titulo')){
        console.log('este es un titulo')
    }
    if(e.target.classList.contains('precio')){
        console.log('precio')
    }
    if(e.target.classList.contains('card')){
        console.log('card')
    }
})


/* const info= document.querySelector('.info')
console.log(info)
const titulo2= document.createElement('p')
titulo2.textContent='NUEVO TITULO2'
titulo2.onclick=miFuncion // SE LLAMA A LA FUNCIÓN
info.appendChild(titulo2) 

function miFuncion(){
    console.log('mi funcion ejecutada')
} 

// si en caso la funcion tiene parametro es neceario que se haga antes una arrow function
const info= document.querySelector('.info')
console.log(info)
const titulo2= document.createElement('p')
titulo2.textContent='NUEVO TITULO2'
titulo2.onclick= function(){ // se genera dentro deun arrow function porque sino se ejecutara sin darle click
    miFuncion(123)
}

info.appendChild(titulo2) 

function miFuncion(id){
    console.log('mi funcion ejecutada',id) 
}*/