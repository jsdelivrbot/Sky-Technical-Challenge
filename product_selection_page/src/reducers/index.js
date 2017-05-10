import { combineReducers } from 'redux';
import ProductsReducer from './products';
import BasketReducer from './basket';

const rootReducer = combineReducers({
        products: ProductsReducer,
        basket: BasketReducer,
});

export default rootReducer;
