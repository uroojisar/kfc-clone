import {createSelector} from 'reselect';

export const selectProducts = state => state.products;


export const selectSignatureBoxes = createSelector(
    [selectProducts],
    products => products.filter(product => product.category === "SIGNATURE_BOXES")
);

export const selectSignatureBoxItems = createSelector(
    [selectSignatureBoxes],
    signatureBoxes => signatureBoxes[0].items
);