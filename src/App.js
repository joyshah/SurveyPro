import React from 'react';
import './App.css';
// import  LoginComponent   from './LogIn/login';
import LoginContainer from './login/LoginContainer'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import DynamicFormComponent from './DynamicForm/dform'

function App() {
  return (
    <div>
      <MuiThemeProvider>
        <LoginContainer></LoginContainer>
      </MuiThemeProvider>
      <DynamicFormComponent
       title="New Survey"
       model = {[
           {key:"0",label:"Name",props:{required:true}},
           {key:"1",label:"Age",type:"number"},
           {key:"2",label:"Rating",type:"number",props:{min:0,max:5}},
           {key:"3",label:"Qualification"},
           {key:"4",label:"What is your age",type:"number",props:{min:0,max:100}}
           ]}
           onSubmit = {(model)=> { this.onSubmit(model) }}
      >
      </DynamicFormComponent>
      
    </div>
  );  
}

export default App;
