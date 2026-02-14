"use client";

import React from 'react';
import styles from './about.module.scss';
import clsx from 'clsx';
import Badge from '@/components/ui/Badge/Badge';

export default function About() {
    return (
        <section className={styles.savAbout}>
            <div className={styles.savHeader}>
                <Badge variant="primary">Our Mission</Badge>
                <h1>We Automate Your Wealth</h1>
                <p>We believe financial freedom shouldn't require a finance degree or hours of manual tracking. Savique builds the autopilot for your money.</p>
            </div>

            <div className={styles.savMission}>
                <div className={styles.savContent}>
                    <h2>Obsessed with Frictionless Finance</h2>
                    <p>Founded by engineers and investors tired of broken spreadsheets, Savique was built to solve one problem: the disconnect between earning money and growing it.</p>
                    <p>Our platform connects every aspect of your financial life into a single, intelligent system that works for you, 24/7.</p>
                </div>
                <div className={styles.savImage}></div>
            </div>

            <div className={styles.savValues}>
                <div className={styles.savValueCard}>
                    <h3>Transparency</h3>
                    <p>We believe in total clarity. No hidden fees, no dark patterns, and complete visibility into where your money goes.</p>
                </div>
                <div className={styles.savValueCard}>
                    <h3>Automation</h3>
                    <p>If a machine can do it, you shouldn't have to. We automate the boring stuff so you can focus on high-leverage decisions.</p>
                </div>
                <div className={styles.savValueCard}>
                    <h3>Security First</h3>
                    <p>Your data is your most valuable asset. We protect it with bank-grade encryption and never sell it to advertisers.</p>
                </div>
            </div>
        </section>
    );
}
