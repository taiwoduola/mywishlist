//libraries
import React from 'react';

//css
import './trendscontainer.styles.scss';

//images
import image1 from '../../images/couple-buying-groceries-at-a-supermarket-4198970.jpg';
import image2 from '../../images/food-healthy-nature-red-46174.jpg';
import image3 from '../../images/woman-standing-beside-pineapple-fruits-2292919.jpg';
import TrendsItems from '../trendsitem/trendsitems.component';

class TrendsContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			trends: [
				{
					id: 1,
					imageUrl: image1,
					name: 'pineapple fruits',
                    location: 'jakande estate',
                    price: 23.99,
                    ratings: '345 Ratings',
                    oldPrice: 24.99
				},
				{
					id: 2,
					imageUrl: image2,
					name: 'food healthy',
                    location: 'isolo',
                    price: 28.99,
                    ratings: '3467 Ratings',
                    oldPrice: 33.99
				},
				{
					id: 3,
					imageUrl: image3,
					name: 'groceries',
                    location: 'oke-afa',
                    price: 33.99,
                    ratings: '6745 Ratings',
                    oldPrice: 14.99
				}
			]
		};
	}

	render() {
        const { trends } = this.state;
		return (
			<div className="trends-container">
				<h2>Hi there, here's what's trending today</h2>
                <div className='main-trends'>
                    {
                        trends.map(({id, ...otherTrendsProps}) => (
                            <TrendsItems key={id} {...otherTrendsProps} />
                        ))
                    }
                </div>
			</div>
		);
	}
}

export default TrendsContainer;
