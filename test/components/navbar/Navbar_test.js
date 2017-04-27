import { expect, renderComponent } from '../../test_helper';
import Navbar from '../../../front/components/navbar/Navbar';

describe('Navbar', () => {
  describe('for the pathname: "/"', () => {
    let component;

    // the below array represent the links in the navbar pre-login
    let links = ['Winning Eleven','Sign Up', 'Log In'];

    beforeEach(() => {
      component = renderComponent(Navbar, {pathname:'/'});
    })

    it('should have two "LI" tags', () => {
      expect(component.find('a').length).to.equal(3)
    })

    it('should have a class named "navbar-right"', () => {
      expect(component.find('.navbar-right')).to.exist
    })

    links.forEach(link => (
      it(`should have a ${link} link`, () => {
        expect(component).to.contain(link)
      })
    ))
  })

/*------Test for routes that are not '/' -----*/
  describe('every other route', () => {
    let component;

    // the below array represent all the links in the navbar post-login
    let links = ['Winning Eleven','Lobby', 'Upcoming', 'Live', 'History', 'Friends', 'Add Funds']

    beforeEach(() => {
      component = renderComponent(Navbar, {pathname: '/dashboard'})
    })

    it('should have six "LI" tags', () => {
      expect(component.find('li').length).to.equal(9)
    })

    it('should have a class named "navbar-right"', () => {
      expect(component.find('.navbar-right')).to.exist
    })

    it('should have a button', () => {
      expect(component.find('button')).to.exist
    })
    links.forEach(link => (
      it(`should have a ${link} link`, () => {
        expect(component).to.contain(link)
      })
    ))
  })
})
