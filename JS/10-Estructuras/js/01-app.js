/* let pago ='tarjeta'
switch (pago){
    case 'efectivo':
        console.log(`${pago}`)
        break;
    case 'cheque':
        console.log(`${pago}`)
        break;
    case 'tarjeta':
        tarjet()
        break;
    default :
     console.log('No has elegido el modo de pago o actualmente no tenemos el medio de pago indicado')
     break;    
}

function tarjet(){
    console.log('Se pagará con tarjeta')
} */

/* let pago= 1000

function resultado (){
    if( pago > 400){ // tomar en cuenta que la codicion con maypr valor debería realziarse primero vieo 76
        console.log('excelente aporte')
        return;                      //el return solo lo puedes usar solo en una funcion y lo utilizar cuando no usas el else if y si ejecuta esta funcion ya no se va a la otra si quitamos el return utilizará los dos if.
        
    }if(pago> 300 ){
        console.log('muy buen aporte')
        return;  
    
    }

}

resultado();
 */

let pago = 300
let autenticado = false

console.log(pago === 300 ? autenticado ? 'te encuentras autenticado y tienes el monto' : 'no esta autenticado' : 'no tienes el monto')
/* es un if annidado si funciona la primera eejecuta la segunda  */