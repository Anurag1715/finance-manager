import React from 'react';
import styles from './Badge.module.scss';
import clsx from 'clsx';

const Badge = ({ children, variant = 'primary', className, ...props }) => {

    const getVariantClass = () => {
        switch (variant) {
            case 'success': return styles.savBadgeSuccess;
            case 'warning': return styles.savBadgeWarning;
            case 'danger': return styles.savBadgeDanger;
            case 'info': return styles.savBadgeInfo;
            case 'gray': return styles.savBadgeGray;
            default: return styles.savBadgePrimary;
        }
    };

    return (
        <span
            className={clsx(styles.savBadge, getVariantClass(), className)}
            {...props}
        >
            {children}
        </span>
    );
};

export default Badge;
