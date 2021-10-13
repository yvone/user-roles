import React from 'react';
import styles from './button.module.css';

function Button({
    children,
    type="button",
    variant,
    className,
    ...buttonProps
}) {
    function btnClassNames() {
        switch(variant) {
            case 'secondary': {
                return styles.Button___secondary;
                break;
            }
            case 'danger': {
                return styles.Button___danger;
                break;
            }
            case 'warning': {
                return styles.Button___warning;
                break;
            }
            default: {
                return '';
            }
        }
    }

    return (
        <button
            className={`
                ${styles.Button}
                ${btnClassNames()}
                ${className}
            `}
            {...buttonProps}
        >
            {children}
        </button>
    )
}

export default Button;