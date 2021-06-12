import React from 'react';
import {
  Route,
  Redirect,
  RouteProps as ReactRouteProps,
} from 'react-router-dom';

import AuthLayout from '~/layouts/Auth';
import DefaultLayout from '~/layouts/Default';

import { store } from '~/store';

interface RouteProps extends ReactRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const RouteWrapper: React.FC<RouteProps> = ({
  component: Component,
  isPrivate = false,
  ...rest
}) => {
  // const signed = true;
  const { signed } = store.getState().auth;

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isPrivate === !!signed ? (
          <Layout>
            <Component />
          </Layout>
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default RouteWrapper;
