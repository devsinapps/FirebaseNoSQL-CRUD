import sampleReducer from './sampleReducer'
import firebaseCrudReducer from './firebaseCrudReducer'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import { combineReducers } from 'redux'

const rootReducers = combineReducers({
	sample: sampleReducer,
	firebaseCrud: firebaseCrudReducer,
	firebase: firebaseReducer,
	firestore: firestoreReducer
})

export default rootReducers