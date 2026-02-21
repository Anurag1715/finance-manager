"use client";

import React from 'react';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';
import styles from './Cards.module.scss';
import clsx from 'clsx';

const StatsCard = ({ title, value, icon: Icon, trend, trendType = 'neutral' }) => {
    return (
        <div className={styles.sav_StatsCard}>
            <div className={styles.sav_StatsHeader}>
                <div className={styles.sav_StatsIcon}>
                    <Icon size={24} />
                </div>
                {trend && (
                    <div className={clsx(styles.sav_StatsTrend, styles[trendType])}>
                        {trendType === 'up' && <ArrowUpRight size={16} />}
                        {trendType === 'down' && <ArrowDownRight size={16} />}
                        {trendType === 'neutral' && <Minus size={16} />}
                        <span>{trend}%</span>
                    </div>
                )}
            </div>
            <div className={styles.sav_StatsContent}>
                <div className={styles.sav_StatsTitle}>{title}</div>
                <div className={styles.sav_StatsValue}>{value}</div>
            </div>
        </div>
    );
};

export default StatsCard;
