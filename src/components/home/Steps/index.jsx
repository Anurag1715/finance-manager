"use client";

import React from 'react';
import styles from './Steps.module.scss';
import clsx from 'clsx';
import { motion } from 'framer-motion';

const Steps = () => {
    return (
        <section className={styles.sav_Steps}>
            <div className={styles.sav_Header}>
                <h2>Your Financial Autopilot</h2>
                <p>Set it up once. Watch Savique optimize your wealth automatically.</p>
            </div>

            <div className={styles.sav_StepsGrid}>
                {/* 1. Connect */}
                <motion.div
                    className={styles.sav_StepCard}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <div className={styles.sav_StepNumber}>1</div>
                    <h3>Connect Assets</h3>
                    <p>Securely link your bank accounts, credit cards, and investment portfolios in seconds.</p>
                </motion.div>
                {/* 2. Automate */}
                <motion.div
                    className={styles.sav_StepCard}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <div className={styles.sav_StepNumber}>2</div>
                    <h3>Automate Flows</h3>
                    <p>Set rules to automatically categorize spending and move savings to high-yield accounts.</p>
                </motion.div>
                {/* 3. Visualize */}
                <motion.div
                    className={styles.sav_StepCard}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <div className={styles.sav_StepNumber}>3</div>
                    <h3>Visualize Growth</h3>
                    <p>Track your real-time net worth and cash flow through intuitive, beautiful charts.</p>
                </motion.div>
                {/* 4. Scale */}
                <motion.div
                    className={styles.sav_StepCard}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <div className={styles.sav_StepNumber}>4</div>
                    <h3>Scale Wealth</h3>
                    <p>Use AI insights to cut waste and reinvest savings for compound growth.</p>
                </motion.div>
            </div>
        </section>
    );
};

export default Steps;
