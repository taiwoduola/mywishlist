//libraries
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectTrendTrends } from '../../redux/trends/trends.selector';

//css
import './trendscontainer.styles.scss';

//component
import TrendsItems from '../trendsitem/trendsitems.component';

const TrendsContainer = ({trends}) => (
	<div className="trends-container">
		<h2>Hi there, here's what's trending today</h2>
		<div className="main-trends">
			{trends.map(({ id, ...otherTrendsProps }) => <TrendsItems key={id} {...otherTrendsProps} />)}
		</div>
	</div>

)

const mapStateToProps = createStructuredSelector({
	trends: selectTrendTrends
});

export default connect(mapStateToProps)(TrendsContainer);
