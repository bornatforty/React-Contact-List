import React, { Component } from 'react'
import {getUser} from './userFunctions'


const UserDetails = (props) => (
	<div className="card">
		<header>{props.name}</header>
		<img src={props.img} alt={props.name} /><br />
		<ul>
			<i className="fa fa-envelope-square"><li>{props.email}</li></i>
			<i className="fa fa-phone-square"><li>{props.phone}</li></i>
			<i className="fa fa-map-marker-alt"><li>{props.location}</li></i>
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