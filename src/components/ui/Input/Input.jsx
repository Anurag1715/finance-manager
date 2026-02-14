import React, { forwardRef } from 'react';
import styles from './Input.module.scss';
import clsx from 'clsx';
import { AlertCircle } from 'lucide-react';

const Input = forwardRef(({ label, error, icon: Icon, className, ...props }, ref) => {
    return (
        <div className={clsx(styles.savInputGroup, className)}>
            {label && <label>{label}</label>}

            <div className={clsx(styles.savInputWrapper, Icon && styles.hasIcon)}>
                {Icon && <Icon size={18} className={styles.savInputIcon} />}

                <input
                    ref={ref}
                    className={clsx(error && styles.savInputError)}
                    {...props}
                />
            </div>

            {error && (
                <span className={styles.savErrorMessage}>
                    <AlertCircle size={12} /> {error}
                </span>
            )}
        </div>
    );
});

Input.displayName = "Input";
export default Input;
