import { combineReducers } from 'redux';
import productReducer from './products/products.reducer';
import extrasReducer from './extras/extras.reducer';


const rootReducer = combineReducers({
    products: productReducer,
    extras: extrasReducer,
});

export default rootReducer;