"use client";

import React from 'react';
import styles from './about.module.scss';
import clsx from 'clsx';
import Badge from '@/components/ui/Badge';

const AboutPage = () => {
    return (
        <section className={styles.sav_About}>
            <div className={styles.sav_Header}>
                <Badge variant="primary">Our Story</Badge>
                <h1>Redefining Wealth Intelligence</h1>
                <p>Savique was built on a simple premise: your financial data should work for you, not against you.</p>
            </div>

            <div className={styles.sav_Mission}>
                <div className={styles.sav_Image}>
                    {/* Placeholder for an image or visual */}
                </div>
                <div className={styles.sav_Content}>
                    <h2>Our Mission</h2>
                    <p>We exist to empower people with radical clarity over their financial lives. By combining secure asset tracking with intelligent automation, we help you make informed decisions that compound over time.</p>
                    <p>Our philosophy is rooted in sovereign privacy. We believe you should be the sole owner of your financial data, which is why we implement bank-grade encryption at every level.</p>
                </div>
            </div>

            <div className={styles.sav_Values}>
                <div className={styles.sav_ValueCard}>
                    <h3>Transparency</h3>
                    <p>We believe in open systems and clear, honest communication about how your data is handled.</p>
                </div>
                <div className={styles.sav_ValueCard}>
                    <h3>Security</h3>
                    <p>Your financial fortress is our top priority. We use industry-leading encryption and local-first principles.</p>
                </div>
                <div className={styles.sav_ValueCard}>
                    <h3>Simplicity</h3>
                    <p>Complexity is the enemy of action. We distill complex financial data into actionable insights.</p>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;
