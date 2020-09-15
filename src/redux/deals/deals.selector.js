import { createSelector } from 'reselect';

const selectDeal = state => state.deals;

export const selectDeals = createSelector(
    [selectDeal],
    deal => deal.deals
)