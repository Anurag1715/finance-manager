import React from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';

const Button = ({ variant = 'primary', size = 'md', fullWidth = false, className, children, ...props }) => {

    const getVariantClass = () => {
        switch (variant) {
            case 'secondary': return styles.sav_BtnSecondary;
            case 'ghost': return styles.sav_BtnGhost;
            case 'outline': return styles.sav_BtnOutline;
            default: return styles.sav_BtnPrimary;
        }
    };

    const getSizeClass = () => {
        switch (size) {
            case 'lg': return styles.sav_BtnLg;
            case 'sm': return styles.sav_BtnSm;
            default: return '';
        }
    };

    return (
        <button
            className={clsx(
                styles.sav_Button,
                getVariantClass(),
                getSizeClass(),
                fullWidth && styles.sav_BtnFull,
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
