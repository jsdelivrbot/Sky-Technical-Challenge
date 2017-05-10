import React, { Component, PropTypes } from 'react';
import ProductSelection from '../components/product_selection';
import Basket from '../components/basket';
import { connect } from 'react-redux';

import * as actions from '../actions/index';

class App extends Component {

    static propTypes = {
        products: PropTypes.array.isRequired,
        basket: PropTypes.array.isRequired
    };

    componentWillMount() {
        this.props.fetch_customer_location();
    }

    render() {
        const { basket, products } = this.props;

        return (
            <div className="category-list">
                <ProductSelection products={ products } />
                <Basket basket={ basket } />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        basket: state.basket
    }
}

export default connect(mapStateToProps, actions)(App);