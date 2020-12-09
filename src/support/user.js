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
  adjuntos: 'ADJUNTOS',
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
  
  alert('Información guardada')
}

function updateUser(user) {
  const users = getUsers()

  users[user.uuid] = user

  localStorage.setItem('users', JSON.stringify(users))
  
  alert('Información guardada')
}

function getEmptyUser() {
  return {
		generales: {},
		personal: {},
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


module.exports = {
  STEPS,
  getUsers,
  getUser,
  saveUser,
  updateUser,
  getEmptyUser
}
