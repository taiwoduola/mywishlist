import React from 'react';

import './homepage.styles.scss';

import TrendsContainer from '../../components/trendscontainer/trendscontainer.component';
import CardsContainer from '../../components/cardscontainer/cardscontainer.component';
import PopularCollections from '../../components/popularcollections/collectioncontainer.component';
import WhyUS from '../../components/whyus/whyus.component';
import Deals from '../../components/deals/deals..component';

const Homepage = () => (
	<div className="homepage">
		<TrendsContainer />
		<CardsContainer />
		<PopularCollections />
		<WhyUS />
		<Deals />
	</div>
);

export default Homepage;
