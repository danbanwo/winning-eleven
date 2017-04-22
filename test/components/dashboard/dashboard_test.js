import { expect, renderComponent } from '../../test_helper';
import Dashboard from '../../../front/components/dashboard/Dashboard';

describe('Dashboard', () => {
  let component;

  let classNames = [
    'ad-cards-wrapper', 'contest-filter',
    'dashboard', 'entry-fee',
    'fixture-list', 'league-filter',
    'time-schedule', 'dashboard-body',
    'dashboard-left', 'dashboard-right'
  ]

  beforeEach(() => {
    component = renderComponent(Dashboard)
  })

  classNames.forEach(className => {
    if(className === 'dashboard') {
      it(`should have a class named ${className}`, () => {
        expect(component).to.have.class(className)
      })
    } else {
      it(`should have a class named ${className}`, () => {
        expect(component.find(`.${className}`)).to.exist
      })
    }
  })
})
