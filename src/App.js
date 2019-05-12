import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Home from './containers/Home/Home';
import Layout from './hoc/layout/Layout';
import Login from './containers/Auth/Login/Login';
import Signup from './containers/Auth/Signup/Signup';
import Todos from './containers/Todos/Todos';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/todos' component={Todos} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Redirect to='/' />
      </Switch>
    </Layout>
  );
};

export default App;
