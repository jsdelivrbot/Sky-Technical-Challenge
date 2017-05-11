import { renderComponent , expect } from '../test_helper';
import Basket from '../../src/components/basket';
import { basket } from '../utils/';

describe('Product List' , () => {
    let component;

    beforeEach(() => {
        const props = basket;
        component = renderComponent(Basket, props, props);
    });

    it(' Renders', () => {
        expect(component).to.exist;
    });


    it(' Shows a list of selected channels in the basket', () => {
        expect(component.find('li').length).to.equal(3);
    });

    it(' Shows the correct channels', () => {
        expect(component).to.contain("Arsenal TV");
        expect(component).to.contain("Chelsea TV");
        expect(component).to.contain("Liverpool TV");
    });

    it(' Shows a checkout button', () => {
        expect(component.find('button').length).to.equal(1);
        expect(component.find('.btn-success')).to.exist;
    });

});
