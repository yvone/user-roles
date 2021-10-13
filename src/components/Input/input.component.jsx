import React from 'react';
import styles from './input.module.css';

function Input({
    id,
    label,
    value,
    onChange,
    disabled,
    required,
    actionComponent,
    ...inputProps
}) {
    return (
        <div className={styles.InputWrapper}>
            <label
                className={styles.Label}
                htmlFor={id}
            >
                {label}
            </label>
            <div style={{display: 'flex', justifyContent: 'flex-start'}}>
                <input
                    className={styles.Input}
                    id={id}
                    type="text"
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                    {...inputProps}
                />
                {actionComponent ? actionComponent : null}
            </div>
        </div>
    );
}

export default Input;