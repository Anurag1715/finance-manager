import React from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';

const Button = ({ variant = 'primary', size = 'md', fullWidth = false, className, children, ...props }) => {

    const getVariantClass = () => {
        switch (variant) {
            case 'secondary': return styles.savBtnSecondary;
            case 'ghost': return styles.savBtnGhost;
            case 'outline': return styles.savBtnOutline;
            default: return styles.savBtnPrimary;
        }
    };

    const getSizeClass = () => {
        switch (size) {
            case 'lg': return styles.savBtnLg;
            case 'sm': return styles.savBtnSm;
            default: return '';
        }
    };

    return (
        <button
            className={clsx(
                styles.savButton,
                getVariantClass(),
                getSizeClass(),
                fullWidth && styles.savBtnFull,
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
