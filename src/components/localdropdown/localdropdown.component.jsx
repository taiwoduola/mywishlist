import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import './localdropdown.styles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import { selectIsOpen } from '../../redux/catergory/catergorydrop.selector';
import { openMenu } from '../../redux/catergory/catergorydrop.actions';
import { selectIsClose } from '../../redux/catergory/catergorydrop.selector';
import { closeMenu } from '../../redux/catergory/catergorydrop.actions';

//component
import Submenu from '../submenu/submenu.component';

const LocalMenu = ({ isClose, isOpen, openMenu, closeMenu }) => (
	<div className="all-menu">
		<div className="local">
			<div className="local-title">
				<span className="local-name">
					local
					<FontAwesomeIcon
						icon={faAngleRight}
						className="angleright"
					/>
				</span>
			</div>
			<div className="local_menu">
				<Submenu localMenu>
					<div className="local-header">
						<h2>local</h2>
						<p>shop all</p>
					</div>
					<div className="local-submenu">
						<span>bag</span>
						<span>bag</span>
						<span>bag</span>
						<span>bag</span>
						<span>bag</span>
						<span>bag</span>
						<span>bag</span>
						<span>bag</span>
						<span>bag</span>
						<span>bag</span>
						<span>bag</span>
						<span>bag</span>
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

const mapDispatchToProps = (dispatch) => ({
	openMenu: () => dispatch(openMenu()),
	closeMenu: () => dispatch(closeMenu())
});

export default connect(mapStateToProps, mapDispatchToProps)(LocalMenu);
