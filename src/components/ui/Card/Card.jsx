import React from 'react';
import styles from './Card.module.scss';
import { clsx } from 'clsx';

const Card = ({ children, className, hover = false }) => {
    return (
        <div className={clsx(styles.civ_card, hover && styles['civ_card--hover'], className)}>
            {children}
        </div>
    );
};

Card.Header = ({ children, className }) => (
    <div className={clsx(styles.civ_card__header, className)}>{children}</div>
);

Card.Body = ({ children, className }) => (
    <div className={clsx(styles.civ_card__body, className)}>{children}</div>
);

Card.Footer = ({ children, className }) => (
    <div className={clsx(styles.civ_card__footer, className)}>{children}</div>
);

Card.displayName = 'Card';
Card.Header.displayName = 'Card.Header';
Card.Body.displayName = 'Card.Body';
Card.Footer.displayName = 'Card.Footer';

export default Card;
