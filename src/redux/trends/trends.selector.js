import { createSelector } from 'reselect';

const selectTrends = state => state.trends;

export const selectTrendTrends = createSelector(
    [selectTrends],
    trends => trends.trends
)