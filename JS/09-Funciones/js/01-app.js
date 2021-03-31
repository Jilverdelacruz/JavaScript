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

 total=0
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
 } 