productos=[
    {nombre:'lavadora', precio:30},
    {nombre:'plancha', precio:70},
    {nombre:'tv', precio:20}
]

let resultado = productos.some((element)=>{
   return element.nombre === 'plancha'
})
console.log(resultado)


let resultado2 = productos.every( producto => producto === 'tv')
console.log(resultado2)

let resultado3=