import React from 'react'
//Actions
import { addEmployee, deleteEmployee, updateEmployee } from './../../../store/actions/firebaseCrudActions'
//Tools
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
//Component
import FirebaseTable from './FirebaseTable'
import FirebaseForm from './FirebaseForm'
import FirebaseModal from './FirebaseModal'
import { Container, Row, Col, Card, CardBody, Button } from 'reactstrap'
class FirebaseCrudModal extends React.Component{
	state = {
		modal: false,
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

	//Handle Modal And Row Table if clicked send value to state
	toggleModal = (employee) => {
		console.log(employee)
		this.setState({
			modal: !this.state.modal,
			//Add Value from Row Table
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

	//Handle Value from input form
	onChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	//Handle Add New Employee
	addEmployee = (e) => {
		e.preventDefault();
		//Distruction State
		const { firstName, lastName, age, gender, country, city, address, education } = this.state
		//Save state as object
		const newEmployee = {
			firstName, 
			lastName, 
			age, 
			gender,
			country, 
			city, 
			address, 
			education
		}

		//Send Object as Parameter to Actions
		this.props.addEmployee(newEmployee)
	}


	//Handle Update Employee
	updateEmployee = () => {
		//Distruction State include employeId
		const { employeeId, firstName, lastName, age, gender, country, city, address, education, createdAt } = this.state
		//Save state as object
		const employeeData = {
			employeeId,
			firstName, 
			lastName, 
			age, 
			gender,
			country, 
			city, 
			address, 
			education,
			createdAt
		}

		//Make A Checked actions
		const check = window.confirm('Update Data?')
		if(check === true){
			//Send Object as Parameter to Actions
			this.props.updateEmployee(employeeData)
			this.setState({
				modal: !this.state.modal
			})
		}else{
			return null
		}
	}

	//Handle Delete Employee
	deleteEmployee = () => {
		//Distruction employeId From State
		const { employeeId } = this.state
		const check = window.confirm('Delete Employee?')
		if(check === true){
			//Send employeeId as Parameter to actions
			this.props.deleteEmployee(employeeId)
			this.setState({
				modal: !this.state.modal
			})
		}else{
			return null
		}
	}

	//Handle Reset Button
	resetButton = () => {
		//Set Value State To Default
		this.setState({
			modal: !this.state.modal,
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
		const { modal } = this.state
		const { firstName, lastName, age, gender, country, city, address, education } = this.state
		const { employees } = this.props
		const value = { firstName, lastName, age, gender, country, city, address, education }
		if(employees){
			return(
				<div className='FirebaseCrudModal'>
					<Container fluid>
						<Row>
							<Col lg='12'>
								<Card className='mb-3'>
									<CardBody>
										<FirebaseTable
											employees={employees} 
											toggleModal={this.toggleModal}
										/>
									</CardBody>
								</Card>
							</Col>
						</Row>
						<Row>
							<Col lg='12'>
								<Card className='mb-3'>
									<CardBody>
										<FirebaseForm
											onChange={this.onChange}
											addEmployee={this.addEmployee}
										/>
									</CardBody>
								</Card>
							</Col>
						</Row>
						<Row>
							<FirebaseModal 
								modal={modal}
								toggleModal={this.toggleModal}
								value={value}
								onChange={this.onChange}
								updateEmployee={this.updateEmployee}
								deleteEmployee={this.deleteEmployee}
								resetButton={this.resetButton}
							/>
						</Row>
					</Container>
				</div>
			)
		}
		else {
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
	)(FirebaseCrudModal)