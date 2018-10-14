import React, { Component } from 'react'
import {getUser} from './userFunctions'
import {Link} from 'react-router-dom'


const UserDetails = (props) => (
	<div className="cardContainer">
		<div className="card">
			<span className="navbarContainer"><Link to={`/`}><i className="fa fa-arrow-left"></i>Back</Link></span>
			<header>{props.name}</header>
			<ul>
				<li><i className="fa fa-envelope-square"></i>{props.email}</li>
				<li><i className="fa fa-phone-square"></i>{props.phone}</li>
				<li><i className="fa fa-map-marker"></i>{props.location}</li>
			</ul>
		</div>
		<div className="avatar">
			<img src={props.img} alt={props.name} />
		</div>
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