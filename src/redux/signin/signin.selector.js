import { createSelector } from 'reselect';

const selectOpen = (state) => state.open;

export const selectOpened = createSelector(
	[ selectOpen ],
	(open) => open.open
);