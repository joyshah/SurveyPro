import React from 'react';
import './App.css';
// import  LoginComponent   from './LogIn/login';
import LoginContainer from './login/LoginContainer'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

function App() {
  return (
    <div>
      <MuiThemeProvider>
        <LoginContainer></LoginContainer>
      </MuiThemeProvider>
      
    </div>
  );  
}

export default App;
