import React, { Component, PropTypes } from 'react';
import { renderBasket } from '../utils/basket';

export default class Basket extends Component {

    static propTypes = {
        basket: PropTypes.array.isRequired,
    };

    static contextTypes = {
        router: React.PropTypes.object
    };

    render(){
        const { basket } = this.props;

        return(
            <div className="card card-block">
                <h4 className="card-title"> Basket </h4>
                <ul className="basket-list">
                    { renderBasket(basket, "basketID") }
                </ul>

                <button onClick={ () => this.context.router.push('/confirmation_page') } className="btn btn-success">
                    Checkout
                </button>


            </div>
        );
    }
}




