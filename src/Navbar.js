import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Navbar extends Component {
	render() {
	return (
		<div>
			<Link to={`/`}><i className="fa fa-arrow-left"></i>Back</Link>
		</div>
	
	)
	}
}

export default Navbar