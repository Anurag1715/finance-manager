"use client";

import React from 'react';
import styles from './pricing.module.scss';
import clsx from 'clsx';
import Badge from '@/components/ui/Badge/Badge';
import Button from '@/components/ui/Button/Button';
import { Check } from 'lucide-react';

export default function Pricing() {
    return (
        <section className={styles.savPricing}>
            <div className={styles.savHeader}>
                <Badge variant="primary">Simple Pricing</Badge>
                <h1>Plans for Everyone</h1>
                <p>Start tracking for free or upgrade for professional analytics with Savique Pro.</p>
            </div>

            <div className={styles.savPricingGrid}>
                {/* Free Plan */}
                <div className={styles.savPlanCard}>
                    <h3>Free Plan</h3>
                    <div className={styles.price}>$0 <span>/ mo</span></div>
                    <ul>
                        <li><Check size={18} /> Basic expense tracking</li>
                        <li><Check size={18} /> Monthly analytics</li>
                        <li><Check size={18} /> Budget settings</li>
                    </ul>
                    <Button variant="secondary" className={styles.savBtnSecondary} fullWidth>Get Started</Button>
                </div>

                {/* Pro Plan */}
                <div className={clsx(styles.savPlanCard, styles.featured)}>
                    <Badge variant="info" style={{ alignSelf: 'flex-start' }}>Most Popular</Badge>
                    <h3 style={{ marginTop: '0.5rem' }}>Savique Pro</h3>
                    <div className={styles.price}>$9 <span>/ mo</span></div>
                    <ul>
                        <li><Check size={18} /> Advanced AI insights</li>
                        <li><Check size={18} /> Net worth forecasting</li>
                        <li><Check size={18} /> Unlimited bank connections</li>
                        <li><Check size={18} /> Priority support</li>
                    </ul>
                    <Button variant="primary" className={styles.savBtnPrimary} fullWidth>Start Free Trial</Button>
                </div>

                {/* Enterprise Plan */}
                <div className={styles.savPlanCard}>
                    <h3>Enterprise</h3>
                    <div className={styles.price}>Custom</div>
                    <ul>
                        <li><Check size={18} /> Multi-user access</li>
                        <li><Check size={18} /> Family office tools</li>
                        <li><Check size={18} /> Tax optimization reports</li>
                        <li><Check size={18} /> Dedicated advisor</li>
                    </ul>
                    <Button variant="secondary" className={styles.savBtnSecondary} fullWidth>Contact Sales</Button>
                </div>
            </div>
        </section>
    );
}
