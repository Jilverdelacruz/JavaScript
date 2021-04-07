/* /* productos = [
    {nombre:'placa', precio:30},
    {nombre:'fuente', precio:60},
    {nombre:'memoria', precio:15}
]

producto = 
    ['televisor', 'radio', 'lavadora']
 */
/* PARA VER SI ESTÁ INCLUIDO EL ELEMENTO PARA PRODUCTO BASICO SE PUEDE UTILIZAR INCLUDES MIENTRAS QUE SOME ES 
PARA PRODUCTOS VARIAS PROPIEDADES Y PARA EL BASICO
//INCLUDES
 let resultado = producto.includes('lavadora')
 console.log(resultado) 

 // SOME se puede utilizar en los casos

 let resultado = producto.some((propiedad) => propiedad === 'televisor' )
 console.log(resultado)

 let resultado2= productos.some((producto)=> producto.nombre === 'placa')
 console.log(resultado2) */

 /* utilizat el findIndex es para encontrar el numero de indice esta el elemento buscado */

/*  let resultado = producto.findIndex((element )=> element === 'lavadora')
 if(resultado === -1){  // el valor te bota la posisicon si es positivo o si  es negativo te bota -1
    console.log('el producto no se encuentra en la lista')
 }else{
    console.log(`el producto si esta en la lista numero ${resultado}`)
} 
let resultado = productos.findIndex((element)=> element.nombre === 'memoria')
console.log(resultado)*/

// reduce : es para sumar todos los elementos
/* productos = [
    {nombre:'placa', precio:30},
    {nombre:'fuente', precio:60},
    {nombre:'memoria', precio:15}
] */
/* let totalPrecio= productos.reduce((total, producto) => total + producto.precio, 0)
console.log(totalPrecio) */

/* filter : te ha im arreglo  con el filtrado realizado
let resultado = productos.filter(producto => producto.nombre !== 'placa')
console.log(resultado)*/

/* find: encuentra solo el primer elemento que cumpla la instrucción
let resultado = productos.find(producto => producto.nombre === 'placa')
console.log(resultado)*/

/*every : todos los elementos tienen que cumplir la condicion true o false mientras que el some basta que uno cumpla la condicion

let resultado = productos.every(producto => producto.nombre === 'placa')
console.log(resultado) 

productos = [
    {nombre:'placa', precio:30},
    {nombre:'fuente', precio:60},
    {nombre:'memoria', precio:15}
]
productos2 = [
    {nombre:'procesador', precio:50},
    {nombre:'coller', precio:60},
    {nombre:'case', precio:15}
]

productos3 = [
    {nombre:'aaa', precio:50},
    {nombre:'bbbb', precio:60},
    
    
]

let resultado = productos.concat(productos2, productos3)
console.log(resultado)


// agregamos un string 
let resultado2 = [...productos, ...productos3, ...productos2, 'laptop']
console.log(resultado2)


//agregamosun objeto
producto={nombre:'ccc', precio:60}
let resultado3 = [...productos, ...productos2, producto]
console.log(resultado3) */