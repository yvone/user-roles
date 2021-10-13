import logo from './logo.svg';
import './App.css';
import { NavLink } from 'react-router-dom';
import { Button } from './components';

function App(props) {
  return (
    <div className="App">
      <header className="AppHeader">
        <div className="AppHeader_home">
          <img src={logo} className="Logo" alt="logo" />
          <p>Hello <code>username</code></p>
        </div>

        <nav>
          <NavLink
            className="Link"
            activeClassName="Link___selected"
            to="/home"
          >
            Home
          </NavLink>
          <NavLink
            className="Link"
            activeClassName="Link___selected"
            to="/protected"
          >
            Protected
          </NavLink>
          <NavLink
            className="Link"
            activeClassName="Link___selected"
            to="/public"
          >
            Public
          </NavLink>
        </nav>

        <div className="AppHeader_actions">
          <Button variant="danger">
            Logout
          </Button>
          <Button
            onClick={() => props.history.push('/login')}
          >
            Login
          </Button>
          <Button
            variant="secondary"
            onClick={() => props.history.push('/register')}
          >
            Register
          </Button>
        </div>
      </header>
    </div>
  );
}

export default App;
