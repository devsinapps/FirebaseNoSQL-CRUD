import React from 'react'
import { Row, Col, Form, FormGroup, Label, Input, CustomInput, Button } from 'reactstrap'
class FirebaseForm extends React.Component{
	render(){
		return(
			<Form onSubmit={this.props.addEmployee}>
				<Row form>
					<Col lg='4'>
						<FormGroup>
							<Label htmlForm='firstName'> First Name </Label>
							<Input
								id='firstName'
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='4'>
						<FormGroup>
							<Label htmlForm='lastName'> Last Name </Label>
							<Input
								id='lastName'
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='4'>
						<FormGroup>
							<Label htmlForm='age'> Age </Label>
							<Input
								id='age'
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='4'>
						<FormGroup>
							<Label htmlForm='gender'> Gender </Label>
							<CustomInput type='select' id='gender' onChange={this.props.onChange}>
								<option value=''> Select Gender </option>
								<option value='male'> Male </option>
								<option value='female'> Female </option>
							</CustomInput>
						</FormGroup>
					</Col>
					<Col lg='4'>
						<FormGroup>
							<Label htmlForm='country'> Country </Label>
							<Input
								id='country'
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='4'>
						<FormGroup>
							<Label htmlForm='city'> City </Label>
							<Input
								id='city'
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='4'>
						<FormGroup>
							<Label htmlForm='address'> Address </Label>
							<Input
								id='address'
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='4'>
						<FormGroup>
							<Label htmlForm='education'> Education </Label>
							<Input
								id='education'
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
				</Row>
				<FormGroup className='text-center'>
					<Button color='primary'> Save </Button>
				</FormGroup>
			</Form>
		)
	}
}

export default FirebaseForm