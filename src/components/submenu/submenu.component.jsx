import React from 'react';

import './submenu.styles.scss';

const Submenu = ({ children, localMenu, dealMenu }) => (
	<div
		className={`${localMenu ? 'local-menu' : ''} ${dealMenu
			? 'deal-menu'
			: ''} submenu`}>
		{children}
	</div>
);

export default Submenu;
