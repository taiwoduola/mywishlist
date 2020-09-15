import signInActionTypes from './signin.types';

const INITIAL_STATE = {
	open: true,
	
};

const signInReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case signInActionTypes.TOGGLE_SIGNIN:
			return {
				...state,
				open: !state.open
			};

	

		default:
			return state;
	}
};

export default signInReducer;
