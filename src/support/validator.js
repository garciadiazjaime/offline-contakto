import { publish } from './events'

const telephoneRegex = /^[\d]{3}-[\d]{3}-[\d]{4}$/
const dateRegex = /^[\d]{2}\/[\d]{2}\/[\d]{4}$/

const nacionalidad = [
  ['Mexicana', 'Mexicana'],
  ['', 'Otra']
]

const medioTransporte = [
  ['AUTOMÓVIL', 'AUTOMÓVIL'],
  ['MOTO', 'MOTO'],
  ['TRANSPORTE PÚBLICO', 'TRANSPORTE PÚBLICO'],
  ['TRANSPORTE PRIVADO', 'TRANSPORTE PRIVADO'],
  ['', 'OTRO'],
]
  
function arePhonesValid(fields) {
  if (!fields.length) {
    return true
  }
  
  if (!telephoneRegex.test(fields[0]) && fields[0].toLowerCase() !== 'no tiene') {
    return false
  }

  return arePhonesValid(fields.slice(1))
}

function areDatesValid(fields) {
  if (!fields.length) {
    return true
  }
  
  if (!dateRegex.test(fields[0])) {
    return false
  }

  return areDatesValid(fields.slice(1))		
}

function isRFCValid(field) {
  return field && field.length >= 10
}

function isCURPValid(field) {
  return field && field.length === 18
}

function isNSSValid(field) {
  return field && field.length === 11
}

function isINEValid(field) {
  return field && field.length === 13
}

function isDatosGeneralesValid(user) {
  if (!arePhonesValid([user.datos_generales.telefono.casa, user.datos_generales.telefono.movil, user.datos_generales.telefono.recados.numero])) {
    return publish('UPDATE_MSG', { msg: 'Teléfonos deben llevar el formato: 123-123-1234 o "no tiene"' })
  }

  if (!areDatesValid([user.datos_generales.origen.fecha, user.datos_generales.fecha_matrimonio])) {
    return publish('UPDATE_MSG', { msg: 'El formato para las fechas debe ser: DD/MM/AAAA' })
  }

  if (!isRFCValid(user.datos_generales.rfc)) {
    return publish('UPDATE_MSG', { msg: 'RFC require mínimo 10 caracteres' })
  }

  if (!isCURPValid(user.datos_generales.curp)) {
    return publish('UPDATE_MSG', { msg: 'CURP require 18 caracteres' })
  }

  if (!isNSSValid(user.datos_generales.nss)) {
    return publish('UPDATE_MSG', { msg: 'NSS require 11 caracteres' })
  }

  if (!isINEValid(user.datos_generales.ife)) {
    return publish('UPDATE_MSG', { msg: 'INE require 13 caracteres' })
  }

  if (user.datos_generales.origen.nacionalidad !== '' && !nacionalidad.map(item => item[0].toLocaleLowerCase()).includes(user.datos_generales.origen.nacionalidad.toLocaleLowerCase())) {
    return publish('UPDATE_MSG', { msg: 'Valor incorrecto para Nacionalidad' })
  }  

  if (user.datos_generales.medio_utilizado !== '' && !medioTransporte.map(item => item[0].toLocaleLowerCase()).includes(user.datos_generales.medio_utilizado.toLocaleLowerCase())) {
    return publish('UPDATE_MSG', { msg: 'Valor incorrecto para Medio de Transporte' })
  }  

  return true
}

export {
  isDatosGeneralesValid,
  nacionalidad,
  medioTransporte
}
