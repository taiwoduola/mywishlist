import React from 'react';

import './cards.styles.scss';

//components
import CustomButton from '../custombutton/custombutton.component';

const Cards = ({ imageUrl, header, paragragh, color, buttonName }) => (
	<div className={`${color} cards`}>
		<div className="cards-info">
			<span className="card-header"> {header} </span>
			<span className="card-paragragh"> {paragragh} </span>
			<CustomButton> {buttonName} </CustomButton>
		</div>

		<div
			style={{
				backgroundImage: `url(${imageUrl})`
			}}
			className="card-images"
		/>
	</div>
);

export default Cards;
