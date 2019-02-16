import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes'
import './components/style/minify/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import thunk from 'redux-thunk'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase'
import { getFirestore, reduxFirestore } from 'redux-firestore'
import * as serviceWorker from './serviceWorker';

import firebaseConfig from './config/firebaseConfig'
import rootReducers from './store/reducers/rootReducers'

const store = createStore(rootReducers,
		compose(
			applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
			reduxFirestore(firebaseConfig),
			reactReduxFirebase(firebaseConfig)
		)
	)


ReactDOM.render(
	<Provider store={store}>
	<Routes />
	</Provider>, document.getElementById('root'));
serviceWorker.unregister();
