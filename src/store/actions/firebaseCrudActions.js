export const addEmployee = (newEmployee) => {
	return(dispatch, getState, {getFirestore})=>{
		const firestore = getFirestore();

		firestore.collection('employees').add({
			...newEmployee,
			firstName: newEmployee.firstName,
			lastName: newEmployee.lastName,
			age: newEmployee.age,
			gender: newEmployee.gender,
			country: newEmployee.country,
			city: newEmployee.city,
			address: newEmployee.address,
			education: newEmployee.education,
			createdAt: new Date()
		}).then(()=>{
			dispatch({
				type: "ADD_EMPLOYEE_SUCCESS"
			})
		}).catch((err)=>{
			dispatch({
				type: "ADD_EMPLOYEE_ERROR",
				err
			})
		})
	}
}

export const deleteEmployee = (employeeId) => {
	return(dispatch, getState, {getFirestore})=>{
		const firestore = getFirestore();

		firestore.collection('employees').doc(employeeId).delete().then(()=>{
			dispatch({
				type: "DELETE_EMPLOYEE_SUCCESS"
			})
		})
	}
}

export const updateEmployee = (employeeData) => {
	return(dispatch, getState, {getFirestore})=>{
		const firestore = getFirestore();

		firestore.collection('employees').doc(employeeData.employeeId).set({
			firstName: employeeData.firstName,
			lastName: employeeData.lastName,
			age: employeeData.age,
			gender: employeeData.gender,
			country: employeeData.country,
			city: employeeData.city,
			address: employeeData.address,
			education: employeeData.education,
			createdAt: employeeData.createdAt
		}).then(()=>{
			dispatch({
				type: "UPDATE_EMPLOYEE_SUCCESS"
			})
		}).catch((err)=>{
			dispatch({
				type: "UPDATE_EMPLOYEE_ERROR",
				err
			})
		})
	}
}