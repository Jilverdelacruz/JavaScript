// FOR LOP - PRACTICA JUNIOR
/* for(let i =0; i<=20; i++){
    if(i%2 === 0){  
        console.log(`${i}`)
    }

} */
// FOR LOP - PRACTICA JUNIOR 2 con arreglo
/* producto = [
    {nombre:'placa', precio:30},
    {nombre:'fuente', precio:60},
    {nombre:'memoria', precio:15}
]
   let cantidad= producto.length;
   
    for(let i=0; i < cantidad ; i++){
       console.log(producto[i].nombre)
   } 
 */
// PREGUNTA DE TRABAJO
//BREACK: CORTA LA EJECUCIÓN DE UN FUNCION
// CONTINUE: INTERSECTA UN ELEMENTO Y CONTINUA EJECUCION
/*  CREAR UN FOR LOP QUE AL DETECTAR EL ELEMENTO 5 DETENGA LA EEJCUION 

for(let i=0; i<10 ; i++){
    if(i === 5){
        console.log('cinco')
        break;
    }
    console.log(i)
}

/*  CREAR UN FOR LOP QUE AL DETECTAR EL ELEMENTO 5 lo coloque en letras reemplace y que siga la ejecucion 

for(let i=0 ; i<10; i++){
    if(i === 5){
        console.log('cinco')
        continue;
    }
    console.log(i)
}*/

/*detecta cual es el producto que ya aderiste al carrito  tiene oferta  

producto = [
    {nombre:'placa', precio:30 , oferta:false},
    {nombre:'fuente', precio:60, oferta:true},
    {nombre:'memoria', precio:15, oferta:true},
    {nombre:'disco', precio:20}
]

let cantidad = producto.length
for(let i=0; i<cantidad; i++){ 
    if(producto[i].oferta){
        console.log(`el producto ${producto[i].nombre} tiene descuento`)
        continue;
    }
    console.log(producto[i].nombre)
} */

/*tercera practica de trabajo de for 
si es multiplo 3 fizz
si es multiplo de 5 buzz
si es multiplo de 3 y 5 fitbuz

for(let i =0; i<100; i++){
    if(i % 3 ===0 && i % 5 ===0){
        console.log(`el numero ${i} es fizzbuzz`)
    }
    else if(i % 3 ===0){
        console.log(`el numero ${i}  es fizz`)
    }
    else if(i % 5 ===0){
        console.log(`el numero ${i}  es buzz`)
    }
    
     else{
         console.log(`el numero  ${i} no es multiple de 3 o 5`)
     }
     
}
WHILE
numero =0;
while (numero<10){
    console.log(numero)
    numero++;

}
numero = 99;
do{
    console.log(numero)
    numero++;
}while(numero<10)
productos = [
    {nombre:'placa', precio:30},
    {nombre:'fuente', precio:60},
    {nombre:'memoria', precio:15}
]

productos.forEach((producto, i) =>console.log(i, producto.nombre) )  // el sefundo parametro hace referencia al indice

// for of es para recorrer arreglos, mientras que for in  para recorrer propiedades del objetos
productos = [
    {nombre:'placa', precio:30},
    {nombre:'fuente', precio:60},
    {nombre:'memoria', precio:15}
]

/* for (let producto of productos){
    console.log(producto.nombre, producto.precio)
} 

producto = 
    {nombre:'placa', precio:30, stock:true}

for(let product in producto){
    console.log(producto[product])
}
for(let [llave, valor] of Object.entries(producto)){
    console.log(llave) // nueva forma para objetos S7
}
*/


