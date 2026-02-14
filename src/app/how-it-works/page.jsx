"use client";

import React from 'react';
import styles from './how-it-works.module.scss';
import Badge from '@/components/ui/Badge/Badge';
import { motion } from 'framer-motion';

export default function HowItWorks() {
    const steps = [
        {
            id: 1,
            title: "Connect Your Ecosystem",
            text: "Savique integrates with 12,000+ financial institutions. Add checking, savings, investment, and crypto accounts in seconds via secure, read-only APIs.",
        },
        {
            id: 2,
            title: "Identify & Categorize",
            text: "Our AI engine scans 12 months of history instantly. It tags every transaction, identifies recurring subscriptions, and flags anomalies that drain your wealth.",
        },
        {
            id: 3,
            title: "Optimized Allocation",
            text: "Set your 'Wealth Rules'. Savique automatically suggests how much to save, invest, or spend based on your real-time cash flow and goals.",
        },
        {
            id: 4,
            title: "Compound Growth",
            text: "Watch your net worth curve accelerate. Get monthly reports on your velocity of money and actionable steps to increase your savings rate.",
        }
    ];

    return (
        <section className={styles.savHow}>
            <motion.div
                className={styles.savHowHero}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Badge variant="primary">The Architecture</Badge>
                <h1>How Savique Works</h1>
                <p>We've engineered a system that turns raw financial data into actionable wealth strategies.</p>
            </motion.div>

            <div className={styles.savTimeline}>
                {steps.map((step, index) => (
                    <motion.div
                        className={styles.savTimeNode}
                        key={step.id}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                        <div className={styles.savNodeMarker}>{step.id}</div>

                        <div className={styles.savNodeContent}>
                            <h3>{step.title}</h3>
                            <p>{step.text}</p>
                        </div>

                        {/* Visual Placeholder (could be SVGs or screenshots) */}
                        <div className={styles.savNodeVisual}>
                            <div style={{
                                width: '100%', height: '2px', background: 'rgba(255,255,255,0.1)', position: 'relative'
                            }}>
                                <div style={{
                                    position: 'absolute', top: '-6px', left: '0', width: '12px', height: '12px', background: '#38BDF8', borderRadius: '50%', boxShadow: '0 0 10px #38BDF8'
                                }} />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
