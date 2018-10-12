import users from './users.json'

export function getAllUsers() {
	return users
}

export function getUser(id) {
	return users.find(user => user.id === id)
}