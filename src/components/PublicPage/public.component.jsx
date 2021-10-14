import React, { useState, useEffect } from 'react';
import { Button } from '../../components';
import { useAuth } from '../../auth-context.js';
import styles from './public.module.css';

function Public(props) {
    const [isProtectedVisible, setIsProtectedVisible] = useState(false);
    const [isPublicVisible, setIsPublicVisible] = useState(false);
    const { user, getUser } = useAuth();
    useEffect(() => {
        getUser();
    }, []);

    return (
        <section className={styles.Public}>
            <p>This is a public route</p>
            <img
                alt="a funny gif of a cartoon character smiling"
                src="https://media1.tenor.com/images/605e13c05d2caa50e18483ba64accc8b/tenor.gif?itemid=11766571"
            />
            <p>Everyone gather around</p>

            {/* Depending on the user role, show different options */}
            {user && user.role === 'admin' ? (
                <article>
                    <Button
                        onClick={() => setIsProtectedVisible(true)}
                    >
                        Protected message
                    </Button>
                    {isProtectedVisible ? (
                        <p>This is a protected action</p>
                    ) : null}
                </article>
            ) : null}
            {user && (user.role === 'admin' || user.role === 'operator') ? (
                <article>
                    <Button
                        onClick={() => setIsPublicVisible(true)}
                    >
                        Public message
                    </Button>
                    {isPublicVisible ? (
                        <p>This is a public action</p>
                    ) : null}
                </article>
            ) : null}
        </section>
    );
}

export default Public;