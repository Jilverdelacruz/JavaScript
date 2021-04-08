/* let elemento;

elemento= document; // te selecionado todo el contenido html
elemento = document.all; // te selecionado todo el contenido html incluido los meta link etc
elemento= document.head; // todo el contenido del head
elemento=document.body // todo el contenido del body
elemento = document.domain; // indica la url donde está siendo cargada
elemento = document.forms // indica los formularios tte bota una coleccion de html como s fuera un arreglo
elemento=document.forms[0].classList // Ingresando a la Coleccion de html
elemento=document.forms[0].method // ingreso al método del formulario POST
elemento=document.forms[0].id //ingreso al id del formulario
elemento=document.forms[0].action // Ingreso al action.
elemento = document.links // Ingresará a todos los enlaces
elemento = document.links[4].classList // me  bota la clases del enlace numero 4 te bota como un arreglo
elemento = document.links[4].className // te bora como un string
elemento= document.images[4].src // Ingreso  a la imagen 4 y  busco el src
console.log(elemento) 
 */

/* let resultado= document.getElementsByClassName('contenedor') // te indica todos las etiquetas que tienen como clase contenedor. 
console.log(resultado)

resultado=document.getElementById('formulario') // te indica todos las etiquetas que tienen con el id fomurlario. 
console.log(resultado) */

/* // querySelector : busca el primero que indicas por etiqueta class y id
let resultado = document.querySelector('nav') // estoy buscnado por etiqueta
console.log(resultado)

resultado= document.querySelector('.hacer .contenedor-cards .card')  // indico que estoy seleccionando el hijo del hijo del padre
console.log(resultado)

resultado=document.querySelector('section.destinos .contenedor-cards .card:nth-child(2)') // section viene ser la etiqueta donde esta la clase :nth-chil indico que  elemento saldrá.

console.log(resultado) 

resultado= document.querySelectorAll('.card')
console.log(resultado) */

/* resultado = document.querySelector('.contenido-hero h1').innerText // no se mostrará si en el css colocan visibility:hidden
resultado2 = document.querySelector('.contenido-hero h1').textContent // si o si se ecnontrará pero en string
resultado3 = document.querySelector('.contenido-hero h1').innerHTML // se ha una etiqueta dentro lo muestra */

/* console.log(resultado)
console.log(resultado2)
console.log(resultado3) 

resultado4 = document.querySelector('.contenido-hero h1').textContent ='prueba' // se puede hacer con cluaiqer 

let resultado = document.querySelector('.contenido-hero h1')
resultado.style.backgroundColor = 'red'

let resultado2= document.querySelector('.hacer .card')
resultado2.classList.add('nueva' , 'nueva2') // agrega clases
resultado2.classList.remove('card') // quita clases
console.log(resultado2)

let resultado = document.querySelector('.navegacion').children // una coleccion de nodos= es igualk a elementos hijos
let resultado1= document.querySelector('a').parentElement // llama al padre
let resultado2 = document.querySelector('.card').nextElementSibling // llama al hermano siguiente
let resultado3 = document.querySelector('.card:nth-child(3)').previousElementSibling // llama a un hermnano antes

console.log(resultado3)*/

/* let resultado = document.querySelector('a')
resultado.remove()
console.log(resultado) */

let resultado2 = document.querySelector('nav')

resultado2.removeChild(resultado2.children[0])
