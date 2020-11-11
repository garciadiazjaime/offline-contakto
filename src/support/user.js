const STEPS = {
  generales: 'GENERALES',
  personal: 'PERSONAL',
  salud: 3,
  academica: 4,
  vivienda: 5,
  marco: 6,
  economica: 7,
  referencias: 8,
  evaluacion: 9,
  adjuntos: 10,
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

function getUser(activeUUID) {
  const users = getUsers()
  const uuid = Object.keys(users).find(uuid => uuid === activeUUID)
  
  return users[uuid]
}


module.exports = {
  STEPS,
  getUsers,
  getUser,
  saveUser,
  updateUser
}
