import React from 'react';

import './dropdownmenu.style.scss';
import LocalMenu from '../localdropdown/localdropdown.component';
import DealMenu from '../dealdropdown/dealdropdown.component';

const DropdownMenu = () => (
	<div>
		<LocalMenu />
		<DealMenu />
	</div>
);

export default DropdownMenu;
