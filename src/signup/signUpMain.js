import React,{Component} from 'react';
import SignUpContainer from './SignUpContainer'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class SignUpComponent extends Component{
render(){  
return (
      <MuiThemeProvider>
        <SignUpContainer></SignUpContainer>
      </MuiThemeProvider>
    )
      }
    }
    export default SignUpComponent