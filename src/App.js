import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Home from './containers/Home/Home';
import Todos from './containers/Todos/Todos';
import Layout from './hoc/layout/Layout';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/todos' component={Todos} />
        <Redirect to='/' />
      </Switch>
    </Layout>
  );
};

export default App;
