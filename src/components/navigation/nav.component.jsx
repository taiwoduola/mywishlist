import React from 'react';
import { Link } from 'react-router-dom';

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

const Navs = () => (
	<div className="navigation">
		<div className="small-nav">
			<Link to="/" className="sub-nav">
				<FontAwesomeIcon icon={faHeart} className="like-heart" />my likes
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
				<div className="catergory-btn">
					<CustomButton catergoryBtn>
						catergories
						<FontAwesomeIcon icon={faChevronDown} className="cat-btn" />
					</CustomButton>
				</div>
				<form onClick="" className="nav-form">
					<FontAwesomeIcon icon={faSearch} className="search-icon1" />
					<input type="search" name="search" placeholder="search mywishlist" className="input1" />
					<FontAwesomeIcon icon={faMapMarkerAlt} className="search-icon2" />
					<input type="text" name="loaction" placeholder="lagos" className="input2" />
					<button type="submit" className="loc-btn">
						<FontAwesomeIcon icon={faSearch} className="loc-icon" />
					</button>
				</form>
			</div>

			<div className="icon">
				<FontAwesomeIcon icon={faShoppingCart} />
				<FontAwesomeIcon icon={faBell} />
			</div>

			<div className="signin">
				<CustomButton signInBtn>
					sign in
					<FontAwesomeIcon icon={faChevronDown} className="sign-icon" />
				</CustomButton>
			</div>
		</div>
	</div>
);

export default Navs;
