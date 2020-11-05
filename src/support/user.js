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

function getUser(activeUUID) {
  const users = getUsers()
  const uuid = Object.keys(users).find(uuid => uuid === activeUUID)
  
  return users[uuid]
}


module.exports = {
  getUsers,
  getUser,
  saveUser,
  updateUser
}
