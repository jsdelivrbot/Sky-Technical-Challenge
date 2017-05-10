import { expect } from '../test_helper';
import BasketReducer from '../../src/reducers/basket';
import {REMOVE_FROM_CART, ADD_TO_CART} from '../../src/actions/types';

describe('Basket Reducer' , () => {

    it('handles action with unknown type', () => {
        expect(BasketReducer(undefined, {})).to.eql([]);
    });

    it('handles action with type ADD_TO_CART', () => {
        const action = {type: ADD_TO_CART, payload: {name: "Sky Sport News"}};
        expect(BasketReducer([], action)).to.eql([{name: "Sky Sport News"}]);
    });

    it('handles action with type REMOVE_FROM_CART', () => {
        const action = {type: REMOVE_FROM_CART, payload: {name: "Arsenal TV"}};
        const state = [{name: "Sky Sport News"},{name: "Arsenal TV"}];

        expect(BasketReducer(state, action)).to.eql([{name: "Sky Sport News"}]);

    });
});
