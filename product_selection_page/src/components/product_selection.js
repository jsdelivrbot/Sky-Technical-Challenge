import React, { Component, PropTypes  } from 'react';
import { connect } from 'react-redux';
import ProductList from './product_list';

class ProductSelection extends Component {

    static propTypes = {
        products: PropTypes.array.isRequired,
    };


    render(){
        const { products } = this.props;

        return (
            <div>
                { products.map((product) => <ProductList product={product} key={product.id} />) }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
};

export default connect(mapStateToProps)(ProductSelection);