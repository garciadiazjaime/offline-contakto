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
		salud: {},
		academica: {},
		vivienda: {},
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
