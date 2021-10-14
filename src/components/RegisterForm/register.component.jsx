import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Input } from '../index';
import { useAuth } from '../../auth-context';
import styles from './register.module.css';

function Register(props) {
    const isRegister = props.location.pathname.match(/login/) === null;
    const [user, setUser] = useState({
		username: '',
		password: '',
	});
    const [isPassVisible, setIsPassVisible] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const { register, login } = useAuth();

    function onChange(event) {
		setUser({
			...user,
			[event.target.name]: event.target.value,
		});
	}

    async function handleSubmit(event) {
        event.preventDefault();
        
        let token;
        try {
            if (isRegister) {
                token = await register(user);
            } else {
                token = await login(user);
            }

			if(token) setIsAuthenticated(true);
		} catch(err) {
			console.error(err.response.data);
			return alert("Something went wrong. Try again later");
		}
    }

    if(isAuthenticated) {
		return <Redirect to ="/home" />
	}

    return (
        <form className={styles.Register} onSubmit={handleSubmit}>
            <section className={styles.Register_form}>
                <Input
                    id="username"
                    name="username"
                    label="Username"
                    type="text"
                    value={user.username}
                    onChange={onChange}
                    required
                />
                <Input
                    id="password"
                    name="password"
                    label="Password"
                    type={isPassVisible ? "text" : "password"}
                    value={user.password}
                    onChange={onChange}
                    minLength={8}
                    required
                    actionComponent={(
                        <button
                            type="button"
                            className={styles.PasswordBtn}
                            onClick={() => setIsPassVisible(!isPassVisible)}
                        >
                            {isPassVisible ? "🐵" : "🙈"}
                        </button>
                    )}
                />
            </section>
            <section className={styles.Register_footer}>
                <Button type="submit">
                    {isRegister ? "Register" : "Login"}
                </Button>
            </section>
        </form>
    );
}

export default Register;