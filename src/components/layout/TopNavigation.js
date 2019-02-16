import React, { Component } from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'
class TopNavigation extends Component{
	render(){
		return(
			<Navbar className='TopNavigation'>
				<NavbarBrand active> Firebase CRUD </NavbarBrand>
			</Navbar>
		)
	}
}

export default TopNavigation