import PRODUCTS_DATA from './products.data';
const INITIAL_STATE = {
    products: PRODUCTS_DATA
};

const productReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case "SIGNATURE_BOXES":
            // return {...state, PRODUCTS_DATA}; 
            console.log("Products data is: ", PRODUCTS_DATA["SIGNATURE_BOXES"]);
            return state.products;
        default: 
            return state.products;
    }
};

export default productReducer; 