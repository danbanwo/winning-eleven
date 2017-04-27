import { expect, renderComponent } from '../../test_helper';
import LineUp from '../../../front/components/team-selection/Line_Up';

describe('LineUp', () => {
  let component;
  let classNames = ['line-up-titles', 'table', 'table-striped', 'table-hover', 'btn', 'btn-success'];
  let htmlTags = ['table', 'tbody', 'button'];
  let table = ['tr', 'td'];

  beforeEach(() => {
    component = renderComponent(LineUp);
  })

  it('should have a "line-up" class name', () => {
    expect(component).to.have.class('line-up');
  });

  classNames.forEach(className => {
    it(`should have "${className}" class name`, () => {
      expect(component.find(`.${className}`)).to.exist
    });
  });

  htmlTags.forEach(tag => {
    it(`should have a "${tag}" tag`, () => {
      expect(component.find(tag)).to.exist
    });
  });

  table.forEach(tag => {
    it(`should have 8 "${tag}" tags`, () => {
      expect(component.find(tag).length).to.equal(8)
    });
  });

  it('should have an h5 tag and contain text: "Salary Remaining | Average Player"', () => {
    expect(component.find('h5')).to.exist.and.to.contain('Salary Remaining | Average Player');
  });

  it('should have an h3 tag and contain text: "Your Lineup"', () => {
    expect(component.find('h3')).to.exist.and.to.contain('Your Lineup');
  });
});
