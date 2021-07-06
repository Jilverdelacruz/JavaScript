const divProducts= document.querySelector('#lista-cursos')
const tbodyCar= document.querySelector('#carrito tbody')
const cleanCar=document.querySelector('#vaciar-carrito')
let car=[]

loadFunctions()

function loadFunctions(){
    divProducts.addEventListener('click', addProduct)
    cleanCar.addEventListener('click', cleanProduct)
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
     const exists = car.some(article => article.id === product.id)
     if(exists){
         car.forEach(article=>{
            if(article.id === product.id){
                article.quantity++
            }
         })
     }else{
        car=[...car, product]
     }
     
     showCar()
}
function showCar(){
    cleanProduct()
    car.forEach(product=>{
        const tr = document.createElement('tr')
        tr.innerHTML= `
        <td><img src='${product.image}' width='200px'></td>
        <td><p>${product.title}</p></td>
        <td><p>${product.price}</p></td>
        <td><p>${product.quantity}</p></td>
        <td><a href='#' class='borrar-curso' onclick="deleteProduct('${product.id}')">x</a></td>
        `
        tbodyCar.appendChild(tr)
    })

}
function cleanProduct(tr){
    tbodyCar.innerHTML=''
}
function deleteProduct(id){
    car = car.filter(article=> article.id !== id)
    showCar()
    
}