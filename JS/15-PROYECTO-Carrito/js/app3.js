const divProducts= document.querySelector('#lista-cursos')
const tbodyCar= document.querySelector('#carrito tbody')
let car=[]

loadFunctions()

function loadFunctions(){
    divProducts.addEventListener('click', addProduct)
}

function addProduct(e){
    e.preventDefault()
    const btnAdd= e.target.classList.contains('agregar-carrito');
    if(btnAdd){
        objProduct(e)
    }
}
function objProduct(e){
    const divProduct= e.target.parentElement.parentElement
     const product ={
         id:divProduct.querySelector('a').getAttribute('data-id'),
         image:divProduct.querySelector('img').src,
         title: divProduct.querySelector('h4').textContent,
         price: divProduct.querySelector('span').textContent,
         quantity:1
     }
     car=[...car, product]
     showCar(car)
}
function showCar(products){
    cleanProduct()
    products.forEach(product=>{
        const tr = document.createElement('tr')
        tr.innerHTML= `
        <td><img src='${product.image}' width='200px'></td>
        <td><p>${product.title}</p></td>
        <td><p>${product.price}</p></td>
        <td><p>${product.quantity}</p></td>
        <td><a href='#' class='borrar-curso'>x</a></td>
        `
        tbodyCar.appendChild(tr)
    })

}
function cleanProduct(tr){
    tbodyCar.innerHTML=''
}