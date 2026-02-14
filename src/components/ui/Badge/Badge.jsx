import React from 'react';
import styles from './Badge.module.scss';
import clsx from 'clsx';

const Badge = ({ children, variant = 'primary', className, ...props }) => {

    const getVariantClass = () => {
        switch (variant) {
            case 'success': return styles.sav_BadgeSuccess;
            case 'warning': return styles.sav_BadgeWarning;
            case 'danger': return styles.sav_BadgeDanger;
            case 'info': return styles.sav_BadgeInfo;
            case 'gray': return styles.sav_BadgeGray;
            default: return styles.sav_BadgePrimary;
        }
    };

    return (
        <span
            className={clsx(styles.sav_Badge, getVariantClass(), className)}
            {...props}
        >
            {children}
        </span>
    );
};

export default Badge;
