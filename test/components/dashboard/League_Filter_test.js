import { expect, renderComponent } from '../../test_helper';
import LeagueFilter from '../../../front/components/dashboard/League_Filter';

describe('LeagueFilter', () => {
  let component;

  // represent the different classes contained within the conponent's JSX
  let classNames = ['league-filter', 'nav', 'btn', 'tab-pane', 'tab-content']

  // represent the different League Filter tab labels
  let tabLabels = [
    {
      text: 'Featured',
      attrValue: 'featured'
  },
  {
    text: 'All',
    attrValue: 'all'
  },
  {
    text: 'EPL',
    attrValue: 'epl'
  },
  {
    text: 'La Liga',
    attrValue: 'la-liga'
  },
  {
    text: 'Serie A',
    attrValue: 'serie-a'
  },
  {
    text: 'Bundesliga',
    attrValue: 'bundesliga'
  },
  {
    text: 'Ligue 1',
    attrValue: 'ligue-1'
  },
  {
    text: 'Champions League',
    attrValue: 'champions-league'
  },
]

  beforeEach(() => {
    component = renderComponent(LeagueFilter)
  })

  classNames.forEach(classname => {
    if(classname === 'league-filter') {
      it(`should have class name "${classname}"`, () => {
        expect(component).to.have.class(classname)
      });
    } else {
      it(`should have class name "${classname}"`, () => {
        expect(component.find(`.${classname}`)).to.exist
      });
    }
  })

  tabLabels.forEach(label => (
    it(`should contain the tab label "${label.text}"`, () => {
      expect(component).to.contain(label.text)
    })
  ))

  it('should have a button that contains the text "Create Contest"', () => {
    expect(component.find('button')).to.contain('Create Contest')
  });

  it('should have a class name "contest-filter"', () => {
    expect(component.find('.contest-filter')).to.exist
  })

  it('should have seven instances of class name "contest-filter"', () => {
    expect(component.find('.contest-filter').length).to.equal(7)
  });
});
