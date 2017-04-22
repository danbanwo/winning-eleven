import { expect, renderComponent } from '../../test_helper';
import EntryFee from '../../../front/components/dashboard/Entry_Fee';

describe('EntryFee', () => {
  let component;

  // this below array is representative of the text in component
  let text = ['Entry Fee', '$0', '$50,000'];

   beforeEach(() => {
     component = renderComponent(EntryFee);
   })

   it('should have a class name "entry-fee"', () => {
     expect(component).to.have.class('entry-fee')
   });

   it('should have an "input" tag', () => {
     expect(component.find('input')).to.exist
   });

   it('should have an input tag with a "type" attribute and "range" value', () => {
     expect(component.find('input')).to.have.attr('type', 'range')
   });

   text.forEach(title => (
     it(`should contain text "${title}"`, () => {
       expect(component).to.contain(title)
     })
   ))
});
