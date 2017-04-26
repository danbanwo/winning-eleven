import { expect, renderComponent } from '../../test_helper';
import PlayerSearch from '../../../front/components/team-selection/Player_Search';

describe('PlayerSearch', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(PlayerSearch);
  });

  it('should have a class name "player-search"', () => {
    expect(component).to.have.class('player-search');
  });

  it('should have an "input" tag with a "type" attribute with value "text"', () => {
    expect(component.find('input')).to.exist.and.to.have.attr('type', 'text')
  });

  it('should have a value of "Alexis Sanchez"', () => {
    component.find('input').simulate('change', 'Alexis Sanchez');
    expect(component.find('input')).to.have.attr('value', 'Alexis Sanchez')
  });
});
