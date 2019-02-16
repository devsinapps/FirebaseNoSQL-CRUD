import React, { Component } from 'react'

class DropdownNavigation extends Component{
	state = {
		isExpanded: false
	}

	toggle = () => {
		this.setState({
			isExpanded: !this.state.isExpanded,
			height: this.refs.inner.clientHeight
		})
	}
	render(){
		const { isExpanded, height } = this.state
		const { title, children } = this.props
		const styleHeight = isExpanded ? height : '0';
		return(
			<div className='DropdownNavigation'>
				<li onClick={this.toggle}> {title} </li>
				<div className='DropdownMenu' style={{height: styleHeight+'px'}}>
					<div className='Menu' ref='inner'>
						{children}
					</div>
				</div>
			</div>
		)
	}
}

export default DropdownNavigation