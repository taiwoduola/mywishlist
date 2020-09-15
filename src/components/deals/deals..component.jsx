import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './deals.styles.scss';


import { selectDeals } from '../../redux/deals/deals.selector';

//component
import Collections from '../collections/collections.component';

const Deals = ({deals}) => (
	<div className="deal-container">
		<h2 className="deal-header">so man deals... see them all!</h2>
		<div className="deal-collections">
			{deals.map(({ id, ...otherDealProps }) => (
				<Collections key={id} {...otherDealProps} />
			))}
		</div>
	</div>
);

const mapStateToProps = createStructuredSelector({
	deals: selectDeals
})
	
	

export default connect(mapStateToProps)(Deals);
