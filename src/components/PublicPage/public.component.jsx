import React, { useState } from 'react';
import { Button } from '../../components';
import styles from './public.module.css';

function Public(props) {
    const [isProtectedVisible, setIsProtectedVisible] = useState(false);
    const [isPublicVisible, setIsPublicVisible] = useState(false);

    return (
        <section className={styles.Public}>
            <p>This is a public route</p>
            <img src="https://media1.tenor.com/images/605e13c05d2caa50e18483ba64accc8b/tenor.gif?itemid=11766571"/>
            <p>Everyone gather around</p>

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
        </section>
    );
}

export default Public;