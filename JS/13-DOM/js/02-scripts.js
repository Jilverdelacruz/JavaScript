let piePagina= document.querySelector('.footer')
let btnflotante= document.querySelector('.btn-flotante')

btnflotante.addEventListener('click', miFuncion)

function miFuncion(){
    if(piePagina.classList.contains('activo')){
        piePagina.classList.remove('activo');
        btnflotante.classList.remove('activo')
    }else
    piePagina.classList.add('activo')
    btnflotante.classList.add('activo')
 

}
console.log(piePagina)
