import React, { useState } from 'react';
import { Button, Input } from '../../components';
import styles from './register.module.css';

function Register(props) {
    const [isPassVisible, setIsPassVisible] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        console.log('submit');
    }

    return (
        <form className={styles.Register} onSubmit={handleSubmit}>
            <section className={styles.Register_form}>
                <Input
                    id="username"
                    label="Username"
                    type="text"
                />
                <Input
                    id="password"
                    label="Password"
                    type={isPassVisible ? "text" : "password"}
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
                    Register/Login
                </Button>
            </section>
        </form>
    );
}

export default Register;