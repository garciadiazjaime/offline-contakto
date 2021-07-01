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
]

const motivoSalida = [
  ['Condiciones de trabajo', 'Condiciones de trabajo'],
  ['Falta de herramientas', 'Falta de herramientas'],
  ['Incumplimiento de expectativas a la contratación', 'Incumplimiento de expectativas a la contratación'],
  ['Ajuste vida/trabajo', 'Ajuste vida/trabajo'],
  ['Distancia geográfica', 'Distancia geográfica'],
  ['Maternidad/embarazo', 'Maternidad/embarazo'],
  ['Negocio propio', 'Negocio propio'],
  ['', 'Otro'],
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

function isDateValid(fields) {
  return dateRegex.test(fields)
}

function isDateValidOrTextValid(value) {
  return dateRegex.test(value) || value.toLowerCase() === 'no aplica'
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
  return field && (field.length === 13 || field === "No presentó")
}

function isDatosGeneralesValid(user) {
  if (!arePhonesValid([user.datos_generales.telefono.casa, user.datos_generales.telefono.movil, user.datos_generales.telefono.recados.numero])) {
    return publish('UPDATE_MSG', { msg: 'Teléfonos deben llevar el formato: 123-123-1234 o "No tiene"' })
  }

  if (!isDateValid(user.datos_generales.origen.fecha)) {
    return publish('UPDATE_MSG', { msg: 'El formato para las fechas debe ser: DD/MM/AAAA' })
  }

  if (!isDateValidOrTextValid(user.datos_generales.fecha_matrimonio)) {
    return publish('UPDATE_MSG', { msg: 'El formato para las fechas debe ser: DD/MM/AAAA o el texto "No aplica"' })
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

  return true
}

function isNumberOrTextInvalid(value, emptyRule = false) {
  if (emptyRule) {
    return value && isNaN(value) && value.toLowerCase() !== 'no aplica'
  }

  return isNaN(value) && value.toLowerCase() != 'no aplica'
}

function isViviendaValid(user) {
  if (isNumberOrTextInvalid(user.situacion_vivienda.caracteristicas_vivienda.renta_mensual)) {
    return publish('UPDATE_MSG', { msg: 'Renta mensual debe ser un número o el texto "No aplica"' })
  }

  return true
}

function isInfoEconomicaValid(user) {
  for(let i = 0; i < 5; i++ ){
    if(isNaN(user.info_economica_mensual.ingresos[i].monto)) {
      document.querySelectorAll('input')[9 + i].classList.add('required')
      return publish('UPDATE_MSG', { msg: 'Los Ingresos deben ser numéros' })
    } 
  }

  for(let i = 0; i < 14; i++ ){
    if(isNaN(user.info_economica_mensual.egresos[i].monto)) {
      document.querySelectorAll('input')[15 + i].classList.add('required')
      return publish('UPDATE_MSG', { msg: 'Los Egresos deben ser numéros' })
    }
  }

  // Tarjetas de Crédito
  if (isNumberOrTextInvalid(user.situacion_economica.tarjetas_credito_comerciales[0].limite_credito)) {
    document.querySelectorAll('input')[34].classList.add('required')
    return publish('UPDATE_MSG', { msg: 'Credito en Tarjeta 1 de Crédito debe ser un número o el texto "No aplica"' })
  }
  if (isNumberOrTextInvalid(user.situacion_economica.tarjetas_credito_comerciales[0].pago_minimo)) {
    document.querySelectorAll('input')[35].classList.add('required')
    return publish('UPDATE_MSG', { msg: 'Pago mínimo en Tarjeta 1 de Crédito debe ser un número o el texto "No aplica"' })
  }
  if (isNumberOrTextInvalid(user.situacion_economica.tarjetas_credito_comerciales[0].saldo_actual)) {
    document.querySelectorAll('input')[36].classList.add('required')
    return publish('UPDATE_MSG', { msg: 'Saldo actual en Tarjeta 1 de Crédito debe ser un número o el texto "No aplica"' })
  }

  if (isNumberOrTextInvalid(user.situacion_economica.tarjetas_credito_comerciales[1].limite_credito, true)) {
    document.querySelectorAll('input')[38].classList.add('required')
    return publish('UPDATE_MSG', { msg: 'Credito en Tarjeta 2 de Crédito debe ser un número o en blanco' })
  }
  if (isNumberOrTextInvalid(user.situacion_economica.tarjetas_credito_comerciales[1].pago_minimo, true)) {
    document.querySelectorAll('input')[39].classList.add('required')
    return publish('UPDATE_MSG', { msg: 'Pago mínimo en Tarjeta 2 de Crédito debe ser un número o en blanco' })
  }
  if (isNumberOrTextInvalid(user.situacion_economica.tarjetas_credito_comerciales[1].saldo_actual, true)) {
    document.querySelectorAll('input')[40].classList.add('required')
    return publish('UPDATE_MSG', { msg: 'Saldo actual en Tarjeta 2 de Crédito debe ser un número o en blanco' })
  }

  // Cuentas de débito
  if (isNumberOrTextInvalid(user.situacion_economica.cuentas_debito[0].saldo_mensual)) {
    document.querySelectorAll('input')[42].classList.add('required')
    return publish('UPDATE_MSG', { msg: 'Saldo Mensual en Cuentas de débito 1 debe ser un número o el texto "No aplica"' })
  }
  if (isNumberOrTextInvalid(user.situacion_economica.cuentas_debito[0].ahorro)) {
    document.querySelectorAll('input')[44].classList.add('required')
    return publish('UPDATE_MSG', { msg: 'Ahorro en Cuentas de débito 1 debe ser un número o el texto "No aplica"' })
  }

  if (isNumberOrTextInvalid(user.situacion_economica.cuentas_debito[1].saldo_mensual)) {
    document.querySelectorAll('input')[46].classList.add('required')
    return publish('UPDATE_MSG', { msg: 'Saldo Mensual en Cuentas de débito 2 debe ser un número o el texto "No aplica"' })
  }
  if (isNumberOrTextInvalid(user.situacion_economica.cuentas_debito[1].ahorro)) {
    document.querySelectorAll('input')[48].classList.add('required')
    return publish('UPDATE_MSG', { msg: 'Ahorro en Cuentas de débito 2 debe ser un número o en blanco' })
  }

  // Automóviles
  if (isNumberOrTextInvalid(user.situacion_economica.automoviles[0].valor_comercial)) {
    document.querySelectorAll('input')[52].classList.add('required')
    return publish('UPDATE_MSG', { msg: 'Valor Comercial en Automóviles 1 debe ser un número o el texto "No aplica"' })
  }

  if (isNumberOrTextInvalid(user.situacion_economica.automoviles[1].valor_comercial)) {
    document.querySelectorAll('input')[56].classList.add('required')
    return publish('UPDATE_MSG', { msg: 'Valor Comercial en Automóviles 2 debe ser un número o en blanco' })
  }

  // Bienes Raíces
  if (isNumberOrTextInvalid(user.situacion_economica.bienes_raices[0].valor_comercial)) {
    document.querySelectorAll('input')[60].classList.add('required')
    return publish('UPDATE_MSG', { msg: 'Valor Comercial en Bienes Raíces 1 debe ser un número o el texto "No aplica"' })
  }

  if (isNumberOrTextInvalid(user.situacion_economica.bienes_raices[1].valor_comercial)) {
    document.querySelectorAll('input')[64].classList.add('required')
    return publish('UPDATE_MSG', { msg: 'Valor Comercial en Bienes Raíces 2 debe ser un número o en blanco' })
  }

  // Deudas actuales
  if (isNumberOrTextInvalid(user.situacion_economica.deudas_actuales[0].cantidad_total)) {
    document.querySelectorAll('input')[76].classList.add('required')
    return publish('UPDATE_MSG', { msg: 'Cantidad total en Deudas actuales 1 debe ser un número o el texto "No aplica"' })
  }
  if (isNumberOrTextInvalid(user.situacion_economica.deudas_actuales[0].saldo_actual)) {
    document.querySelectorAll('input')[77].classList.add('required')
    return publish('UPDATE_MSG', { msg: 'Saldo actual en Deudas actuales 1 debe ser un número o el texto "No aplica"' })
  }
  if (isNumberOrTextInvalid(user.situacion_economica.deudas_actuales[0].pago_mensual)) {
    document.querySelectorAll('input')[78].classList.add('required')
    return publish('UPDATE_MSG', { msg: 'Pago mensual en Deudas actuales 1 debe ser un número o el texto "No aplica"' })
  }

  if (isNumberOrTextInvalid(user.situacion_economica.deudas_actuales[1].cantidad_total)) {
    document.querySelectorAll('input')[82].classList.add('required')
    return publish('UPDATE_MSG', { msg: 'Cantidad total en Deudas actuales 2 debe ser un número o en blanco' })
  }
  if (isNumberOrTextInvalid(user.situacion_economica.deudas_actuales[1].saldo_actual)) {
    document.querySelectorAll('input')[83].classList.add('required')
    return publish('UPDATE_MSG', { msg: 'Saldo actual en Deudas actuales 2 debe ser un número o en blanco' })
  }
  if (isNumberOrTextInvalid(user.situacion_economica.deudas_actuales[1].pago_mensual)) {
    document.querySelectorAll('input')[84].classList.add('required')
    return publish('UPDATE_MSG', { msg: 'Pago mensual en Deudas actuales 2 debe ser un número o en blanco' })
  }


  return true
}

export {
  isDatosGeneralesValid,
  nacionalidad,
  medioTransporte,
  motivoSalida,
  isViviendaValid,
  isInfoEconomicaValid,
}
