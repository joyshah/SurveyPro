import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import "./style.css";

const LoginForm = ({
  onSubmit = this.props.onSubmit,
  onChange,
  errors,
  user,
  type,
  onPwChange
}) => {
  return (
    <div className="loginBox">
      <h1>Sign In</h1>
      {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}

      <form onSubmit={onSubmit}>
        
        <TextField
          name="email"
          floatingLabelText="User Name or Email"
          value={user.email}
          onChange={onChange}
          errorText={errors.email}
          className="emailField"
        />
        <hr/>
        <TextField
          type={type}
          name="password"
          floatingLabelText="Password"
          value={user.password}
          onChange={onPwChange}
          errorText={errors.password}
          className="passwordField"
        />
          <hr/>
        <RaisedButton
          className="LoginSubmit"
          primary={true}
          type="submit"
          label="submit"
        />
      </form>
      <p>
        Don't have an account? <br />
        <a href="/signup">SignUp in here</a>
      </p>
    </div>
  );
};

export default LoginForm;
