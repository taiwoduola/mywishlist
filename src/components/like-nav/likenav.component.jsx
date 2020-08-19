import React from 'react';
import { Link } from 'react-router-dom';

import './likenav.styles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const LikeNav = () => (
	<div className="like-main-nav">
		<div className="logo-container">
			<Link to="/" className="logo">
				mywishlist
			</Link>
		</div>

		<div className="like-nav">
			<Link to="/wishlist" className="like-navs">
				<FontAwesomeIcon icon={faHeart} className="like-heart" />my likes
			</Link>
			<Link to="/wishlist" className="like-navs">
				<FontAwesomeIcon icon={faShoppingCart} className="like-heart" />
			</Link>

			<Link to="/" className="like-navs">
				sell
			</Link>
			<Link to="/" className="like-navs">
				help
			</Link>
			<Link to="/" className="like-navs">
				sign up
			</Link>
			<Link to="/" className="like-navs">
				sign in
			</Link>
		</div>
	</div>
);

export default LikeNav;
