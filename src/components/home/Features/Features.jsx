"use client";

import React from 'react';
import styles from './Features.module.scss';
import clsx from 'clsx';
import { LayoutGrid, Zap, Wallet, ShieldCheck, LineChart } from 'lucide-react';

const Features = () => {
    return (
        <section className={styles.savFeatures}>
            <div className={styles.savFeaturesHeader}>
                <div className={styles.savBadge}>Savique Intelligence</div>
                <h2>The <span>Wealth Engine</span></h2>
                <p>Designed to automate the tedious parts of finance so you can focus on growth.</p>
            </div>

            <div className={styles.savFeaturesGrid}>
                {/* 1. Unified Assets */}
                <div className={styles.savFeatureCard}>
                    <div className={styles.iconBox}><LayoutGrid size={28} /></div>
                    <h3>Unified Assets</h3>
                    <p>Connect banks, investments, and crypto. See your entire net worth in one beautiful dashboard.</p>
                </div>
                {/* 2. Automated Budget */}
                <div className={styles.savFeatureCard}>
                    <div className={styles.iconBox}><Wallet size={28} /></div>
                    <h3>Zero-Touch Budgeting</h3>
                    <p>Savique categorizes transactions instantly and sets dynamic budgets based on your habits.</p>
                </div>
                {/* 3. Predictive Insights */}
                <div className={styles.savFeatureCard}>
                    <div className={styles.iconBox}><Zap size={28} /></div>
                    <h3>Predictive Insights</h3>
                    <p>AI that forecasts your cash flow and alerts you before you overspend or miss a bill.</p>
                </div>
                {/* 4. Investment Growth */}
                <div className={styles.savFeatureCard}>
                    <div className={styles.iconBox}><LineChart size={28} /></div>
                    <h3>Investment Tracking</h3>
                    <p>Monitor portfolio performance across brokerages and visualize your path to financial independence.</p>
                </div>
                {/* 5. Bank-Grade Security */}
                <div className={styles.savFeatureCard}>
                    <div className={styles.iconBox}><ShieldCheck size={28} /></div>
                    <h3>Fortress Security</h3>
                    <p>AES-256 encryption and read-only access. Your data is yours alone. We never sell it.</p>
                </div>
            </div>
        </section>
    );
};

export default Features;
