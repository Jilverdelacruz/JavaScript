const listArticles= document.querySelector('#lista-cursos')
const listCar= document.querySelector('#lista-carrito tbody')
const btnCleanArticles= document.querySelector('#vaciar-carrito')


let articles=[]
loadEvents()

function loadEvents(){
    listArticles.addEventListener('click', addArticle)
    btnCleanArticles.addEventListener('click', clearArticles)
}

function addArticle(e){
    btnAdd= e.target.classList.contains('agregar-carrito')
    e.preventDefault()
    if(btnAdd){
        const box= e.target.parentElement.parentElement
        getArticles(box)

    }
    
}
function getArticles(box){
    article= {
        id:  box.querySelector('a').getAttribute('data-id'),
        img: box.querySelector('img').src,
        title: box.querySelector('h4').textContent,
        price: box.querySelector('span').textContent,
        quantity: 1


    }
    const exist= articles.some(element => element.id === article.id)
    if(exist){
        articles.forEach(element=> {
            if(element.id === article.id){
                element.quantity++
            }
        })
    }else{
        articles=[...articles, article]
    }
    

    showArticles()
}
function showArticles(){
    clearArticles()
    articles.forEach(article=>{
        const tr=document.createElement('tr')
        tr.innerHTML=
        `
        <td><img src='${article.img}' width='100'></td>
        <td><p>${article.title}</p></td>
        <td><p>${article.price}</p></td>
        <td><p>${article.quantity}</p></td>
        <td><a class='borrar-curso' data-id='${article.id}' onclick='deleteArticle(${article.id})'>x</a>
        `
        listCar.appendChild(tr)
    })
    
}

function clearArticles(){
    
    listCar.innerHTML=''
}

function deleteArticle(id){
 const  articlesRest= articles.filter(article => article.id != id )
    articles=[...articlesRest]
    console.log(articles)
    showArticles()
}