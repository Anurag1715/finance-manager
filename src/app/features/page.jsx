"use client";

import React from 'react';
import styles from './features.module.scss';
import clsx from 'clsx';
import Badge from '@/components/ui/Badge/Badge';
import { CreditCard, Wallet, BarChart2, PieChart, CheckCircle } from 'lucide-react';

export default function FeaturesPage() {
    return (
        <section className={styles.civFeaturesPage}>
            <div className={styles.civHeader}>
                <Badge variant="info">Powerful Tools</Badge>
                <h1>Complete Financial Control</h1>
                <p>Everything you need to track, manage, and grow your wealth in one intuitive platform.</p>
            </div>

            {/* 1. Expense Management */}
            <div className={styles.civFeatureSection}>
                <div className={styles.civVisual}>
                    <div className={styles.placeholder}>
                        <CreditCard size={48} />
                    </div>
                </div>
                <div className={styles.civContent}>
                    <h2>Expense Management</h2>
                    <p>Track daily, weekly, and monthly expenses across custom categories with ease.</p>
                    <ul>
                        <li><CheckCircle size={20} /> Recurring expense tracking</li>
                        <li><CheckCircle size={20} /> Quick-add functionality</li>
                        <li><CheckCircle size={20} /> Category-level insights</li>
                        <li><CheckCircle size={20} /> Smart filtering</li>
                    </ul>
                </div>
            </div>

            {/* 2. Budget Planning (Reverse) */}
            <div className={clsx(styles.civFeatureSection, styles.reverse)}>
                <div className={styles.civVisual}>
                    <div className={styles.placeholder}>
                        <Wallet size={48} />
                    </div>
                </div>
                <div className={styles.civContent}>
                    <h2>Budget Planning</h2>
                    <p>Set strict category budgets and monitor your spending progress visually every month.</p>
                    <ul>
                        <li><CheckCircle size={20} /> Monthly category limits</li>
                        <li><CheckCircle size={20} /> Real-time spending alerts</li>
                        <li><CheckCircle size={20} /> Overspending notifications</li>
                        <li><CheckCircle size={20} /> Budget vs Actual comparisons</li>
                    </ul>
                </div>
            </div>

            {/* 3. Financial Analytics */}
            <div className={styles.civFeatureSection}>
                <div className={styles.civVisual}>
                    <div className={styles.placeholder}>
                        <BarChart2 size={48} />
                    </div>
                </div>
                <div className={styles.civContent}>
                    <h2>Financial Analytics</h2>
                    <p>Gain deep visibility into your financial health with professional-grade analytics.</p>
                    <ul>
                        <li><CheckCircle size={20} /> Spending trend analysis</li>
                        <li><CheckCircle size={20} /> Income growth tracking</li>
                        <li><CheckCircle size={20} /> Monthly category comparisons</li>
                        <li><CheckCircle size={20} /> Savings rate calculation</li>
                    </ul>
                </div>
            </div>

            {/* 4. Savings Goals (Reverse) */}
            <div className={clsx(styles.civFeatureSection, styles.reverse)}>
                <div className={styles.civVisual}>
                    <div className={styles.placeholder}>
                        <PieChart size={48} />
                    </div>
                </div>
                <div className={styles.civContent}>
                    <h2>Savings Goals</h2>
                    <p>Set ambitious savings targets and track your milestone progress automatically.</p>
                    <ul>
                        <li><CheckCircle size={20} /> Custom savings targets</li>
                        <li><CheckCircle size={20} /> Visual progress bars</li>
                        <li><CheckCircle size={20} /> Milestone notifications</li>
                        <li><CheckCircle size={20} /> Goal projection timeline</li>
                    </ul>
                </div>
            </div>

        </section>
    );
}
