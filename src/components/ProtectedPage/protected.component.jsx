import React from 'react';
import styles from './protected.module.css';

function Protected(props) {
    return (
        <section className={styles.Protected}>
            <p>This is a super protected route</p>
            <img
                alt="a funny gif of a man singing"
                src="https://media1.tenor.com/images/4ef46ec3183c923fb14e0c5d0e7564dc/tenor.gif?itemid=16512354"
            />
            <p>There are secrets</p>
        </section>
    );
}

export default Protected;