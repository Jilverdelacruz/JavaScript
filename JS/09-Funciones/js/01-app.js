// funcion declarativa : lee dos veces el archivo primero para leer las funciones y la segunda para ver las ejecucaciones
/* suma()
function suma (){
    console.log(2+2)
}

suma();

resta()
//funcion expresiva solo ejecuta una sola vez
const resta = function (){
    console.log(4-3)
}
 resta(); */
/* funciones con parametros por default */
/*  function prueba(nombre = '', apellido ='desconocido') {
 console.log(`mi nombre es ${nombre} y mi apellido es ${apellido}`)
 }

 prueba('prueba'); */

 // una funcion  dentro de otra
 /* segundo();
 function segundo(){
     console.log('soy el segundo proceso')
     primero();
 }

 function primero(){
     console.log('soy el primero')
     tercer('papa')
 }

 function tercer(prueba){
    console.log(`mi primera prueba ${prueba}`)
 } */

/*  total=0
 function precio(precio){
     return  total += precio   
 }
 precio(600)
 precio(900)
 precio(900)
 console.log(total)
impuestos(total)
console.log(final)

function impuestos(total){
    return final= total + 20
 }  */

//Metodos de propiedad
/* const spotify = {
    pausar: function (){
        console.log('Pausar una canción')
    },
    adelantar: function(){
        console.log('Ir a la siguiente cancion')
    }
}

spotify.playlist = function(nombre){
    console.log(`reproducir la canción ${nombre}`)
}

console.log(spotify)
spotify.pausar()
spotify.playlist('Principe') */

// Arrow functions 
/* const spotify = function(cantante, musica){
   return `reproducdiendo ${musica} de ${cantante}`
}
console.log(spotify('Hector Lavoe', 'yo soy el cantante'))

const spotify2 =  (cantante, musica) => `reproducdiendo ${musica} de ${musica}` // primero la flecha reemplaza la palabra function y se pone a la derecha del parametro si solo es un parámetro no es necesario es tener parántesis ( si son más de 2 parámetros si amerita parentesis), adicionalmente si solo va una actividad dentro de las llaves no amerita las llaves es más asume que se rentorna ese valor
console.log(spotify('Hector Lavoe', 'yo soy el cantante')) */

// Arrow functions  en foreach y map
/* const computador = [
    {placa:'MSI', precio:27},
    {placa:'ASUS', precio:30},
    {placa:'HP', precio:20},
    {placa:'LENOVO', precio:15}
]

 computador.forEach(function (producto) {
    console.log(producto.placa)
}) 

// computador.forEach(producto => console.log(producto.placa))
const listaComponentes = computador.map( componente => `los modelos de placas son ${componente.placa}`)

console.log(listaComponentes) */

//Arrow function en los métdos de propiedad
 const spotify = {
     cancion:'',
     cancion2:'',
    pausar:() => console.log('Pausar una canción'),
    adelantar: () => console.log('Ir a la siguiente cancion'),
    set nuevaCancion(cancion){
        this.cancion= cancion
        console.log(`Añaniendo nueva cancion`)
    },
    get obtenerCancion(){
    console.log(`la cancion agregada es ${this.cancion}`)
    }
}
spotify.cancion2= function(cancionN){
    console.log(`cancion agregada ${cancionN} `)

}

spotify.playlist = nombre => console.log(`reproducir la canción ${nombre}`)


console.log(spotify)
spotify.pausar()
spotify.playlist('Principe')

spotify.nuevaCancion = 'Asi es la visa'
spotify.obtenerCancion;

spotify.cancion2=('prueba nueva')
