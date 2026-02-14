"use client";

import React from 'react';
import styles from './WhyItMatters.module.scss';
import clsx from 'clsx';
import { Layout, Shield, Zap, TrendingUp } from 'lucide-react';
import Badge from '@/components/ui/Badge/Badge';

const WhySavique = () => {
    return (
        <section className={styles.savWhy}>
            <div className={styles.savHeader}>
                <Badge variant="primary">The Savique Standard</Badge>
                <h2>Why Top Earners Choose Savique</h2>
                <p>Built for those who value time, clarity, and control.</p>
            </div>

            <div className={styles.savWhyGrid}>
                {/* 1. Clarity */}
                <div className={styles.savWhyCard}>
                    <div className={styles.savIcon}><Layout size={32} /></div>
                    <h3>Radical Clarity</h3>
                    <p>No spreadsheets, no confusion. Just a clear, unified view of every dollar you own.</p>
                </div>
                {/* 2. Intelligence */}
                <div className={styles.savWhyCard}>
                    <div className={styles.savIcon}><Zap size={32} /></div>
                    <h3>Active Intelligence</h3>
                    <p>Savique doesn't just track; it suggests. Get proactive alerts to optimize cash flow and cut waste.</p>
                </div>
                {/* 3. Speed */}
                <div className={styles.savWhyCard}>
                    <div className={styles.savIcon}><TrendingUp size={32} /></div>
                    <h3>Velocity of Money</h3>
                    <p>Move money faster. Automate transfers and investments to keep your capital working 24/7.</p>
                </div>
                {/* 4. Privacy */}
                <div className={styles.savWhyCard}>
                    <div className={styles.savIcon}><Shield size={32} /></div>
                    <h3>Sovereign Privacy</h3>
                    <p>Your data is encrypted locally. We don't sell your history. You are the only owner of your financial data.</p>
                </div>
            </div>
        </section>
    );
};

export default WhySavique;
