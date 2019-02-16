import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Row, Col, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap'
class FirebaseModal extends React.Component{
	render(){
		const { value } = this.props
		return(
			<Modal isOpen={this.props.modal} toggle={this.props.toggleModal} className={this.props.className}>
	          <ModalHeader toggle={this.props.toggleModal}>Modal title</ModalHeader>
	          <ModalBody>
	           	<Form>
					<Row form>
						<Col lg='4'>
							<FormGroup>
								<Label htmlForm='firstName'> First Name </Label>
								<Input
									id='firstName'
									value={value.firstName}
									onChange={this.props.onChange}
								/>
							</FormGroup>
						</Col>
						<Col lg='4'>
							<FormGroup>
								<Label htmlForm='lastName'> Last Name </Label>
								<Input
									id='lastName'
									value={value.lastName}
									onChange={this.props.onChange}
								/>
							</FormGroup>
						</Col>
						<Col lg='4'>
							<FormGroup>
								<Label htmlForm='age'> Age </Label>
								<Input
									id='age'
									value={value.age}
									onChange={this.props.onChange}
								/>
							</FormGroup>
						</Col>
						<Col lg='4'>
							<FormGroup>
								<Label htmlForm='gender'> Gender </Label>
								<CustomInput type='select' id='gender' onChange={this.props.onChange}>
									<option value={value.gender}> {value.gender} </option>
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
									value={value.country}
									onChange={this.props.onChange}
								/>
							</FormGroup>
						</Col>
						<Col lg='4'>
							<FormGroup>
								<Label htmlForm='city'> City </Label>
								<Input
									id='city'
									value={value.city}
									onChange={this.props.onChange}
								/>
							</FormGroup>
						</Col>
						<Col lg='4'>
							<FormGroup>
								<Label htmlForm='address'> Address </Label>
								<Input
									id='address'
									value={value.address}
									onChange={this.props.onChange}
								/>
							</FormGroup>
						</Col>
						<Col lg='4'>
							<FormGroup>
								<Label htmlForm='education'> Education </Label>
								<Input
									id='education'
									value={value.education}
									onChange={this.props.onChange}
								/>
							</FormGroup>
						</Col>
					</Row>
				</Form>
	          </ModalBody>
	          <ModalFooter className='text-center'>
	            <Button color="warning" onClick={this.props.updateEmployee}>Update</Button>{' '}
	            <Button color="danger" onClick={this.props.deleteEmployee}>Delete</Button>{' '}
	            <Button color="info" onClick={this.props.resetButton}>Reset</Button>{' '}
	          </ModalFooter>
	        </Modal>
		)
	}
}

export default FirebaseModal