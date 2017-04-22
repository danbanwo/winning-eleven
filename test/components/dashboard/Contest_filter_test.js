import { expect, renderComponent } from '../../test_helper';
import ContestFilter from '../../../front/components/dashboard/Contest-Filter';

describe('ContestFilter', () => {
  let component;

  // The below array is representative of the links to different contests
  let contests = ['Tournaments','3-100 Player', 'Head to Heads', '50/50s & Multipliers', 'Beginner Contests']

  beforeEach(() => {
    component = renderComponent(ContestFilter);
  })

  it('should have class name "contest-filter"', () => {
    expect(component).to.have.class('contest-filter')
  });

  it('should have five "a" tags', () => {
    expect(component.find('a').length).to.equal(5)
  });

  contests.forEach(contest => (
    it(`should have a ${contest} link`, () => {
      expect(component).to.contain(contest)
    })
  ))
});
