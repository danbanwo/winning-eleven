import { expect, renderComponent } from '../../test_helper';
import LandingPage from '../../../front/components/landing/LandingPage';

describe('LandingPage', () => {
  let component = renderComponent(LandingPage)
  it('should have a class name landing-page', () => {
    expect(component).to.have.class('landing-page')
  });
  it('should contain text "Hello from the landing page!"', () => {
    expect(component).to.contain('Hello from the landing page!')
  });
});
