'use strict'
const persona = {
    nombrea: 'jilver',
    edada:26,
    casadoa:true
}
/* Object.freeze(persona)
// persona.hermano= 'juan'
console.log(persona)
console.log(Object.isFrozen(persona)) */
/* Object.seal(persona)
persona.edad=27
console.log(persona) */
const persona2={
    nombre: 'teresa',
    edad: 24,
    casada: false
}

const personas = Object.assign(persona, persona2)
console.log(personas)

const personas2 = {...persona, ...persona2}
console.log(personas2)
console.log(Object.keys(persona2))
console.log(Object.values(persona2))
console.log(Object.entries(persona2))