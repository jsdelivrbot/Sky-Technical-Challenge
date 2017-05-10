import {REMOVE_FROM_CART, ADD_TO_CART} from '../actions/types';

export default function(state = [], action ){

    switch(action.type) {
        case ADD_TO_CART:
            return [...state, action.payload];
        case REMOVE_FROM_CART:
            return state.filter((channel) => channel.name !== action.payload.name);
    }

    return state;
}
