import React from 'react';
import styles from './Badge.module.scss';
import { clsx } from 'clsx';

const Badge = ({ children, variant = 'gray', className }) => {
    return (
        <span className={clsx(styles.civ_badge, styles[`civ_badge--${variant}`], className)}>
            {children}
        </span>
    );
};

export default Badge;
