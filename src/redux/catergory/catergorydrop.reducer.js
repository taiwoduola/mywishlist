import catergoryActionTypes from './catergorydrop.types';

const INITIAL_STATE = {
	hidden: true,
	isOpen: true,
	isClose: false
};

const catergoryReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case catergoryActionTypes.TOGGLE_CATERGORY:
			return {
				...state,
				hidden: !state.hidden
			};

		case catergoryActionTypes.OPEN_MENU:
			return {
				...state,
				isOpen: !state.isOpen
			};

		case catergoryActionTypes.CLOSE_MENU:
			return {
				...state,
				isClose: !state.isClose
			};

		default:
			return state;
	}
};

export default catergoryReducer;
