import { expect, renderComponent } from '../../test_helper';
import PlayerList from '../../../front/components/team-selection/Player_List';

describe('PlayerList', () => {
  let component;
  let htmlTags = ['table', 'thead', 'tr', 'th'];
  let classNames = ['table', 'table-striped', 'player-preview'];
  let tHead = ['NAME', 'POS', 'FPPG', 'PLAYED', 'GAME', 'SALARY'];

  beforeEach(() => {
    component = renderComponent(PlayerList);
  });

  it('should have a class name "player-list"', () => {
    expect(component).to.have.class('player-list');
  });

  htmlTags.forEach(tag => {
    it(`should have a "${tag}" tag`, () => {
      expect(component.find(tag)).to.exist;
    });
  });

  classNames.forEach(className => {
    it(`should have a "${className}" class name`, () => {
      expect(component.find(`.${className}`)).to.exist;
    });
  });

  tHead.forEach(header => {
    it(`should contain a "${header}" title`, () => {
      expect(component).to.contain(header)
    })
  })
});
