import { expect, renderComponent } from '../../test_helper';
import PlayerFilter from '../../../front/components/team-selection/Player_Filter';

describe('PlayerFilter', () => {
  let component;
  let positions = ['ALL', 'GK', 'DEF', 'MID', 'FWD'];

  beforeEach(() => {
    component = renderComponent(PlayerFilter);
  })

  it('should contain five "li" tags', () => {
    expect(component.find('li').length).to.equal(5)
  });

  positions.forEach(position => (
    it(`should contain ${position}`, () => {
      expect(component).to.contain(position);
    })
  ))
});
