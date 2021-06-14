const listCourses= document.querySelector('#lista-cursos')

const listArticles=document.querySelector('#lista-carrito tbody')

const cleanCar= document.querySelector('#vaciar-carrito')

let courses=[]

loadEvents()
function loadEvents(){

    listCourses.addEventListener('click', addArticle)
    listArticles.addEventListener('click', deleteCourse)
    cleanCar.addEventListener('click', CleanArticles)
    
}

function addArticle(e){
    const addCoursesBtn= e.target.classList.contains('agregar-carrito')
    const box = e.target.parentElement.parentElement

    e.preventDefault()
     if(addCoursesBtn){
        readArticle(box)
     }
}

function readArticle(box){
    const infoCourse={
        image :box.querySelector('img').src,
        name: box.querySelector('p').textContent,
        price: box.querySelector('.precio span').textContent,
        id: box.querySelector('a').getAttribute('data-id'),
        quantity: 1
    }
    
    const exist= courses.some(element => element.id === infoCourse.id)
    if(exist){
     const   cursos = courses.map((curso)=>{
                if(curso.id === infoCourse.id){
                curso.quantity++;
                return curso
                }else{
                    return curso
                }
            
        })
        courses=[...cursos]
    }else{
        courses=[...courses, infoCourse]
    }
    
    showListArticles()
}

function showListArticles(){

    CleanArticles()
    courses.forEach((course) =>{
        const {image, name, price, id, quantity} = course
        const tr= document.createElement('tr')
        tr.innerHTML=
        `
        <img src=${image} width=100>
        <td><p>${name}</p></td>
        <td><p>${price}</p></td>
        <td><p>${quantity}</p></td>
        <td><a class='borrar-curso' data-id='${id}'>x</a></td>
        
        `
        listArticles.appendChild(tr)
    })

}

function CleanArticles(){
   //  listArticles.innerHTML=''
   while(listArticles.firstChild){
       listArticles.removeChild(listArticles.firstChild)
   }
}

function deleteCourse(e){
    btnDelete= e.target.classList.contains('borrar-curso')
    if(btnDelete){
        courseId= e.target.getAttribute('data-id')
        console.log(courseId)
    }
    courses = courses.filter((curso)=> curso.id !== courseId)
    showListArticles()
}
