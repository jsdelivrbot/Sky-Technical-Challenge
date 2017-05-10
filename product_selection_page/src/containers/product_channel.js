import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions/index';

class ProductChannel extends Component {

    state = {
        isChecked: false
    };

    static propTypes = {
       channel: PropTypes.object.isRequired,
    };

    updateCart = () => {
        const { add_to_cart, remove_from_cart,  channel } = this.props;

        this.setState(({ isChecked }) => ({
                isChecked: !isChecked,
            }
        ));

        this.state.isChecked ? remove_from_cart(channel) : add_to_cart(channel);
    };

    render() {
        const { channel } = this.props;
        const { isChecked } = this.state;

        return (
            <div className="checkbox">
                <label>
                    <input
                        type="checkbox"
                        value={channel.name}
                        checked={isChecked}
                        onChange={this.updateCart}
                    />

                    { channel.name }

                </label>
            </div>
        );
    }
}




const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch);
}


export default connect(null, mapDispatchToProps)(ProductChannel);