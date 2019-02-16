import React from 'react'
//Component Content
import Dashboard from './../components/content/Dashboard'
import FirebaseCrud from './../components/content/FirebaseCrud'
import FirebaseCrudModal from './../components/content/FirebaseCrudModal'
//Component Layout
import SideNavigation from './../components/layout/SideNavigation'
import TopNavigation from './../components/layout/TopNavigation'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
class Routes extends React.Component{
	render(){
		return(
			<Router>
				<div id='Routes'>
					<TopNavigation />
					<SideNavigation />
					<div className='Content'>
						<Switch>
							<Route path='/' component={Dashboard} exact />
							<Route path='/firebasecrud' component={FirebaseCrud} />
							<Route path='/firebasecrudmodal' component={FirebaseCrudModal} />
						</Switch>
					</div>
				</div>
			</Router>
		)
	}
}

export default Routes