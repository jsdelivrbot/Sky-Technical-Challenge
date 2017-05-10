import { FETCH_CATALOGUE } from '../actions/types';

export default function(state = [], action ){

    switch(action.type){
        case FETCH_CATALOGUE:
            return [...state, ...action.payload.data]
    }

    return state;
}