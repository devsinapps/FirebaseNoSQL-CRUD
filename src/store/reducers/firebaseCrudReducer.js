const initState = {
	crudError: ''
}

const firebaseCrudReducer = ( state = initState, action ) => {
	switch(action.type){
		case "ADD_EMPLOYEE_SUCCESS":
			console.log("ADD_EMPLOYEE_SUCCESS");
			return{
				...state,
				crudError: ''
			}

		case "ADD_EMPLOYEE_ERROR":
			console.log("ADD_EMPLOYEE_ERROR");
			return{
				...state,
				crudError: 'ADD_EMPLOYEE_ERROR'
			}

		case "DELETE_EMPLOYEE_SUCCESS":
			console.log("DELETE_EMPLOYEE_SUCCESS");
			return{
				...state,
				crudError: ''
			}

		case "UPDATE_EMPLOYEE_SUCCESS":
			console.log("UPDATE_EMPLOYEE_SUCCESS");
			return{
				...state,
				crudError: ''
			}

		case "UPDATE_EMPLOYEE_ERROR":
			console.log("UPDATE_EMPLOYEE_ERROR");
			return{
				...state,
				crudError: 'UPDATE_EMPLOYEE_ERROR'
			}

		default:
			return state
	}
}

export default firebaseCrudReducer