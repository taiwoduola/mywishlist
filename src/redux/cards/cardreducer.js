
//images
import demin from '../../images/Denim.png';
import manInWhite from '../../images/MANinwhite.png';
import jersey from '../../images/jersey.png';
import hat from '../../images/grayhat.png';



const INITIAL_STATE = {
    cardInfo: [
        {
            id: 1,
            imageUrl: manInWhite,
            header: 'new arrivals',
            paragragh: 'shop outdoor, fun, parks & more',
            buttonName: 'order now',
            color: 'card1'
        },
        {
            id: 2,
            imageUrl: jersey,
            header: 'deal of the day',
            paragragh: 'save on this great deal before its gone & more',
            buttonName: 'see the deal',
            color: 'card2'
        },
        {
            id: 3,
            imageUrl: hat,
            header: 'feel like you again',
            paragragh: 'massages, facials, spas & more',
            buttonName: 'shop now',
            color: 'card3'
        },
        {
            id: 4,
            imageUrl: demin,
            header: 'summer vacation',
            paragragh: 'drivable destination, family friendly trips & more',
            buttonName: 'shop travel',
            color: 'card4'
        }
    ]
}

const cardReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default cardReducer;