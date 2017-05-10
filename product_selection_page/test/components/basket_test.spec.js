import { renderComponent , expect } from '../test_helper';
import Basket from '../../src/components/basket';

describe('Product List' , () => {
    let component;

    beforeEach(() => {
        const props = {
            basket: [
                    {name: 'Arsenal TV', id: 'channel_1'},
                    {name: 'Chelsea TV', id: 'channel_2'},
                    {name: 'Liverpool TV', id: 'channel_3'}

            ]
        } ;

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
