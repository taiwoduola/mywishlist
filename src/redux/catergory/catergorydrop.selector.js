import { createSelector } from 'reselect';

const selectHidden = (state) => state.hidden;

export const selectHiddens = createSelector(
	[ selectHidden ],
	(hidden) => hidden.hidden
);

const selectOpen = (state) => state.isOpen;

export const selectIsOpen = createSelector(
	[ selectOpen ],
	(isOpen) => isOpen.isOpen
);

const selectClose = (state) => state.isClose;

export const selectIsClose = createSelector(
	[ selectClose ],
	(isClose) => isClose.isClose
);
