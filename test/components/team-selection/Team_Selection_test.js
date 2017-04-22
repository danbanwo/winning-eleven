import { expect, renderComponent } from '../../test_helper';
import TeamSelection from '../../../front/components/team-selection/Team_Selection';

describe('TeamSelection', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(TeamSelection);
  })

  it('should have a class name "team-selection"', () => {
    expect(component).to.have.class('team-selection')
  });

  it('should contain text "Hello from the Team Selection Page!"', () => {
    expect(component).to.contain('Hello from the Team Selection Page!')
  });

  // should contain class name for game-filter component

  // shoudld contain class name for player search component

  // should containe class name for player filter component

  // should contain class name for player list component

  // should contain class name for add player component

  // should contain class name for player preview component


});
