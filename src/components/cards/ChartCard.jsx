"use client";

import React from 'react';
import styles from './Cards.module.scss';
import { MoreVertical } from 'lucide-react';

const ChartCard = ({ title, children, footer }) => {
    return (
        <div className={styles.sav_ChartCard}>
            <div className={styles.sav_ChartHeader}>
                <h3 className={styles.sav_ChartTitle}>{title}</h3>
                <button className={styles.sav_MoreBtn}>
                    <MoreVertical size={18} />
                </button>
            </div>
            <div className={styles.sav_ChartBody}>
                {children}
            </div>
            {footer && (
                <div className={styles.sav_ChartFooter}>
                    {footer}
                </div>
            )}
        </div>
    );
};

export default ChartCard;
