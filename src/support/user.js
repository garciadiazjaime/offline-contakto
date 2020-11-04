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

function saveUser(data) {
  const users = getUsers()
  const uuid = uuidv4()
  
  users[uuid] = data

	localStorage.setItem('users', JSON.stringify(users))
}


module.exports = {
  getUsers,
  saveUser
}
