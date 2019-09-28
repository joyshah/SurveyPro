import React,{Component} from 'react';
import './App.css';
// import  LoginComponent   from './LogIn/login';
import LoginContainer from './login/LoginContainer'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import DynamicFormComponent from './DynamicForm/dform'
import SignUpContainer from './signup/SignUpContainer'



class App extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="mainHEad">
        Welcome To The Survey Pro
        <button className="guestDiv">Guest Login</button>
        <button className="clientDiv">User Login</button>
        <button className="signUp">SignUp</button>
      </div>
      
    )
  }
}
// function App() {
//   return (
//     <div>
//       {/* <MuiThemeProvider>
//         <LoginContainer></LoginContainer>
//         <SignUpContainer></SignUpContainer>
//       </MuiThemeProvider>

      
//       <DynamicFormComponent
//        title="New Survey"
//        model = {[
//            {key:"0",label:"Name",props:{required:true}},
//            {key:"1",label:"Age",type:"number"},
//            {key:"2",label:"Rating",type:"number",props:{min:0,max:5}},
//            {key:"3",label:"Qualification"},
//            {key:"4",label:"What is your age",type:"number",props:{min:0,max:100}}
//            ]}
//            onSubmit = {(model)=> { this.onSubmit(model) }}
//       >
//       </DynamicFormComponent> */}
      
//       This is main Comp
//     </div>
//   );  
// }

export default App;
