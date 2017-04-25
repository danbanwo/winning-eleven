import { expect, renderComponent } from '../../test_helper';
import PlayerPreview from '../../../front/components/team-selection/Player_Preview';

describe('PlayerPreview', () => {
  let component;
  let classNames = ['btn', 'btn-success']
  let htmlTags = ['tr', 'td', 'button']
  let tagCount = [
    {key: 'tr', num: 3, value: 'three'},
    {key:'td', num: 21, value: 'twenty-one'}
  ];



  beforeEach(() => {
    component = renderComponent(PlayerPreview);
  })

  it('should have a class name of "player-preview"', () => {
    expect(component).to.have.class('player-preview');
  });

  classNames.forEach(className => {
    it(`should have a class name '${className}'`, () => {
      expect(component.find(`.${className}`)).to.exist;
    });
  });

  htmlTags.forEach(tag => {
    it(`should have a tag name '${tag}'`, () => {
      expect(component.find(`${tag}`)).to.exist;
    });
  });

  tagCount.forEach(tag => {
    it(`should have ${tag.value} "${tag.key}" tags `, () => {
      expect(component.find(tag.key).length).to.equal(tag.num);
    });
  });
});
