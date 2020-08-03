import React from 'react';

import './custombutton.styles.scss';

const CustomButton = ({ children, catergoryBtn, signInBtn }) => (
	<button className={`${catergoryBtn ? 'catergory-btn' : null} ${signInBtn ? 'signin-btn' : null} custom-btn`}>
		{' '}
		{children}{' '}
	</button>
);

export default CustomButton;
