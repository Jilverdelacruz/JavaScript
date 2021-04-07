frutas= ['manzana', 'durazno', 'pera']
productos=[
    {nombre:'placaaa', precio:60},
    {nombre:'fuente', precio:60},
    {nombre:'memoria', precio:15}
]

productos2=[
  
    {nombre:'rario', precio:30},
    {nombre:'licuadora', precio:60}
]
productos5=[
  
    {nombre:'rario', precio:30},
    {nombre:'licuadora', precio:20}
]

// includes
resultado = frutas.includes('manzana')
console.log(resultado)

// some 
let resultado2 = productos.some(producto => producto.nombre === 'lavadora') //almenos un elemento tien que cumplir
console.log(resultado2)

let resultado3=productos.every(producto => producto.nombre === 'lavadora')
console.log(resultado3)

//findIndex
let resultado4=productos.findIndex(producto => producto.nombre === 'tv') // te bota el indice donde lo encuentra sino lo encuentra le coloca un -1
console.log(resultado4)

//reduce
let resultado5=productos.reduce((total, producto) => total + producto.precio, 0 )
console.log(resultado5)

// filter
let resultado6=productos.filter(producto => producto.nombre !== 'tv')
console.log(resultado6)

//find
let resultado7= productos.find(producto => producto.nombre = 'tv')
console.log(resultado7)


//concat

let resultado8 = productos.concat(frutas,productos2)
console.log(resultado8)

//Spread Operator

let resultado9= [...productos5, ...productos2]
console.log(resultado9)