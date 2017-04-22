import { expect, renderComponent } from '../../test_helper';
import AdCards from '../../../front/components/dashboard/Ad_Cards';

describe('AdCards', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(AdCards)
  })
  it('should have four "div" tags', () => {
    expect(component.find('div').length).to.equal(4)
  });
});
