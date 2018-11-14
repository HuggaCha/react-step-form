import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import UserForm from './UserForm'
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export class UserWelcom extends Component{
next = e => {
    e.preventDefault();
    this.props.nextStep();
  };
render(){

	return (
		<MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Welcome to User Registration/Login" />
           <TextField
            hintText="Your username"
            floatingLabelText="username"
            /><br/>
            <TextField
            hintText="Your password"
            floatingLabelText="password"
            type="password"
            /><br/> 
           <RaisedButton 
            label="Submit"
            primary={true}
            //onClick={this.next}
            /> 
            <p>Not registered yet ?. Register: </p>
            <RaisedButton 
            label="Register"
            primary={true}
            onClick={this.next}
            />
          </React.Fragment>
        </MuiThemeProvider>
		)
}
	
}
export default UserWelcom;