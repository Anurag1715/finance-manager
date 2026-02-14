"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './CTA.module.scss';
import clsx from 'clsx';
import { motion } from 'framer-motion';

const CTA = () => {
    return (
        <section className={styles.savCTA}>
            <div className={styles.savCTAContent}>
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    Build Your Wealth Engine.
                </motion.h2>
                <p>Join thousands of investors who trust Savique to automate, track, and scale their net worth.</p>
                <Link href="/register" className={styles.savBtnPrimary}>
                    Start Free Trial <ArrowRight size={20} />
                </Link>
            </div>
        </section>
    );
};

export default CTA;
