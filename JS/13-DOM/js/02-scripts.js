const btnflotante = document.querySelector('.btn-flotante')
const piePagina = document.querySelector('.footer')


btnflotante.addEventListener('click', miFuncion);

function miFuncion(){
    if( piePagina.classList.contains('activo')){
        piePagina.classList.remove('activo');
        btnflotante.classList.remove('active');
        btnflotante.textContent = 'Idioma y moneda'
    }else{
        piePagina.classList.add('activo');
        btnflotante.classList.add('active')
        btnflotante.textContent = 'x Cerrar'
    }
    

}
console.log(btnflotante.classList)
