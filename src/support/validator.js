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
    return publish('UPDATE_MSG', { msg: 'Teléfonos deben llevar el formato: 123-123-1234 o "No tiene"' })
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

  return true
}

function isNumberOrTextInvalid(value, emptyRule = false) {
  if (emptyRule) {
    return value && isNaN(value) && value != 'no aplica'
  }

  return isNaN(value) && value != 'no aplica'
}

function isViviendaValid(user) {
  if (isNumberOrTextInvalid(user.situacion_vivienda.caracteristicas_vivienda.renta_mensual)) {
    return publish('UPDATE_MSG', { msg: 'Renta mensual debe ser un número o el texto "No aplica"' })
  }

  return true
}

function isInfoEconomicaValid(user) {
  for(let i = 0; i < 5; i++ ){
    if(isNumberOrTextInvalid(user.info_economica_mensual.ingresos[i].monto)) {
      return publish('UPDATE_MSG', { msg: 'Los Ingresos debe ser un número o el texto "No aplica"' })
    }
  }

  for(let i = 0; i < 14; i++ ){
    if(isNumberOrTextInvalid(user.info_economica_mensual.egresos[i].monto)) {
      return publish('UPDATE_MSG', { msg: 'Los Egresos debe ser un número o el texto "No aplica"' })
    }
  }

  // Tarjetas de Crédito
  if(isNumberOrTextInvalid(user.situacion_economica.tarjetas_credito_comerciales[0].limite_credito)) {
    return publish('UPDATE_MSG', { msg: 'Credito en Tarjeta 1 de Crédito debe ser un número o el texto "No aplica"' })
  }
  if(isNumberOrTextInvalid(user.situacion_economica.tarjetas_credito_comerciales[0].pago_minimo)) {
    return publish('UPDATE_MSG', { msg: 'Pago mínimo en Tarjeta 1 de Crédito debe ser un número o el texto "No aplica"' })
  }
  if(isNumberOrTextInvalid(user.situacion_economica.tarjetas_credito_comerciales[0].saldo_actual)) {
    return publish('UPDATE_MSG', { msg: 'Saldo actual en Tarjeta 1 de Crédito debe ser un número o el texto "No aplica"' })
  }

  if(isNumberOrTextInvalid(user.situacion_economica.tarjetas_credito_comerciales[1].limite_credito, true)) {
    return publish('UPDATE_MSG', { msg: 'Credito en Tarjeta 2 de Crédito debe ser un número o en blanco' })
  }
  if(isNumberOrTextInvalid(user.situacion_economica.tarjetas_credito_comerciales[1].pago_minimo, true)) {
    return publish('UPDATE_MSG', { msg: 'Pago mínimo en Tarjeta 2 de Crédito debe ser un número o en blanco' })
  }
  if(isNumberOrTextInvalid(user.situacion_economica.tarjetas_credito_comerciales[1].saldo_actual, true)) {
    return publish('UPDATE_MSG', { msg: 'Saldo actual en Tarjeta 2 de Crédito debe ser un número o en blanco' })
  }

  // Cuentas de débito
  if(isNumberOrTextInvalid(user.situacion_economica.cuentas_debito[0].saldo_mensual)) {
    return publish('UPDATE_MSG', { msg: 'Saldo Mensual en Cuentas de débito 1 debe ser un número o el texto "No aplica"' })
  }
  if(isNumberOrTextInvalid(user.situacion_economica.cuentas_debito[0].ahorro)) {
    return publish('UPDATE_MSG', { msg: 'Ahorro en Cuentas de débito 1 debe ser un número o el texto "No aplica"' })
  }

  if(isNumberOrTextInvalid(user.situacion_economica.cuentas_debito[1].saldo_mensual)) {
    return publish('UPDATE_MSG', { msg: 'Saldo Mensual en Cuentas de débito 2 debe ser un número o el texto "No aplica"' })
  }
  if(isNumberOrTextInvalid(user.situacion_economica.cuentas_debito[1].ahorro)) {
    return publish('UPDATE_MSG', { msg: 'Ahorro en Cuentas de débito 2 debe ser un número o en blanco' })
  }

  // Automóviles
  if(isNumberOrTextInvalid(user.situacion_economica.automoviles[0].valor_comercial)) {
    return publish('UPDATE_MSG', { msg: 'Valor Comercial en Automóviles 1 debe ser un número o el texto "No aplica"' })
  }

  if(isNumberOrTextInvalid(user.situacion_economica.automoviles[1].valor_comercial)) {
    return publish('UPDATE_MSG', { msg: 'Valor Comercial en Automóviles 2 debe ser un número o en blanco' })
  }

  // Bienes Raíces
  if(isNumberOrTextInvalid(user.situacion_economica.bienes_raices[0].valor_comercial)) {
    return publish('UPDATE_MSG', { msg: 'Valor Comercial en Bienes Raíces 1 debe ser un número o el texto "No aplica"' })
  }

  if(isNumberOrTextInvalid(user.situacion_economica.bienes_raices[1].valor_comercial)) {
    return publish('UPDATE_MSG', { msg: 'Valor Comercial en Bienes Raíces 2 debe ser un número o en blanco' })
  }

  // Deudas actuales
  if(isNumberOrTextInvalid(user.situacion_economica.deudas_actuales[0].cantidad_total)) {
    return publish('UPDATE_MSG', { msg: 'Cantidad total en Deudas actuales 1 debe ser un número o el texto "No aplica"' })
  }
  if(isNumberOrTextInvalid(user.situacion_economica.deudas_actuales[0].saldo_actual)) {
    return publish('UPDATE_MSG', { msg: 'Saldo actual en Deudas actuales 1 debe ser un número o el texto "No aplica"' })
  }
  if(isNumberOrTextInvalid(user.situacion_economica.deudas_actuales[0].pago_mensual)) {
    return publish('UPDATE_MSG', { msg: 'Pago mensual en Deudas actuales 1 debe ser un número o el texto "No aplica"' })
  }

  if(isNumberOrTextInvalid(user.situacion_economica.deudas_actuales[1].cantidad_total)) {
    return publish('UPDATE_MSG', { msg: 'Cantidad total en Deudas actuales 2 debe ser un número o en blanco' })
  }
  if(isNumberOrTextInvalid(user.situacion_economica.deudas_actuales[1].saldo_actual)) {
    return publish('UPDATE_MSG', { msg: 'Saldo actual en Deudas actuales 2 debe ser un número o en blanco' })
  }
  if(isNumberOrTextInvalid(user.situacion_economica.deudas_actuales[1].pago_mensual)) {
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
