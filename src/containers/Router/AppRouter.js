// @flow
import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import appRoutes from '../../config/appRoutes';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      {appRoutes.map(({ exact, path, component, id }) => (
        <Route key={id} path={path} exact={exact} component={component} />
      ))}
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
