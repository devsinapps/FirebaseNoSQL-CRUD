import React, { Component } from 'react'
//Actions
import { addEmployee, deleteEmployee, updateEmployee } from './../../../store/actions/firebaseCrudActions'
//Component
import { FirebaseTable } from './FirebaseTable'
import FirebaseForm from './FirebaseForm'
//Tools
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap'
class FirebaseCrud extends Component{
	state = {
		employeeId: '',
		firstName: '',
		lastName: '',
		age: '',
		gender: '',
		country: '',
		city: '',
		address: '',
		education: '',
		createdAt: ''
	}


	//Get Employee Data From Click Row and Add Value to State
	getDataRow = (employee) => {
		this.setState({
			employeeId: employee.id,
			firstName: employee.firstName,
			lastName: employee.lastName,
			age: employee.age,
			gender: employee.gender,
			country: employee.country,
			city: employee.city,
			address: employee.address,
			education: employee.education,
			createdAt: employee.createdAt
		})
	}

	//Handle Form Input, And Set value to State. Id And state must be the same
	onChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	//Handle Add New Employee
	addEmployee = (e) => {
		e.preventDefault();
		const { firstName, lastName, age, gender, country, city, address, education } = this.state
		const newEmployee = {firstName, lastName, age, gender, country, city, address, education}
		//Passing variable where the value of variable from the state
		this.props.addEmployee(newEmployee);
			//Make A Reset State to default if Success add new Employee
			this.setState({
				employeeId: '',
				firstName: '',
				lastName: '',
				age: '',
				gender: '',
				country: '',
				city: '',
				address: '',
				education: '',
				createdAt: ''
			})
			
	}

	//Handle Update data Employee
	updateEmployee = (e) => {
		e.preventDefault();
		const { employeeId, firstName, lastName, age, gender, country, city, address, education, createdAt } = this.state
		const employeeData = {employeeId,firstName, lastName, age, gender, country, city, address, education, createdAt}
		//Make a simple validation
		const check = window.confirm('Update Employee?')
		if(check === true){
			//Passing variable and employeeId where the value of variable from the state
			//Update just this id
			this.props.updateEmployee(employeeData)
				//Make A Reset State to default if Success add new Employee
				this.setState({
					employeeId: '',
					firstName: '',
					lastName: '',
					age: '',
					gender: '',
					country: '',
					city: '',
					address: '',
					education: '',
					createdAt: ''
				})
		}
		else{
			return null
		}
		
	}

	//Handle Delete Employee
	deleteEmployee = () => {
		const { employeeId } = this.state
		//Make a simple validation checked
		const check = window.confirm('Delete Employee?')
		if(check === true){
			//Send Id from state, so Action just delete where doc is id from state
			this.props.deleteEmployee(employeeId)	
				//Make A Reset State to default if Success add new Employee
					this.setState({
						employeeId: '',
						firstName: '',
						lastName: '',
						age: '',
						gender: '',
						country: '',
						city: '',
						address: '',
						education: '',
						createdAt: ''
					})
		}
		else{
			return null
		}
	}

	//Handle Button Reset
	resetButton = () => {
		//Make A State to default
		this.setState({
			employeeId: '',
			firstName: '',
			lastName: '',
			age: '',
			gender: '',
			country: '',
			city: '',
			address: '',
			education: '',
			createdAt: ''
		})
	}
	render(){
		const { firstName, lastName, age, gender, country, city, address, education } = this.state
		const { employees } = this.props
		const value = { firstName, lastName, age, gender, country, city, address, education }
		if(employees){
			return(
				<div className='FirebaseCrud'>
					<Container fluid>
						<Row>
							<Col lg='12'>
								<Card>
									<CardHeader> </CardHeader>
									<CardBody>
										<FirebaseTable 
											employees={employees}
											getDataRow={this.getDataRow}
										/>
									</CardBody>
								</Card>
							</Col>
						</Row>
						<Row>
							<Col lg='12'>
								<Card>
									<CardHeader></CardHeader>
									<CardBody>
										<FirebaseForm 
											value={value}
											onChange={this.onChange}
											addEmployee={this.addEmployee}
											updateEmployee={this.updateEmployee}
											deleteEmployee={this.deleteEmployee}
											resetButton={this.resetButton}
										/>
									</CardBody>
								</Card>
							</Col>
						</Row>
					</Container>
				</div>
			)
		}else{
			return(
				<div>
					Loading
				</div>
			)
		} 
		
	}
}

const mapStateToProps = (state) => {
	return{
		employees: state.firestore.ordered.employees
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		addEmployee: (newEmployee) => dispatch(addEmployee(newEmployee)),
		updateEmployee: (employeeData) => dispatch(updateEmployee(employeeData)),
		deleteEmployee: (employeeId) => dispatch(deleteEmployee(employeeId))
	}
}

export default compose(
		connect(mapStateToProps, mapDispatchToProps),
		firestoreConnect([{
			collection: 'employees', orderBy: ['createdAt', 'desc']
		}])
	)(FirebaseCrud)