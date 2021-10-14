import React, {useEffect} from 'react';
import logo from '../../logo.svg';
import styles from './dashboard.module.css';
import { NavLink } from 'react-router-dom';
import { Button } from '../../components';
import { useAuth } from '../../auth-context.js';

function Dashboard(props) {
    const { user, getUser, getToken, logout } = useAuth();
    useEffect(() => {
        getUser();
    }, []);
    const token = getToken();

    return (
        <div className={styles.Dashboard}>
            <header className={styles.Header}>
                <div className={styles.Header_home}>
                    <img src={logo} className={styles.Logo} alt="logo" />
                    {token ? <p>Hello <code>{user?.name}</code></p> : null}
                </div>

                <nav>
                    <NavLink
                        className={styles.Link}
                        activeClassName={styles.Link___selected}
                        to="/home"
                    >
                        Home
                    </NavLink>
                    {token ? (
                        <NavLink
                            className={styles.Link}
                            activeClassName={styles.Link___selected}
                            to="/protected"
                        >
                            Protected
                        </NavLink>
                    ) : null}
                    <NavLink
                        className={styles.Link}
                        activeClassName={styles.Link___selected}
                        to="/public"
                    >
                        Public
                    </NavLink>
                </nav>

                <div className={styles.Header_actions}>
                    {token ? (
                        <Button
                            variant="danger"
                            onClick={() => logout()}
                        >
                            Logout
                        </Button>
                    ) : (
                        <>
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
                        </>
                    )}
                </div>
            </header>
        </div>
    );
}

export default Dashboard;
