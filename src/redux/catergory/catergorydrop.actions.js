import catergoryActionTypes from './catergorydrop.types';

export const toggleCatergory = () => ({
	type: catergoryActionTypes.TOGGLE_CATERGORY
});

export const openMenu = () => ({
	type: catergoryActionTypes.OPEN_MENU
});

export const closeMenu = () => ({
	type: catergoryActionTypes.CLOSE_MENU
});
