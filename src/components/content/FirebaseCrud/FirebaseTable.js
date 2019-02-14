import React from 'react'
import moment from 'moment'
import { Table } from 'reactstrap'

export const FirebaseTable = (props) => {
	const { employees } = props
	let numb = 1
	return(
		<Table hover bordered striped responsive size='sm'>
			<thead>
				<tr>
					<th> No </th>
					<th> First Name </th>
					<th> Last Name </th>
					<th> Gender  </th>
					<th> Age </th>
					<th> Country </th>
					<th> City </th>
					<th> Address </th>
					<th> Education </th>
					<th> Date Join </th>
				</tr>
			</thead>
			<tbody>
				{employees.map((employee)=>{
					return(
						<tr key={employee.id} onClick={() => props.getDataRow(employee)}>
							<td> {numb++} </td>
							<td> {employee.firstName} </td>
							<td> {employee.lastName}</td>
							<td> {employee.gender}  </td>
							<td> {employee.age} </td>
							<td> {employee.country} </td>
							<td> {employee.city} </td>
							<td> {employee.address} </td>
							<td> {employee.education} </td>
							<td> {moment(employee.createdAt.toDate().toString()).calendar()} </td>
						</tr>
					)
				})}
			</tbody>
		</Table>
	)
}