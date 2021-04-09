const btnflotante = document.querySelector('.btn-flotante')
const piePagina = document.querySelector('.footer')


btnflotante.addEventListener('click', miFuncion);

function miFuncion(){
    if( piePagina.classList.contains('activo')){
        piePagina.classList.remove('activo');
        btnflotante.classList.remove('active');
    }else
    piePagina.classList.add('activo');
    btnflotante.classList.add('active')

}
console.log(btnflotante.classList)
