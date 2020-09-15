import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCardCardInfo } from '../../redux/cards/card.selector';

import './cardcontainer.styles.scss';

//components
import Cards from '../cardssection/cards.component';

const CardsContainer = ({cardInfo}) => (
	<div className="card-info">
		{cardInfo.map(({ id, ...otherCardInfo }) => <Cards key={id} {...otherCardInfo} />)}
	</div>

)

const mapStateToProps = createStructuredSelector({
	cardInfo: selectCardCardInfo
})


export default connect(mapStateToProps)(CardsContainer);
