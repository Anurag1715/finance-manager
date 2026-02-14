"use client";

import React from 'react';
import styles from './pricing.module.scss';
import clsx from 'clsx';
import { Check } from 'lucide-react';
import Button from '@/components/ui/Button/Button';
import Badge from '@/components/ui/Badge/Badge';

const PricingPage = () => {
    return (
        <section className={styles.sav_Pricing}>
            <div className={styles.sav_Header}>
                <Badge variant="primary">Pricing Plans</Badge>
                <h1>Simple, Transparent Pricing</h1>
                <p>Choose the plan that fits your wealth building goals. No hidden fees, ever.</p>
            </div>

            <div className={styles.sav_PricingGrid}>
                {/* 1. Free */}
                <div className={styles.sav_PlanCard}>
                    <h3>Starter</h3>
                    <div className={styles.sav_Price}>$0<span>/month</span></div>
                    <p>Perfect for tracking personal spending.</p>
                    <ul>
                        <li><Check size={18} /> Connect 3 Accounts</li>
                        <li><Check size={18} /> Basic Budgeting</li>
                        <li><Check size={18} /> Standard Support</li>
                    </ul>
                    <Button variant="secondary" fullWidth>Get Started</Button>
                </div>

                {/* 2. Pro */}
                <div className={clsx(styles.sav_PlanCard, styles.sav_Featured)}>
                    <h3>Investor</h3>
                    <div className={styles.sav_Price}>$12<span>/month</span></div>
                    <p>Everything you need for growth.</p>
                    <ul>
                        <li><Check size={18} /> Unlimited Accounts</li>
                        <li><Check size={18} /> AI Wealth Insights</li>
                        <li><Check size={18} /> Priority Support</li>
                        <li><Check size={18} /> Net Worth Tracking</li>
                    </ul>
                    <Button variant="primary" fullWidth>Go Pro</Button>
                </div>

                {/* 3. Wealth */}
                <div className={styles.sav_PlanCard}>
                    <h3>Ultra</h3>
                    <div className={styles.sav_Price}>$24<span>/month</span></div>
                    <p>For large portfolios & businesses.</p>
                    <ul>
                        <li><Check size={18} /> Custom Dashboards</li>
                        <li><Check size={18} /> API Access</li>
                        <li><Check size={18} /> Real Estate Tracking</li>
                        <li><Check size={18} /> 24/7 Dedicated Support</li>
                    </ul>
                    <Button variant="secondary" fullWidth>Contact Sales</Button>
                </div>
            </div>
        </section>
    );
};

export default PricingPage;
