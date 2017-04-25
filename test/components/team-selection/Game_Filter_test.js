import { expect, renderComponent } from '../../test_helper';
import GameFilter from '../../../front/components/team-selection/Game_filter';

describe('GameFilter', () => {
  let component;
  let fixtures = [
    {name: 'Game 1', time: '10:00am'},
    {name: 'Game 2', time: '10:00am'},
    {name: 'Game 3', time: '10:00am'},
    {name: 'Game 4', time: '10:00am'},
    {name: 'Game 5', time: '10:00am'},
  ]

  beforeEach(() => {
    component = renderComponent(GameFilter)
  })

  it('should have five li tags', () => {
    expect(component.find('li').length).to.equal(6)
  })

  it('should have an "li" tag with class name "active"', () => {
    expect(component.find('li')).to.have.class('active')
  });

  it('should contain an "All" tab', () => {
    expect(component).to.contain('All')
  })

  fixtures.forEach((fixture) => (
    it(`should contain ${fixture.name, fixture.time}`, () => {
      expect(component).to.contain(`${fixture.name, fixture.time}`)
    })
  ))

  it('should have class name nav-tabs', () => {
    expect(component.find('.nav-tabs')).to.exist
  });

  it('should have a ul tag', () => {
    expect(component.find('ul')).to.exist
  })
});
