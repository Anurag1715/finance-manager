import React from 'react';
import styles from './Card.module.scss';
import clsx from 'clsx';

const Card = ({ children, className, ...props }) => {
    return (
        <div className={clsx(styles.savCard, className)} {...props}>
            {children}
        </div>
    );
};

export default Card;
