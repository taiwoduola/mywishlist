import { createSelector } from 'reselect';

const selectCard = state => state.cardInfo;

export const selectCardCardInfo = createSelector(
    [selectCard],
    card => card.cardInfo
)