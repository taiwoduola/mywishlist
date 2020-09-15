import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './collectioncontainer.styles.scss';

import { selectCollections } from '../../redux/popular/popular.selector';


//component
import Collections from '../collections/collections.component';

const PopularCollections = ({collections}) => (
	<div className="popular-container">
		<h2 className="popular-header">popular on mywishlist</h2>
		<div className="popular-collections">
			{collections.map(({ id, ...otherCollectionProps }) => (
				<Collections key={id} {...otherCollectionProps} />
			))}
		</div>
	</div>
);

const mapStateToProps = createStructuredSelector({
	collections: selectCollections
})
	

	
export default connect(mapStateToProps)(PopularCollections);
