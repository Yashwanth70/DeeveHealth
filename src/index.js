import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,browserHistory} from 'react-router';
import {firebaseApp} from './firebase';

import App from './components/App';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import './App.css'

firebaseApp.auth().onAuthStateChanged(user =>{
	if(user){
		console.log('user has signed in',user);
		browserHistory.push('/app');
	}
	else{
		console.log('user has signed out');
		browserHistory.push('/SignUp');
	}

})

ReactDOM.render(
	<Router path="/" history={browserHistory}>
		<Route path="/app" components={App}/>
		<Route path="/SignIn" components={SignIn}/>
		<Route path="/SignUp" components={SignUp}/>
	</Router>
	,document.getElementById('root'));
