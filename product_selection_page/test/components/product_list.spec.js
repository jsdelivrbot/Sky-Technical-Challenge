import { renderComponent , expect } from '../test_helper';
import ProductList from '../../src/components/product_list';
import { product } from '../utils/';

describe('Product List' , () => {
    let component;

    beforeEach(() => {
        const props = product;

        component = renderComponent(ProductList, props, {});
    });

    it(' Renders', () => {
        expect(component).to.exist;
    });


    it(' Shows a list of product channels', () => {
        expect(component.find('input').length).to.equal(3);
    });

    it(' Shows the correct channels', () => {
        expect(component).to.contain("Arsenal TV");
        expect(component).to.contain("Chelsea TV");
        expect(component).to.contain("Liverpool TV");
    });


});
