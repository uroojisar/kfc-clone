import {createSelector} from 'reselect';

export const selectExtras = state => state.extras;

export const selectDrinksFromExtras = createSelector(
    [selectExtras],
    extras => extras.filter(extras => extras.category === "DRINKS")
);

export const selectAddonsFromExtras = createSelector(
    [selectExtras],
    extras => extras.filter(extras => extras.category === "ADDONS")
);

export const selectDrinkItems = createSelector(
    [selectDrinksFromExtras],
    drinks => drinks[0].items
);

export const selectAddonItems = createSelector(
    [selectAddonsFromExtras],
    addons => addons[0].items
);