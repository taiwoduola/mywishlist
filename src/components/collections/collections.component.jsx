import React from 'react';

import './collections.styles.scss';

//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Collections = ({ imageUrl, name, location, ratings, oldPrice, price }) => (
	<div className="collections">
		<div
			style={{
				backgroundImage: `url(${imageUrl})`
			}}
			className="collection-images"
		/>

		<div className="trends-footer">
			<span className="name"> {name} </span>
			<span className="location"> {location} </span>
			<div className="rate">
				<span className="score">4.7</span>
				<div className="stars">
					<FontAwesomeIcon icon={faStar} />
					<FontAwesomeIcon icon={faStar} />
					<FontAwesomeIcon icon={faStar} />
					<FontAwesomeIcon icon={faStar} />
					<FontAwesomeIcon icon={faStar} />
				</div>
				<span className="ratings"> {ratings} </span>
			</div>
			<div className="prices">
				<span className="old">{oldPrice}</span>
				<span className="main"> {price} </span>
				<span className="off">21% OFF</span>
			</div>
		</div>
	</div>
);

export default Collections;
