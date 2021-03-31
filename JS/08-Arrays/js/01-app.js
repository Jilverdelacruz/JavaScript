const paises = ['Peru', 'Bolivia', 'Brasil', 'Colombia',[ 'calle1', 'calle2', 'calle3']]
//  cantidadPaises= paises.length
//  console.log(cantidadPaises)
//  for(let i=0; i<= cantidadPaises; i ++){
//      console.log(paises[i])
//  }

//Agregar un elemento
// personas=[]

// persona1= {
//     nombre:'pedro',
//     apellido: 'Galarza'
// }

// persona2={
//     nombre:'maria',
//     apellido:'Matos'
// }
// persona={
//     nombre:'maria',
//     apellido:'Matos'
// }


// personas.push(persona1)
// personas.unshift(persona2)
// let resultado = [ ...personas, persona1];
//     resultado=  [persona2, ...resultado]
// console.log(resultado)

frutas =[
    'duraznos','peras', 'manzanas' , 'platanos'
]
// frutas.pop()
// console.log(frutas)

/* // frutas.shift()
// console.log(frutas)
frutas.splice(1,1) // primer parámetro para ver desde conde comienza a eliminar, segundo parámetros cuantos elementos van eliminar 
console.log(frutas)
 */
//DESTRUCTURING DESTRUCTURAR UN ARREGLO Y PASARLE EL VALOR A UNA VARIABLE

// const [primero, ...segundo] = frutas

// console.log(primero)
// console.log(segundo)
personas=[
    {
        nombre:'pedro',
        apellido: 'Galarza'
    },
    
    {
        nombre:'Juia',
        apellido:'Matosa'
    },
    {
        nombre:'maria',
        apellido:'Matos'
    }]

    // personas.forEach(function(element){
    //     console.log(element.nombre)
    // })
/*     for(i=0; i<= personas.length ; i++){
        console.log(personas[i].nombre)
    } */
    const prueba = personas.map(function(elemento){
       return  elemento.apellido
    })
    console.log(prueba)