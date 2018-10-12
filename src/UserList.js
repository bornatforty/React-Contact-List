import React, {Component} from 'react'
import {getAllUsers} from './userFunctions'
import {Link} from 'react-router-dom'

//receives props as parameter
const UserList = (props) => (
			<ul className="listContainer">
				<header>Contacts</header>
			{props.users.map(user => (
				<li key={'user' + user.id}>
					<Link to={`/user/${user.id}`}>
						<div className="contactContainer">
							<img src={user.picture.thumbnail} alt={user.name} />
							<span>{user.name.first} {user.name.last}</span>
						</div>
					</Link>
				</li>
				))} 
			</ul>
	) //userlist does the rendering. you could put it down in container but you have to change all props to this.state.

class UserListContainer extends Component { //this could be in a separate file
		state = {
			users: []
		}

	componentDidMount() {
		this.setState({
			users: getAllUsers()
		})
		
	}
	render() {
		return (
			<UserList users={this.state.users} />

			)
	}  //usercontainer only handles data and passes to userlist
}

export default UserListContainer
