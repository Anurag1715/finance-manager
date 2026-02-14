import React from 'react';
import styles from './Button.module.scss';
import { clsx } from 'clsx';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    className,
    ...props
}) => {
    const buttonClasses = clsx(
        styles.civ_button,
        styles[`civ_button--${variant}`],
        size !== 'md' && styles[`civ_button--${size}`],
        fullWidth && styles['civ_button--fullWidth'],
        className
    );

    return (
        <button className={buttonClasses} {...props}>
            {children}
        </button>
    );
};

export default Button;
