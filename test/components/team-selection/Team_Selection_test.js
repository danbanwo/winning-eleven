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
  it('should contain class name for game-filter', () => {
    expect(component.find('.game-filter')).to.exist
  })

  // shoudld contain class name for player search component
  it('should contain class name for player-search', () => {
    expect(component.find('.player-search')).to.exist
  })

  // should containe class name for player filter component
  it('should contain class name for player-filter', () => {
    expect(component.find('.player-filter')).to.exist
  })

  // should contain class name for player list component
  it('should contain class name for player-list', () => {
    expect(component.find('.player-list')).to.exist
  })

  // should contain class name for add player component
  it('should contain class name for add-player', () => {
    expect(component.find('.add-player')).to.exist
  })

  // should contain class name for player preview component
  it('should contain class name for player-preview', () => {
    expect(component.find('.player-preview')).to.exist
  })

});
