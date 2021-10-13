import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Route,
	Switch,
} from 'react-router-dom';
import App from './App';
import {
  RegisterForm,
  ProtectedPage,
  PublicPage
} from './components';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route
        path="/"
        component={App}
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
        <Route
          exact
          path="/register"
          component={RegisterForm}
        />
        <Route
          exact
          path="/login"
          component={RegisterForm}
        />
        <Route
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
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
