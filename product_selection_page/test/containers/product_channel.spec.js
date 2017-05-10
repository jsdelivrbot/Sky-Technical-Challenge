import { renderComponent, expect } from '../test_helper';
import ProductChannel from '../../src/containers/product_channel';
import { channel } from '../utils/';

describe('Product Channel' , () => {
    let component;
    let props;

    beforeEach(() => {
        props = {
            channel: channel
        };

        component = renderComponent(ProductChannel, props, props);
    });

    it(' Renders', () => {
        expect(component).to.exist;
    });

    it(' Product Channel is a checkbox', () => {
        expect(component.find('input').length).to.equal(1);
    });

    it(' Shows the Correct product channel', () => {
        expect(component).to.contain(props.channel.name);
    });

});
