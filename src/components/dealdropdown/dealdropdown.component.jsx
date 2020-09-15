import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import './dealdropdown.styles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import { selectIsOpen } from '../../redux/catergory/catergorydrop.selector';
import { selectIsClose } from '../../redux/catergory/catergorydrop.selector';

//component
import Submenu from '../submenu/submenu.component';

const DealMenu = ({ isClose }) => (
	<div className="all-menu">
		<div className="deal">
			<div className="deal-title">
				<span className="deal-name">
					deals
					<FontAwesomeIcon
						icon={faAngleRight}
						className="angleright"
					/>
				</span>
			</div>

			<div className="deal_menu">
				<Submenu dealMenu>
					<div className="deal-header">
						<h2>deals</h2>
						<p>shop all</p>
					</div>

					<div className="deal-submenu">
						<span>pencil</span>
						<span>pencil</span>
						<span>pencil</span>
						<span>pencil</span>
						<span>pencil</span>
						<span>pencil</span>
						<span>pencil</span>
						<span>pencil</span>
						<span>pencil</span>
						<span>pencil</span>
						<span>pencil</span>
						<span>pencil</span>
						<span>pencil</span>
						<span>pencil</span>
						<span>pencil</span>
						<span>pencil</span>
					</div>
				</Submenu>
			</div>
		</div>
	</div>
);

const mapStateToProps = createStructuredSelector({
	isOpen: selectIsOpen,
	isClose: selectIsClose
});

export default connect(mapStateToProps, null)(DealMenu);
