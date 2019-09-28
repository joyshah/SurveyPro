import React, { Component } from "react";
import LoginForm from "./LoginForm.js";
import {url} from '../Data/urlMapper'
const axios = require("axios");
const FormValidators = require("../CommonCode/validate");
const validateLoginForm = FormValidators.validateLoginForm;

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      user: {
        email: "",
        password: "",
      },
      btnTxt: "show",
      type: "password",
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.pwHandleChange = this.pwHandleChange.bind(this);
    this.nevigateToSignUp = this.nevigateToSignUp.bind(this);
  }

  handleChange(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
    console.log("Handle Chnage")
  }

  pwHandleChange(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });

  }

  submitLogin(user) {
    console.log("Thid id dubmit form")
    var params = { username: user.usr, password: user.pw};
    console.log("Sending this",params)
    var headerToken= {
      'headers': {
        'Authorization': 'Bearer '+ localStorage.token
      }}
      console.log("header token is ",headerToken)
    axios
    .post(url.hello, headerToken)
      .then((res) => {
        console.log("Res recived",res)
        
          localStorage.token = res.data.token;
          localStorage.tokenType = res.data.tokenType
          localStorage.isAuthenticated = true;
          console.log("Token type",localStorage.tokenType,localStorage.token)
          // window.location.reload();
          
        
          console.log("Res recived erro")
          this.setState({
            errors: { message: res.data.message }
          });
          this.props.history.replace('/')
        
      })
      .catch(err => {
        console.log("Sign up data submit error: ", err);
      });
  }

  validateForm(event) {
    console.log("Validating Form")
    event.preventDefault();
    var payload = validateLoginForm(this.state.user);
    if (payload.success) {
      console.log("Payload Success")
      this.setState({
        errors: {}
      });
      console.log("Seting user state as",this.state)
      var user = {
        usr: this.state.user.email,
        pw: this.state.user.password,
      };
      this.submitLogin(user);
    } else {
      console.log("Erro validating")
      const errors = payload.errors;
      this.setState({
        errors
      });
    }
  }

  nevigateToSignUp = ()=>{
    this.props.history.replace('/signup')
  }


  render() {
    console.log("props are",this.props)
    return (
      <div>
        <LoginForm
        {...this.props}
          onSubmit={this.validateForm}
          onChange={this.handleChange}
          onPwChange={this.pwHandleChange}
          errors={this.state.errors}
          user={this.state.user}
          btnTxt={this.state.btnTxt}
          type={this.state.type}
          signup={this.nevigateToSignUp}
        />
      </div>
    );
  }
}

export default LoginContainer;
