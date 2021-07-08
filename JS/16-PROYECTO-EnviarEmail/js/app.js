//Variables

const btnSend= document.querySelector('#enviar')
const formMail= document.querySelector('#enviar-mail')

//variables form
const formEmail = document.querySelector('#email');
const formTitleMsg = document.querySelector('#asunto');
const formMsg = document.querySelector('#mensaje');


loadEvents()

function loadEvents(){
    document.addEventListener('DOMContentLoaded', startApp);
    formEmail.addEventListener('blur', validateForm)
    formTitleMsg.addEventListener('blur', validateForm)
    formMsg.addEventListener('blur', validateForm)
}

//Funciones
function startApp(){
    btnSend.disabled= true // dehsabilitamos la función del boton
    
}
function validateForm(e){
    const data= e.target
    
    
    if(data.value.length > 0){ // si se iniciaba con menor no funciona
        
      //  e.target.style.borderBottomColor='red'  //se le está agregando una clase de css a pesar de estar en tailwinds
      
      // delete los errors
      const error= document.querySelector('p.error')
      if(error !== null){ // se coloca esta condicion porque cabe la probabilidad de que el usuario a la primera ingrese datos correctos entonces el elemento p con clase error nunca existirá por ende nunca podrá encontrar e elemento y saldra un error en la consola.
        error.remove();
      }
     

      data.classList.remove('border','border-red-400')
      data.classList.add('border','border-green-400')
        
    }else{
        data.classList.remove('border','border-green-400')
        data.classList.add('border','border-red-400')
        showAlert('No ha ingresado la data')
        
    }
    if(e.target.type ==='email'){
        
      const  er= /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      
        if(er.test(e.target.value)){
            const error= document.querySelector('p.error')
            if(error !== null){ 
                error.remove();
              }

            data.classList.remove('border','border-red-400')
            data.classList.add('border','border-green-400')
        }else{
            data.classList.remove('border','border-green-400')
            data.classList.add('border','border-red-400')
        showAlert('Correo inválido')
        }
        
      }
}
function showAlert(mensaje){
    const alert= document.createElement('p')
    alert.textContent= mensaje
    alert.classList.add('border', 'border-red-400', 'mt-5', 'p-4', 'error')
    const erros =document.querySelectorAll('.error')  // no se usará solo el queryselector porque cuando si no hay ninguno lo catalogará como nulo y no como 0 como lo hace el query...all por ende solo en el qeuery...all se puede usar el .length
    if(erros.length === 0){
        formMail.appendChild(alert)
    }
    


}