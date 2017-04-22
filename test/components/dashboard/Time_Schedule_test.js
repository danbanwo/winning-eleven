import { expect, renderComponent } from '../../test_helper';
import TimeSchedule from '../../../front/components/dashboard/Time_schedule';

describe('TimeSchedule', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(TimeSchedule)
  })

  it('should have a class name "time-schedule"', () => {
    expect(component).to.have.class('time-schedule')
  });

  it('should contain the text "Time Schedule"', () => {
    expect(component).to.contain('Time Schedule')
  });

  it('should have five "input" tags', () => {
    expect(component.find('input')).length(6)
  });

  it('should have five "label" tags', () => {
    expect(component.find('label')).length(6)
  });

  it('should have a "type" attribute with a "radio" value', () => {
    expect(component.find('input')).to.have.attr('type', 'radio')
  })
  it('should have a "form" tag', () => {
    expect(component.find('form')).to.exist
  });
});
