import EXTRAS from './extras.data';
const INITIAL_STATE = {
    extras: EXTRAS
};

const extrasReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case "EXTRAS":
            return state.extras;
        default: 
            return state.extras;
    }
};

export default extrasReducer; 