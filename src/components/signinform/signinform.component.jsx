import React from "react";
import { Link } from "react-router-dom";

import "./signinform.styles.scss";

//components

import CustomButton from "../custombutton/custombutton.component";
import CustomForm from "../cusstomform/customform.component";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-inForm">
        <form onSubmit={this.handleSubmit}>
          <label>email</label>
          <CustomForm
            signInInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <label>password</label>
          <CustomForm
            signInInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <div className="loggin-status">
            <Link to="/" className="forgot-password">
              Forgot password?
            </Link>
            <input
              type="checkbox"
              name="keep me"
              id="keepme"
              value="remember me"
            />
            remember me
          </div>
          <div className="btns">
            <CustomButton signInFormBtn> sign in</CustomButton>
            <span className="or"> or sign in with</span>
            <div className="social-btns">
              <CustomButton faceBtn> facebook</CustomButton>
              <CustomButton googleBtn> Google</CustomButton>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
