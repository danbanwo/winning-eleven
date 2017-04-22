import { renderComponent, expect } from '../test_helper';
import App from '../../front/components/App';

// The 'describe' block should identify the Component the tests are being run for
describe('App', () => {

  let component;

  // creates an instance of the App component for each 'it' block
  beforeEach(() => {
    component = renderComponent(App, {location:{pathname:'/'}});
  });

  // SIDE NOTE: The 'it' block should concisely explain the objective of the test
  // This test confirms the existence of the App component by checking for the wrapping
  // 'div' that contains a className 'app-home'
  it('should have a className "app-home"', () => {

    //the expect block is where the assertions are defined. i.e. defines the code for the tests
    expect(component).to.have.class('app-home');
  });

  // Test to verify the Navbar component works within the App component by checking for the
  // className 'Navbar'
  it('should have a className "navbar"', () => {
    expect(component.find('.navbar')).to.exist
  });
});
