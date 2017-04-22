import { expect, renderComponent } from '../../test_helper';
import SearchBar from '../../../front/components/search/Search_Bar';

describe('SearchBar', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(SearchBar)
  })

  it('should have a class name "search-bar"', () => {
    expect(component).to.have.class('search-bar')
  });

  it('should have an "input" tag', () => {
    expect(component.find('input')).to.exist
  })

  it('should return text "Daniel"', () => {
    component.find('input').simulate('change', 'Daniel')
    expect(component.find('input')).to.have.value('Daniel')
  })
});
