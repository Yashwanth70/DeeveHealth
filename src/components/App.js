import React, {Component} from 'react';
import {firebaseApp} from '../firebase';

class App extends Component{
	signOut(){
		firebaseApp.auth().signOut().then(function() {
		  	console.log('Sign-out successful');
		}).catch(function(error) {
		  	console.log('An error happened');
		});
	}
	render(){
		return(
			<div>
				<h2>Welcome to DeeveHealth Dashboard</h2>
				<button type="button" onClick={()=>this.signOut()}>Sign Out</button>
			</div>
		);
	}
}

export default App;