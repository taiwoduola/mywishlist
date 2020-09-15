import React from 'react';

import './likespage.styles.scss';

//components
import LikeNav from '../../components/like-nav/likenav.component';
import Login from '../../components/login/login.component';
import SignUp from '../../components/signup/signup.component';

class LikesPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			userStatus: false
		};
	}

	handleLoginClick = (e) => {
		e.preventDefault();
		this.setState({ userStatus: true });
	};

	handleLogoutClick = (e) => {
		this.setState({ userStatus: false });
	};

	render() {
		const { userStatus } = this.state;
		return (
			<div className="like">
				<LikeNav />
				<div className="like-page">
					<h1 className="like-title">
						Sign in to score great deals!
					</h1>
					<div className="user-option">
						<span
							className="option-title"
							onClick={this.handleLoginClick}>
							i have an account
						</span>
						<span
							className="option-title"
							onClick={this.handleLogoutClick}>
							i'm a new customer
						</span>
					</div>
					{userStatus ? <Login /> : <SignUp />}
				</div>
			</div>
		);
	}
}

export default LikesPage;
