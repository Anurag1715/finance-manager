"use client";

import React from 'react';
import styles from './features.module.scss';
import clsx from 'clsx';
import { Shield, Zap, Layout, Globe, TrendingUp, PieChart } from 'lucide-react';
import Badge from '@/components/ui/Badge';

const FeaturesPage = () => {
    return (
        <main className={styles.sav_FeaturesPage}>
            <div className={styles.sav_Header}>
                <Badge variant="primary">Deep Dive</Badge>
                <h1>Powerful Features for Wealth Management</h1>
                <p>Everything you need to automate your finances and accelerate your path to financial freedom.</p>
            </div>

            {/* Feature 1 */}
            <section className={styles.sav_FeatureSection}>
                <div className={styles.sav_Visual}>
                    <div style={{ color: '#38BDF8' }}><PieChart size={120} strokeWidth={1} /></div>
                </div>
                <div className={styles.sav_Content}>
                    <h2>Unified Wealth Dashboard</h2>
                    <p>Stop jumping between banking apps and brokerages. Savique provides a clean, unified view of all your assets in real-time.</p>
                    <ul>
                        <li><Shield size={18} /> Bank-level security</li>
                        <li><Zap size={18} /> Real-time sync</li>
                        <li><Globe size={18} /> Global asset support</li>
                    </ul>
                </div>
            </section>

            {/* Feature 2 */}
            <section className={clsx(styles.sav_FeatureSection, styles.reverse)}>
                <div className={styles.sav_Visual}>
                    <div style={{ color: '#38BDF8' }}><TrendingUp size={120} strokeWidth={1} /></div>
                </div>
                <div className={styles.sav_Content}>
                    <h2>Automated Cash Flow</h2>
                    <p>Let AI handle the tedious parts. Automate your budgeting, categorize spending, and get alerts for potential optimizations.</p>
                    <ul>
                        <li><Layout size={18} /> Simple budget rules</li>
                        <li><Zap size={18} /> Auto-categorization</li>
                        <li><TrendingUp size={18} /> Savings optimization</li>
                    </ul>
                </div>
            </section>

            {/* More can be added here */}
        </main>
    );
};

export default FeaturesPage;
