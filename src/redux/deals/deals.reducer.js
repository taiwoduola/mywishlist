
//images
import image1 from '../../images/couple-buying-groceries-at-a-supermarket-4198970.jpg';
import image2 from '../../images/food-healthy-nature-red-46174.jpg';
import image3 from '../../images/woman-standing-beside-pineapple-fruits-2292919.jpg';


const INITIAL_STATE = {
    deals: [
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
        },
        {
            id: 4,
            imageUrl: image3,
            name: 'groceries',
            location: 'oke-afa',
            price: 33.99,
            ratings: '6745 Ratings',
            oldPrice: 14.99
        },
        {
            id: 5,
            imageUrl: image1,
            name: 'pineapple fruits',
            location: 'jakande estate',
            price: 23.99,
            ratings: '345 Ratings',
            oldPrice: 24.99
        },
        {
            id: 6,
            imageUrl: image2,
            name: 'food healthy',
            location: 'isolo',
            price: 28.99,
            ratings: '3467 Ratings',
            oldPrice: 33.99
        },
        {
            id: 7,
            imageUrl: image3,
            name: 'groceries',
            location: 'oke-afa',
            price: 33.99,
            ratings: '6745 Ratings',
            oldPrice: 14.99
        },
        {
            id: 8,
            imageUrl: image3,
            name: 'groceries',
            location: 'oke-afa',
            price: 33.99,
            ratings: '6745 Ratings',
            oldPrice: 14.99
        },
        {
            id: 9,
            imageUrl: image1,
            name: 'pineapple fruits',
            location: 'jakande estate',
            price: 23.99,
            ratings: '345 Ratings',
            oldPrice: 24.99
        },
        {
            id: 10,
            imageUrl: image2,
            name: 'food healthy',
            location: 'isolo',
            price: 28.99,
            ratings: '3467 Ratings',
            oldPrice: 33.99
        },
        {
            id: 11,
            imageUrl: image3,
            name: 'groceries',
            location: 'oke-afa',
            price: 33.99,
            ratings: '6745 Ratings',
            oldPrice: 14.99
        },
        {
            id: 12,
            imageUrl: image3,
            name: 'groceries',
            location: 'oke-afa',
            price: 33.99,
            ratings: '6745 Ratings',
            oldPrice: 14.99
        },
        {
            id: 13,
            imageUrl: image1,
            name: 'pineapple fruits',
            location: 'jakande estate',
            price: 23.99,
            ratings: '345 Ratings',
            oldPrice: 24.99
        },
        {
            id: 14,
            imageUrl: image2,
            name: 'food healthy',
            location: 'isolo',
            price: 28.99,
            ratings: '3467 Ratings',
            oldPrice: 33.99
        },
        {
            id: 15,
            imageUrl: image3,
            name: 'groceries',
            location: 'oke-afa',
            price: 33.99,
            ratings: '6745 Ratings',
            oldPrice: 14.99
        },
        {
            id: 16,
            imageUrl: image3,
            name: 'groceries',
            location: 'oke-afa',
            price: 33.99,
            ratings: '6745 Ratings',
            oldPrice: 14.99
        },
        {
            id: 17,
            imageUrl: image1,
            name: 'pineapple fruits',
            location: 'jakande estate',
            price: 23.99,
            ratings: '345 Ratings',
            oldPrice: 24.99
        },
        {
            id: 18,
            imageUrl: image2,
            name: 'food healthy',
            location: 'isolo',
            price: 28.99,
            ratings: '3467 Ratings',
            oldPrice: 33.99
        },
        {
            id: 19,
            imageUrl: image3,
            name: 'groceries',
            location: 'oke-afa',
            price: 33.99,
            ratings: '6745 Ratings',
            oldPrice: 14.99
        },
        {
            id: 20,
            imageUrl: image3,
            name: 'groceries',
            location: 'oke-afa',
            price: 33.99,
            ratings: '6745 Ratings',
            oldPrice: 14.99
        },
        {
            id: 21,
            imageUrl: image1,
            name: 'pineapple fruits',
            location: 'jakande estate',
            price: 23.99,
            ratings: '345 Ratings',
            oldPrice: 24.99
        },
        {
            id: 22,
            imageUrl: image2,
            name: 'food healthy',
            location: 'isolo',
            price: 28.99,
            ratings: '3467 Ratings',
            oldPrice: 33.99
        },
        {
            id: 23,
            imageUrl: image3,
            name: 'groceries',
            location: 'oke-afa',
            price: 33.99,
            ratings: '6745 Ratings',
            oldPrice: 14.99
        },
        {
            id: 24,
            imageUrl: image3,
            name: 'groceries',
            location: 'oke-afa',
            price: 33.99,
            ratings: '6745 Ratings',
            oldPrice: 14.99
        }
    ]
}

const dealReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default dealReducer;