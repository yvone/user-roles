import React from 'react';
import './App.css';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import {
  RegisterForm,
  ProtectedPage,
  PublicPage,
  Dashboard,
} from './components';
import { useAuth } from './auth-context';

/**
 * Meant to guard the route
 * if the user is authenticated
 *  go on with the route
 * else
 *  redirect to login
 */
function ProtectedRoute(props) {
  const { getToken } = useAuth();
  const token = getToken();

  return (
    <>
      {token ? (
        <Route {...props} />
      ) : <Redirect to="/login" /> }
    </>
  );
}

/**
 * Meant to avoid unusual behavior with /login & /register
 * if the user is already authenticated
 *  cannot login twice!!!
 * else
 *  go on with the route
 */
function CustomRoute(props) {
  const { getToken } = useAuth();
  const token = getToken();

  return (
    <>
      {token ? (
        <Redirect to="/home" />
      ) : <Route {...props} />}
    </>
  );
}


function App(props) {
  return (
    <div>
      <Route
        path="/"
        component={Dashboard}
      />
      <Switch>
        <Route
          exact
          path="/home"
          render={() => (
            <div style={{padding: '2rem'}}>
              <h1>Welcome to this App</h1>
            </div>
          )}
        />
        <CustomRoute
          exact
          path="/register"
          component={RegisterForm}
        />
        <CustomRoute
          exact
          path="/login"
          component={RegisterForm}
        />
        <ProtectedRoute
          exact
          path="/protected"
          component={ProtectedPage}
        />
        <Route
          exact
          path="/public"
          component={PublicPage}
        />
      </Switch>
    </div>
  )
}

export default App;
