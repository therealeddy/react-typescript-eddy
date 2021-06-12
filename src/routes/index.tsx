import React from 'react';

import { Switch } from 'react-router-dom';

import { SignIn } from '~/pages';

import Route from './Route';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/dashboard" component={SignIn} isPrivate />
    </Switch>
  );
};

export default Routes;
