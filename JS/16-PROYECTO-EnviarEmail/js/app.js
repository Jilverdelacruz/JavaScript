//Variables

const btnSend= document.querySelector('#enviar')
const formMail= document.querySelector('#enviar-mail')
const btnReset= document.querySelector('#resetBtn')

//variables form
const formEmail = document.querySelector('#email');
const  er= /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; // son consideradas expresiones regulares

const formTitleMsg = document.querySelector('#asunto');
const formMsg = document.querySelector('#mensaje');


loadEvents()

function loadEvents(){
    document.addEventListener('DOMContentLoaded', startApp);
    formEmail.addEventListener('blur', validateForm);
    formTitleMsg.addEventListener('blur', validateForm);
    formMsg.addEventListener('blur', validateForm);
    formMail.addEventListener('submit', sendMsj )
    btnReset.addEventListener('click', resetText)
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
      if(error){ // se coloca esta condicion porque cabe la probabilidad de que el usuario a la primera ingrese datos correctos entonces el elemento p con clase error nunca existirá por ende nunca podrá encontrar e elemento y saldra un error en la consola.
        error.remove();
      }
     

      data.classList.remove('border','border-red-400')
      data.classList.add('border','border-green-400')
        
    }else{
      const error= document.querySelector('p.error')
      if(error){ 
        error.remove();
      }
        data.classList.remove('border','border-green-400')
        data.classList.add('border','border-red-400')
        showAlert('No ha ingresado la data')
        
    }
    if(e.target.type ==='email'){
  
        if(er.test(e.target.value)){
            const error= document.querySelector('p.error')
            if(error){ 
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
      if( er.test(formEmail.value) && formMsg.value !== '' && formTitleMsg.value !== ''){ // tomar en cuenta que en el test, se aplica solo al email si yo coloci e.target.value le va aplicar lo mismo tanto al formsg y el otro input
        btnSend.disabled= false
        btnSend.classList.remove('cursor-not-allowed', 'opacity-50')

      }

}
function showAlert(mensaje){
    const alert= document.createElement('p')
    alert.textContent= mensaje
    alert.classList.add('border', 'border-red-400', 'mt-5', 'p-4', 'error')
    const errors =document.querySelectorAll('.error')  // no se usará solo el queryselector porque cuando si no hay ninguno lo catalogará como nulo y no como 0 como lo hace el query...all por ende solo en el qeuery...all se puede usar el .length
    if(errors.length === 0){
        formMail.appendChild(alert)
    }
  
}

function sendMsj(e){
 e.preventDefault()
 const spinner= document.querySelector('#spinner')
 spinner.style.display='flex' // se está aplicando un clase css para activar 
 
   setTimeout(()=>{
    spinner.style.display='none'
    const msj= document.createElement('p')
   msj.innerHTML='El Mensaje ha sido enviado'
   msj.classList.add('text-white', 'bg-green-400', 'my-10', 'p-5')
   formMail.insertBefore(msj, spinner) 
   setTimeout(()=>{
    formMail.reset();
    msj.remove()
  }, 5000)
   }, 3000)

  
  }
  
  function resetText(){

    formMail.reset();
  }
  
