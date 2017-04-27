import { expect, renderComponent } from '../../test_helper';
import TeamSelection from '../../../front/components/team-selection/Team_Selection';

describe('TeamSelection', () => {
  let component;

  let classNames = ['game-filter', 'player-search', 'player-filter', 'player-list', 'line-up', 'player-preview', 'team-selection-left', 'team-selection-right', 'team-selection-header', 'team-selection-body', 'team-filter-search', 'team-contest-details', 'contest-details', 'countdown'];

  let htmlTags = ['h4', 'h5'];

  beforeEach(() => {
    component = renderComponent(TeamSelection);
  })

  it('should have a class name "team-selection"', () => {
    expect(component).to.have.class('team-selection')
  });

  it('should contain text "Name of the contest ($11,000 to 1st)"', () => {
    expect(component).to.contain('Name of the contest ($11,000 to 1st)')
  });

  // should contain each class name in the classNames array above
  classNames.forEach(className => {
    it(`should contain class name for "${className}"`, () => {
      expect(component.find(`.${className}`)).to.exist
    });
  });

  it('should have four "contest-details" classNames', () => {
    expect(component.find('.contest-details').length).to.equal(4)
  });

/* To test elements within the class "team-contest-details" which is contained in the TeamSelection component
*/
  describe('CLASS: team-contest-details', () => {
    let component;
    let details = ['contest type', 'entries', 'entry fee', 'prizes'];

    beforeEach(() => {
      component = renderComponent(TeamSelection).find('.team-contest-details')
    });

    htmlTags.forEach(tag => {
      it(`should have four ${tag} tags`, () => {
        expect(component.find(tag).length).to.equal(4);
      });
    });

    details.forEach(detail => {
      it(`should contain "${detail}" text`, () => {
        expect(component).to.contain(detail)
      });
    });
  });
  /* Nested describe ends above*/

});
