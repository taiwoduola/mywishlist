import { combineReducers } from 'redux';

//reducers
import trendsReducer from './trends/trends.reducer';
import cardReducer from './cards/cardreducer';
import popularReducer from './popular/popular.reducer';
import dealReducer from './deals/deals.reducer';
import catergoryReducer from './catergory/catergorydrop.reducer';
import signInReducer from './signin/signin.reducer';

export default combineReducers({
	trends: trendsReducer,
	cardInfo: cardReducer,
	collections: popularReducer,
	deals: dealReducer,
	hidden: catergoryReducer,
	isOpen: catergoryReducer,
	isClose: catergoryReducer,
	open: signInReducer
});
