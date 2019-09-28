import React,{Component} from 'react';

// import  LoginComponent   from './LogIn/login';
import LoginContainer from './LoginContainer'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import DynamicFormComponent from './DynamicForm/dform'
// import SignUpContainer from './signup/SignUpContainer'
import { renderComponent } from 'recompose';

class LoginComponent extends Component{
    
    constructor(props){
        
        super(props)
    }
render(){  
    
return (
    
      <MuiThemeProvider>
        <LoginContainer {...this.props}></LoginContainer>
      </MuiThemeProvider>
    )
      }
    }
    export default LoginComponent