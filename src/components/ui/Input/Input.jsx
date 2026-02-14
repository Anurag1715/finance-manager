import React from 'react';
import styles from './Input.module.scss';
import { clsx } from 'clsx';

const Input = React.forwardRef(({
    label,
    error,
    type = 'text',
    className,
    ...props
}, ref) => {
    return (
        <div className={styles['civ_input-group']}>
            {label && (
                <label className={styles['civ_input-group__label']}>
                    {label}
                </label>
            )}
            <input
                ref={ref}
                type={type}
                className={clsx(
                    styles['civ_input-group__field'],
                    error && styles['civ_input-group__field--error'],
                    className
                )}
                {...props}
            />
            {error && (
                <span className={styles['civ_input-group__error-message']}>
                    {error.message}
                </span>
            )}
        </div>
    );
});

Input.displayName = 'Input';

export default Input;
