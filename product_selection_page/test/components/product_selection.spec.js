import { renderComponent, expect } from '../test_helper';
import ProductSelection from '../../src/components/product_selection';
import { products } from '../utils/';

describe('Product Selection Page' , () => {
    let component;

    beforeEach(() => {
        const props = {
            products: products
        };

        component = renderComponent(ProductSelection, props, props);
    });

    it(' Renders', () => {
        expect(component).to.exist;
    });

    it(' Shows a selection of products', () => {
        expect(component.find('.card-block').length).to.equal(2);
    });

    it(' Shows the Correct Products', () => {
        expect(component).to.contain("Sports");
        expect(component).to.contain("News");
    });

});
