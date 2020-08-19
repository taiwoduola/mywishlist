import React from 'react';
import { Link } from 'react-router-dom';

import './signup.styles.scss';

//components
import CustomForm from '../cusstomform/customform.component';
import CustomButton from '../custombutton/custombutton.component';

class SignUp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			fullName: '',
			email: '',
			password: ''
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();

		this.setState({ fullName: '', email: '', password: '' });
	};

	handleChange = (e) => {
		const { value, name } = e.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="login">
				<form onSubmit={this.handleSubmit}>
					<CustomForm
						name="fullName"
						type="text"
						value={this.state.fullName}
						handleChange={this.handleChange}
						placeholder="fullname"
						required
					/>
					<CustomForm
						name="email"
						type="email"
						value={this.state.email}
						handleChange={this.handleChange}
						placeholder="email"
						required
					/>
					<CustomForm
						name="password"
						type="password"
						value={this.state.password}
						handleChange={this.handleChange}
						placeholder="password"
						required
					/>
					<Link to="/" className="forgot-password">
						Forgot password?
					</Link>
					<input type="checkbox" name="keep me" id="keepme" /> keep me
					signed in on this computer. <br />
					<input type="checkbox" name="keep me" id="keepme" /> Yes, i
					want to save money by emails with awesome deals.
					<p>
						By clicking below, I agree to the{' '}
						<span className="terms">Terms of Use</span> and have
						read the <span>Privacy Statement.</span>
					</p>
					<div className="btns">
						<CustomButton signInButton> sign in</CustomButton>
						<span className="line"> or </span>
						<div className="social-btn">
							<CustomButton faceBtn>
								sign in with facebook
							</CustomButton>
							<CustomButton googleBtn>
								sign in with Google
							</CustomButton>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default SignUp;
