import React from 'react'
import { Row, Col, Form, FormGroup, Label, Input, CustomInput, Button } from 'reactstrap'
class FirebaseForm extends React.Component{
	render(){
		const { value } = this.props
		return(
			<Form>
				<Row form>
					<Col md='4'>
						<FormGroup>
							<Label htmlFor='firstName'> First Name </Label>
							<Input
								id='firstName'
								value={value.firstName}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col md='4'>
						<FormGroup>
							<Label htmlFor='lastName'> Last Name </Label>
							<Input
								id='lastName'
								value={value.lastName}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col md='4'>
						<FormGroup>
							<Label htmlFor='gender'> Gender </Label>
							<CustomInput type='select' id='gender' onChange={this.props.onChange}>
								<option value={value.gender}> {value.gender} </option>
								<option value='male'> male </option>
								<option value='female'> female </option>
							</CustomInput>
						</FormGroup>
					</Col>
					<Col md='4'>
						<FormGroup>
							<Label htmlFor='age'> Age </Label>
							<Input
								id='age'
								type='number'
								value={value.age}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col md='4'>
						<FormGroup>
							<Label htmlFor='country'> Country </Label>
							<CustomInput type='select' id='country' onChange={this.props.onChange}>
								<option value={value.country}> {value.country} </option>
								<option value='male'> male </option>
								<option value='female'> female </option>
							</CustomInput>
						</FormGroup>
					</Col>
					<Col md='4'>
						<FormGroup>
							<Label htmlFor='city'> City </Label>
							<CustomInput type='select' id='city' onChange={this.props.onChange}>
								<option value={value.city}> {value.city} </option>
								<option value='male'> male </option>
								<option value='female'> female </option>
							</CustomInput>
						</FormGroup>
					</Col>
					<Col md='4'>
						<FormGroup>
							<Label htmlFor='address'> Address </Label>
							<Input
								id='address'
								type='textarea'
								value={value.address}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col md='4'>
						<FormGroup>
							<Label htmlFor='education'> Education </Label>
							<Input
								id='education'
								value={value.education}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
				</Row>
				<FormGroup className='text-center'>
					<Label htmlFor='button' hidden> Button </Label>
					<Button color='info' onClick={this.props.addEmployee}> Save </Button> {' '}
					<Button color='warning' onClick={this.props.updateEmployee}> Update </Button> {' '}
					<Button color='danger' onClick={this.props.deleteEmployee}> Delete </Button> {' '}
					<Button color='reset' onClick={this.props.resetButton}> Reset </Button>
				</FormGroup>
			</Form>
		)
	}
}

export default FirebaseForm