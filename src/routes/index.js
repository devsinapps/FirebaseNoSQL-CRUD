import React from 'react'
//Component Content
import Dashboard from './../components/content/Dashboard'
import FirebaseCrud from './../components/content/FirebaseCrud'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
class Routes extends React.Component{
	render(){
		return(
			<Router>
				<div id='Routes'>
					<div className='Content'>
						<Switch>
							<Route path='/' component={Dashboard} exact />
							<Route path='/firebasecrud' component={FirebaseCrud} />
						</Switch>
					</div>
				</div>
			</Router>
		)
	}
}

export default Routes