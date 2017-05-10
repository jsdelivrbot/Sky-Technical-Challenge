import React, { Component, PropTypes } from 'react';
import ProductChannel from '../containers/product_channel';

export default class ProductList extends Component {

    static propTypes = {
        product: PropTypes.object.isRequired,
    };

    renderCategoryProducts = (product) => {

        return(
            product.channels.map((channel) =>
                <ProductChannel
                    channel={channel}
                    key={channel.id}
                />
            ));
    };

    render(){
        const { product } = this.props;

        return(
            <div className="card card-block">
                <h4 className="card-title"> { product.category } </h4>
                {this.renderCategoryProducts(product)}
            </div>
        );
    }
}

