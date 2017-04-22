import { expect, renderComponent } from '../../test_helper';
import FixtureList from '../../../front/components/dashboard/Fixture_List';

describe('FixtureList', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(FixtureList);
  })

  it('should have a class name "fixture-list"', () => {
    expect(component).to.have.class('fixture-list')
  });

  it('should contain text "FIXTURES WILL BE POPULATED HERE!"', () => {
    expect(component).to.contain('FIXTURES WILL BE POPULATED HERE!')
  });
});
