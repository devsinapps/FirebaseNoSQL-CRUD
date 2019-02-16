import React from 'react'
import { Link } from 'react-router-dom'
import DropdownNavigation from './container/DropdownNavigation'
class SideNavigation extends React.Component{
	render(){
		return(
			<div className='SideNavigation'>
				<div className='Menu'>
					<ul>
						<li> Dashboard </li>
						<DropdownNavigation title="Dropdown">
							<ul>
								<li> 
									<Link to='/firebasecrud'>
									Single Page Crud 
									</Link>
								</li>
								<li> 
									<Link to='/firebasecrudmodal'>
									Modal Page Crud 
									</Link>
								</li>
							</ul>
						</DropdownNavigation>
					</ul>
				</div>
			</div>
		)
	}
}

export default SideNavigation