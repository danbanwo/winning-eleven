import React from 'react';
import { Router, Route, browserHistory, IndexRoute} from 'react-router';

import { App, Dashboard, TeamSelection, } from '../components';

const Routes = (props) => (
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <Route path='dashboard' component={Dashboard} />
        <Route path='team-selection' component={TeamSelection} />
      </Route>
    </Router>
  )

export default Routes;
