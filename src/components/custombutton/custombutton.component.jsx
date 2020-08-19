import React from 'react';

import './custombutton.styles.scss';

const CustomButton = ({ children, catergoryBtn, signInBtn, signInButton, faceBtn, googleBtn }) => (
	<button
		className={`${catergoryBtn ? 'catergory-btn' : null} ${signInBtn ? 'signin-btn' : null} ${signInButton
			? 'signin-button'
			: null} ${faceBtn ? 'face-btn' : null} ${googleBtn ? 'google-btn' : null} custom-btn`}
	>
		{' '}
		{children}{' '}
	</button>
);

export default CustomButton;
