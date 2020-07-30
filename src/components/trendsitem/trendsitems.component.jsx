//libs
import React from 'react';


//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';



import './trendsitems.styles.scss';


const TrendsItems = ({imageUrl, name, price, location, ratings, oldPrice}) => (
    <div className='trends'>
        <div style={{
            backgroundImage: `url(${imageUrl})`
        }} className='image'/>

        <div className='trends-footer'>
            <span className='name'> {name} </span>
            <span className='location'> {location} </span>
            <div className='rate'>
                <span className='score'>4.7</span>
                <div className='stars'>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                </div>
                <span className='ratings'> {ratings} </span>
            </div>
            <div className='prices'>
                <span className='old'>{oldPrice}</span>
                <span className='main'> {price} </span>
                <span className='off'>21% OFF</span>
            </div>   
        </div>
    </div>
);

export default TrendsItems;