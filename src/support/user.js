const STEPS = {
  generales: 'datos-generales',
  personal: 'informacion-personal',
  salud: 'salud-actividades-habitos',
  academica: 'informacion-academica',
  vivienda: 'vivienda',
  marco: 'marco-familiar',
  economica: 'informacion-economica',
  referencias: 'referencias-personales',
  evaluacion: 'evaluacion',
  adjuntos: 'adjuntos',
}

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

function getUsers() {
  if (!process.browser) {
    return {}
  }

  return JSON.parse(localStorage.getItem('users') || '{}')
}

function saveUser(user) {
  const users = getUsers()
  const uuid = uuidv4()

  user.uuid = uuid
  users[uuid] = user

  localStorage.setItem('users', JSON.stringify(users))
}

function updateUser(user) {
  const users = getUsers()

  users[user.uuid] = user

  localStorage.setItem('users', JSON.stringify(users))
}

function getEmptyUser() {
  return {
		datos_generales: {
      nombre: '',
      apellido: '',
      email: '',
      edad: '',
      rfc: '',
      curp: '',
      ife: '',
      pasaporte: '',
      nss: '',
      smn: '',
      estado_civil: '',
      fecha_matrimonio: '',
      religion: '',
      religion_tiempo: '',
      tiempo_radicando: '',
      medio_utilizado: '',
      referencia_vacante: '',
      tiempo_transporte: '',
      dependientes_economicos: '',
      telefono: {
        casa: '',
        movil: '',
        recados: {
          numero: '',
          parentesco: '',
        },
      },
      direccion: {
        calle: '',
        num: '',
        ciudad: '',
        colonia: '',
        cp: '',
        estado: '',
      },
      origen: {
        lugar: '',
        nacionalidad: '',
        fecha: '',
      },
      licencia: {
        numero: '',
        tipo: '',
      },
      infonavit: {
        activo: '',
        fecha_tramite: '',
        numero: '',
        motivo: '',
        uso: '',
      },
      fonacot: {
        activo: '',
        fecha_tramite: '',
        numero: '',
        uso: '',
      },
    },
		info_personal: {
      antecedentes_penales: '',
      tatuajes: '',
      trabajo_anterior_en_empresa: {
        tiene: '',
        motivo_salida: '',
        puesto: '',
        sucursal: '',
        periodo: '',
      },
      familiar_en_empresa: {
        tiene: '',
        puesto: '',
        sucursal: '',
        parentesco: '',
        nombre: '',
      },
    },
		datos_salud: {
      peso_kg: '',
      estatura_mts: '',
      salud_fisica: '',
      salud_visual: '',
      embarazo_meses: '',
      ejercicio_tipo_frecuencia: '',
      accidentes: '',
      intervenciones_quirurgicas: '',
      enfermedades_familiares: '',
      tratamiento_medico_psicologico: '',
      enfermedades_mayor_frecuencia: '',
      institucion_medica: '',
    },
    actividades_habitos: {
      inactividad_laboral: '',
      inactividad_laboral_actividad: '',
      negocios: '',
      negocios_actividad: '',
      frecuencia_tabaco: '',
      frecuencia_alcohol: '',
      frecuencia_otras_sust: '',
    },
		info_academica: {
      cedula_profesional: '',
      cedula_prof_ano_exp: '',
      estudia_actualmente: '0',
      estudios_institucion: '',
      estudios_que: '',
      estudios_horarios: '',
      estudios_dias: '',
      primaria: {
        institucion: '',
        ciudad: '',
        anos: '',
        certificado: '',
      },
      secundaria: {
        institucion: '',
        ciudad: '',
        anos: '',
        certificado: '',
      },
      preparatoria: {
        institucion: '',
        ciudad: '',
        anos: '',
        certificado: '',
      },
      profesional: {
        institucion: '',
        ciudad: '',
        anos: '',
        certificado: '',
      },
      otro_grado: {
        institucion: '',
        ciudad: '',
        anos: '',
        certificado: '',
      },
      otro_idioma: {
        hablado: '',
        leido: '',
        escuchado: '',
        idioma: '',
      },
    },
		situacion_vivienda: {
      tiempo_radicando: '',
      tipo_mobiliario: '',
      sector_socioeconomico: '',
      personas_viven_con_evaluado: '',
      conservacion: '',
      domicilio_anterior: '',
      domicilio_direcciones: '',
      tamano_aprox_mts2: '',
      propietario: {
        nombre: '',
        parentesco: '',
      },
      caracteristicas_vivienda: {
        propia: '',
        rentada: '',
        hipotecada: '',
        prestada: '',
        otra: '',
        valor_aproximado: '',
        renta_mensual: '',
      },
      tipo_inmueble: {
        casa: '',
        terreno_compartido: '',
        departamento: '',
        vivienda_popular: '',
        otro_tipo: '',
      },
      distribucion_dimensiones: {
        habitaciones: '',
        banos: '',
        salas: '',
        comedor: '',
        cocina: '',
        patios: '',
        cocheras: '',
      },
      marco_familiar: [{
        parentesco: '',
        nombre: '',
        edad: '',
        ocupacion: '',
        empresa: '',
        residencia: '',
        telefono: '',
      }, {
        parentesco: '',
        nombre: '',
        edad: '',
        ocupacion: '',
        empresa: '',
        residencia: '',
        telefono: '',
      }, {
        parentesco: '',
        nombre: '',
        edad: '',
        ocupacion: '',
        empresa: '',
        residencia: '',
        telefono: '',
      }, {
        parentesco: '',
        nombre: '',
        edad: '',
        ocupacion: '',
        empresa: '',
        residencia: '',
        telefono: '',
      }, {
        parentesco: '',
        nombre: '',
        edad: '',
        ocupacion: '',
        empresa: '',
        residencia: '',
        telefono: '',
      }, {
        parentesco: '',
        nombre: '',
        edad: '',
        ocupacion: '',
        empresa: '',
        residencia: '',
        telefono: '',
      }, {
        parentesco: '',
        nombre: '',
        edad: '',
        ocupacion: '',
        empresa: '',
        residencia: '',
        telefono: '',
      }, {
        parentesco: '',
        nombre: '',
        edad: '',
        ocupacion: '',
        empresa: '',
        residencia: '',
        telefono: '',
      }, {
        parentesco: '',
        nombre: '',
        edad: '',
        ocupacion: '',
        empresa: '',
        residencia: '',
        telefono: '',
      }, {
        parentesco: '',
        nombre: '',
        edad: '',
        ocupacion: '',
        empresa: '',
        residencia: '',
        telefono: '',
      }]
    },
		marco_familiar: {
      padre: {
        parentesco: 'padre',
        nombre: '',
        edad: '',
        ocupacion: '',
        empresa: '',
        residencia: '',
        telefono: '',
      },
      madre: {
        parentesco: 'madre',
        nombre: '',
        edad: '',
        ocupacion: '',
        empresa: '',
        residencia: '',
        telefono: '',
      },
      hermano: [{
        parentesco: 'hermano',
        nombre: '',
        edad: '',
        ocupacion: '',
        empresa: '',
        residencia: '',
        telefono: '',
      }, {
        parentesco: 'hermano',
        nombre: '',
        edad: '',
        ocupacion: '',
        empresa: '',
        residencia: '',
        telefono: '',
      }, {
        parentesco: 'hermano',
        nombre: '',
        edad: '',
        ocupacion: '',
        empresa: '',
        residencia: '',
        telefono: '',
      }, {
        parentesco: 'hermano',
        nombre: '',
        edad: '',
        ocupacion: '',
        empresa: '',
        residencia: '',
        telefono: '',
      }],
      pareja: {
        parentesco: 'pareja',
        nombre: '',
        edad: '',
        ocupacion: '',
        empresa: '',
        residencia: '',
        telefono: '',
      },
      hijo: [{
        parentesco: 'hijo',
        nombre: '',
        edad: '',
        ocupacion: '',
        empresa: '',
        residencia: '',
        telefono: '',
      }, {
        parentesco: 'hijo',
        nombre: '',
        edad: '',
        ocupacion: '',
        empresa: '',
        residencia: '',
        telefono: '',
      }, {
        parentesco: 'hijo',
        nombre: '',
        edad: '',
        ocupacion: '',
        empresa: '',
        residencia: '',
        telefono: '',
      }, {
        parentesco: 'hijo',
        nombre: '',
        edad: '',
        ocupacion: '',
        empresa: '',
        residencia: '',
        telefono: '',
      }],
      otro: [{
        parentesco: 'otro',
        nombre: '',
        edad: '',
        ocupacion: '',
        empresa: '',
        residencia: '',
        telefono: '',
      }, {
        parentesco: 'otro',
        nombre: '',
        edad: '',
        ocupacion: '',
        empresa: '',
        residencia: '',
        telefono: '',
      }, {
        parentesco: 'otro',
        nombre: '',
        edad: '',
        ocupacion: '',
        empresa: '',
        residencia: '',
        telefono: '',
      }, {
        parentesco: 'otro',
        nombre: '',
        edad: '',
        ocupacion: '',
        empresa: '',
        residencia: '',
        telefono: '',
      }, {
        parentesco: 'otro',
        nombre: '',
        edad: '',
        ocupacion: '',
        empresa: '',
        residencia: '',
        telefono: '',
      }, {
        parentesco: 'otro',
        nombre: '',
        edad: '',
        ocupacion: '',
        empresa: '',
        residencia: '',
        telefono: '',
      }, {
        parentesco: 'otro',
        nombre: '',
        edad: '',
        ocupacion: '',
        empresa: '',
        residencia: '',
        telefono: '',
      }, {
        parentesco: 'otro',
        nombre: '',
        edad: '',
        ocupacion: '',
        empresa: '',
        residencia: '',
        telefono: '',
      }],
    },
		info_economica_mensual: {
      ingresos: [{
        concepto: 'Investigado',
        monto: '',
      }, {
        concepto: 'Cónyuge',
        monto: '',
      }, {
        concepto: 'Padres',
        monto: '',
      }, {
        concepto: 'Hermanos',
        monto: '',
      }, {
        concepto: 'Otro',
        monto: '',
      }, {
        concepto: 'Total',
        monto: '',
      }],
      egresos: [{
        concepto: 'Impuestos',
        monto: '',
      }, {
        concepto: 'Vestimenta',
        monto: '',
      }, {
        concepto: 'Gastos automóvil',
        monto: '',
      }, {
        concepto: 'Transporte publico	',
        monto: '',
      }, {
        concepto: 'Alimentación',
        monto: '',
      }, {
        concepto: 'Educación',
        monto: '',
      }, {
        concepto: 'Médico',
        monto: '',
      }, {
        concepto: 'Diversión',
        monto: '',
      }, {
        concepto: 'Servicios (Luz, Agua, Teléfono)',
        monto: '',
      }, {
        concepto: 'Serv. doméstico',
        monto: '',
      }, {
        concepto: 'Seguros',
        monto: '',
      }, {
        concepto: 'Otro',
        monto: '',
      }, {
        concepto: 'Otro',
        monto: '',
      }, {
        concepto: 'Otro',
        monto: '',
      }, {
        concepto: 'Total',
        monto: '',
      }]
    },
    situacion_economica: {
      tarjetas_credito_comerciales: [{
        institucion: '',
        limite_credito: '',
        pago_minimo: '',
        saldo_actual: '',
      }, {
        institucion: '',
        limite_credito: '',
        pago_minimo: '',
        saldo_actual: '',
      }],
      cuentas_debito: [{
        institucion: '',
        saldo_mensual: '',
        antiguedad: '',
        ahorro: '',
      }, {
        institucion: '',
        saldo_mensual: '',
        antiguedad: '',
        ahorro: '',
      }],
      automoviles: [{
        marca: '',
        modelo_ano: '',
        liquidacion: '',
        valor_comercial: '',
      }, {
        marca: '',
        modelo_ano: '',
        liquidacion: '',
        valor_comercial: '',
      }],
      bienes_raices: [{
        tipo_inmueble: '',
        ubicacion: '',
        liquidacion: '',
        valor_comercial: '',
      }, {
        tipo_inmueble: '',
        ubicacion: '',
        liquidacion: '',
        valor_comercial: '',
      }],
      seguros: [{
        empresa: '',
        tipo: '',
        forma_pago: '',
        vigencia: '',
      }, {
        empresa: '',
        tipo: '',
        forma_pago: '',
        vigencia: '',
      }],
      deudas_actuales: [{
        fecha_otorgamiento: '',
        tipo: '',
        institucion: '',
        cantidad_total: '',
        saldo_actual: '',
        pago_mensual: '',
      }, {
        fecha_otorgamiento: '',
        tipo: '',
        institucion: '',
        cantidad_total: '',
        saldo_actual: '',
        pago_mensual: '',
      }],
    },
		referencias: [{
      tipo: 'Vecinal',
      nombre: '',
      domicilio: '',
      telefono: '',
      tiempo_conocido: '',
      parentesco: '',
      ocupacion: '',
      lugares_labor_evaluado: '',
      opinion: '',
    }, {
      tipo: 'Personal (no familiares)',
      nombre: '',
      domicilio: '',
      telefono: '',
      tiempo_conocido: '',
      parentesco: '',
      ocupacion: '',
      lugares_labor_evaluado: '',
      opinion: '',
    }, {
      tipo: 'Personal',
      nombre: '',
      domicilio: '',
      telefono: '',
      tiempo_conocido: '',
      parentesco: '',
      ocupacion: '',
      lugares_labor_evaluado: '',
      opinion: '',
    }],
		cuadro_evaluacion: {
      documentos_cotejados: [{
        estatus: false,
        tipo: 'Acta de nacimiento',
      }, {
        estatus: false,
        tipo: 'Acta de matrimonio',
      }, {
        estatus: false,
        tipo: 'Comprobante de domicilio',
      }, {
        estatus: false,
        tipo: 'Comprobrante de identificación',
      }, {
        estatus: false,
        tipo: 'Comprobante de NSS',
      }, {
        estatus: false,
        tipo: 'CURP',
      }, {
        estatus: false,
        tipo: 'Cartilla SMN',
      }, {
        estatus: false,
        tipo: 'Último grado de estudios',
      }, {
        estatus: false,
        tipo: 'Cartas laborales',
      }, {
        estatus: '',
        tipo: 'motivos_falta_docs',
        observaciones: '',
      }],
      aspectos_hogar: [{
        tipo: 'Orden',
        estatus: '',
      }, {
        tipo: 'Limpieza',
        estatus: '',
      }, {
        tipo: 'Conservación',
        estatus: '',
      }],
      aspectos_candidato: [{
        tipo: 'Puntualidad',
        estatus: '',
      }, {
        tipo: 'Apariencia física',
        estatus: '',
      }, {
        tipo: 'Colaboración',
        estatus: '',
      }, {
        tipo: 'Actitud',
        estatus: '',
      }],
    },
    adjuntos: {},
    investigacion: {
      viable: '',
      no_viable: '',
      reservas: '',
      empresa: '',
      puesto: '',
      fecha: '',
      conclusiones: '',
      fecha: '',
      fecha_hora: '',
    },
  }
}

function getUser(activeUUID) {
  const users = getUsers()
  const uuid = Object.keys(users).find(uuid => uuid === activeUUID)
  
  return users[uuid] || getEmptyUser()
}

function deleteUser(uuid) {
  const users = getUsers()

  delete users[uuid]

  localStorage.setItem('users', JSON.stringify(users))
}


module.exports = {
  STEPS,
  getUsers,
  getUser,
  saveUser,
  updateUser,
  getEmptyUser,
  deleteUser,
}
