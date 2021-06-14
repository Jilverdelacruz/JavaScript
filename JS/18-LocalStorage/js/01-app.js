/* localStorage.setItem('persona','Javier')

const product={
    id:1,
    name:'apple'
}
const products= [
    {id:1, name:'banana'},
    {id:2, name:'apple'}
]

const productString= JSON.stringify(product)
console.log(typeof productString)
localStorage.setItem('product', productString)
localStorage.setItem('products', JSON.stringify(products))

const newProducts= localStorage.getItem('products')
console.log(JSON.parse(newProducts))

localStorage.r */

product2={name:'Manzana', price:3}
produc2String= JSON.stringify(product2)

localStorage.setItem('product2', produc2String)

const productArray= JSON.parse(localStorage.getItem('product2'))

const nuevo={oferta:true, descuento:true}
const resultProductArray = {...productArray, ...nuevo }
produc2String= JSON.stringify(resultProductArray)
localStorage.setItem('product2', produc2String)



/* localStorage.removeItem('product2') */


/* produc2String= JSON.stringify(newProduct2)
localStorage.setItem('product2', newProduct2) */







