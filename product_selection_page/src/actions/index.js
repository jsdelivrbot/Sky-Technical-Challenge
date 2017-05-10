import axios from 'axios';
import Cookies from 'universal-cookie';

import { FETCH_CATALOGUE, REMOVE_FROM_CART, ADD_TO_CART } from './types';
import config from '../config';


export function fetch_customer_location() {
    const cookies = new Cookies();

    return (dispatch) => {
        return axios.get(`${ config.customer_location_stub_url }/${cookies.get('customerID')}`).then(
            (result) =>  dispatch(fetch_catalogue(result.data)),
            (error) =>  console.error("Could not fetch catalogues...")
        );
    };
}

export function fetch_catalogue(customerLocation){
    const catalogue = axios.get(`${ config.catalogue_service_url }/catalogue/${customerLocation}`);

    return {
        type: FETCH_CATALOGUE,
        payload: catalogue
    }
}

export function add_to_cart(channel){
    return {
        type: ADD_TO_CART,
        payload: channel
    }
}

export function remove_from_cart(channel){
    return {
        type: REMOVE_FROM_CART,
        payload: channel
    }
}
