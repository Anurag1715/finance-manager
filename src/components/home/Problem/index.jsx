"use client";

import React from 'react';
import styles from './Problem.module.scss';
import clsx from 'clsx';
import { motion } from 'framer-motion';

const Problem = () => {
    return (
        <section className={styles.sav_Problem}>
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                The Silent Wealth Killer: <br />
                <span>Financial Friction</span>
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
            >
                Spreadsheets break. Apps disconnect. Manual tracking fails.
                <br />
                Without a unified system, your wealth stagnates in hidden subscriptions, unoptimized savings, and blind spending.
            </motion.p>
            <motion.div
                className={styles.sav_SolHighlight}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
            >
                Savique eliminates the friction.
            </motion.div>
        </section>
    );
};

export default Problem;
