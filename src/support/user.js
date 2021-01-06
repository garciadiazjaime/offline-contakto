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
      }]
    },
		marco: {},
		economica: {},
		referencias: {},
		evaluacion: {},
		adjuntos: {}
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
