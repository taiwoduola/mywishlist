import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleCatergory } from '../../redux/catergory/catergorydrop.actions';
import { selectHiddens } from '../../redux/catergory/catergorydrop.selector';
import { selectOpened } from '../../redux/signin/signin.selector';
import { toggleSignIn } from '../../redux/signin/signin.action';

import './nav.styles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHeart,
	faChevronDown,
	faSearch,
	faShoppingCart,
	faBell,
	faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';

//components
import CustomButton from '../custombutton/custombutton.component';
import CatergoryDropdown from '../catergorydropdown/catergorydropdown.component';
import SignInDrop from '../siginindropdown/signindrop.component';


const Navs = ({ toggleCatergory, hidden, open, toggleSignIn }) => (
	<div className="navigation">
		<div className="small-nav">
			<Link to="/wishlist" className="sub-nav">
				<FontAwesomeIcon icon={faHeart} className="like-heart" />my
				likes
			</Link>

			<Link to="/" className="sub-nav">
				sell
			</Link>
			<Link to="/" className="sub-nav">
				help
			</Link>
			<Link to="/" className="sub-nav">
				sign up
			</Link>
		</div>

		<div className="big-nav">
			<div className="logo-container">
				<Link to="/" className="logo">
					mywishlist
				</Link>
			</div>

			<div className="nav-input">
				<div className="catergory-btn" onClick={toggleCatergory}>
					<CustomButton catergoryBtn>
						catergories
						<FontAwesomeIcon
							icon={faChevronDown}
							className="cat-btn"
						/>
					</CustomButton>
				</div>
				<form className="nav-form">
					<FontAwesomeIcon icon={faSearch} className="search-icon1" />
					<input
						type="search"
						name="search"
						placeholder="search mywishlist"
						className="input1"
					/>
					<FontAwesomeIcon
						icon={faMapMarkerAlt}
						className="search-icon2"
					/>
					<input
						type="text"
						name="loaction"
						placeholder="lagos"
						className="input2"
					/>
					<button type="submit" className="loc-btn">
						<FontAwesomeIcon icon={faSearch} className="loc-icon" />
					</button>
				</form>
			</div>

			<div className="icon">
				<FontAwesomeIcon icon={faShoppingCart} />
				<FontAwesomeIcon icon={faBell} />
			</div>

			<div className="signin" onClick={toggleSignIn}>
				<CustomButton signInBtn >
					sign in
					<FontAwesomeIcon
						icon={faChevronDown}
						className="sign-icon"
					/>
				</CustomButton>
				
			</div>
			{hidden ? null : <CatergoryDropdown />}
			{open ? null : <SignInDrop/>}
	
		</div>
	</div>
);

const mapStateToProps = createStructuredSelector({
	hidden: selectHiddens,
	open: selectOpened
});

const mapDispatchToProps = (dispatch) => ({
	toggleCatergory: () => dispatch(toggleCatergory()),
	toggleSignIn: () => dispatch(toggleSignIn())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navs);
