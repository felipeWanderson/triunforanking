import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Ranking from '../pages/Ranking';
import Register from '../pages/Register';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Ranking} />
    <Route path="/register" component={Register} />
  </Switch>
);

export default Routes;
