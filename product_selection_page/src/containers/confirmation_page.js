import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { renderBasket } from '../utils/basket';
import Cookies from 'universal-cookie';

class ConfirmationPage extends Component {

    static contextTypes = {
        router: React.PropTypes.object
    };

    render(){
        const { basket } = this.props;
        const cookies = new Cookies();

        return(
            <div className="card confirmation-card card-block">
                <h4 className="card-title"> Congratulations { cookies.get('customerID') }</h4>
                <p> You have selected the following channels: </p>
                <ul className="basket-list">
                    { renderBasket(basket, "confirmationPageID") }
                </ul>
            </div>
        );
    }
}



const mapStateToProps = (state) => {
    return { basket: state.basket }
};


export default connect(mapStateToProps)(ConfirmationPage);

