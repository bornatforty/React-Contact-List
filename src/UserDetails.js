import React, { Component } from 'react'
import {getUser} from './userFunctions'


const UserDetails = (props) => (
	<div className="card">
		<img src={props.img} alt={props.name} /><br />
		<ul>
			<li>{props.name}</li>
			<li>{props.email}</li>
			<li>{props.phone}</li>
			<li>{props.location}</li>
		</ul>
	</div>

	) //this is where rendering container is happening. data is from the container


class UserDetailsContainer extends Component {
	state = {
		img: '',
		name: '',
		email: '',
		phone: '',
		location: ''
	}

	componentDidMount() {
		const user = getUser(this.props.match.params.id) //match tells you other info, including params

		this.setState({
			img: user.picture.large,
			name: user.name.first + ' ' + user.name.last,
			email: user.email,
			phone: user.phone,
			location: user.location.city + ', ' + user.location.state
		})

	}

	render() {
		return (
			<UserDetails {...this.state}/>



			)
	}


} //this is the data inside a container

export default UserDetailsContainer