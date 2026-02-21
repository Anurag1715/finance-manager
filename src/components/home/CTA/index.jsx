"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import styles from './CTA.module.scss';

const CTA = () => {
    return (
        <section className={styles.sav_CTA}>
            <motion.div
                className={styles.sav_CTAContainer}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {/* Background Decoration */}
                <div className={`${styles.sav_AbstractCircle} ${styles.circle1}`} />
                <div className={`${styles.sav_AbstractCircle} ${styles.circle2}`} />

                <div className={styles.sav_CTAContent}>
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.5rem 1rem',
                            background: 'rgba(56, 189, 248, 0.1)',
                            borderRadius: '99rem',
                            color: '#38BDF8',
                            fontSize: '0.875rem',
                            fontWeight: '600',
                            marginBottom: '1rem'
                        }}
                    >
                        <Sparkles size={16} />
                        Get Limited Early Access
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        Ready to Master <span>Your Financial Future?</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        Join thousands of smart investors who use Savique to track, grow, and protect their wealth. Start your 14-day free trial today.
                    </motion.p>

                    <motion.div
                        className={styles.sav_CTAActions}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <Link href="/register" className={styles.sav_BtnPrimary}>
                            Start Free Trial <ArrowRight size={20} />
                        </Link>
                        <Link href="/pricing" className={styles.sav_BtnSecondary}>
                            View Pricing
                        </Link>
                    </motion.div>

                    <motion.div
                        className={styles.sav_CTATrust}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                    >
                        <div className={styles.sav_TrustItem}>
                            <CheckCircle2 size={18} />
                            No credit card required
                        </div>
                        <div className={styles.sav_TrustItem}>
                            <ShieldCheck size={18} />
                            Bank-grade security
                        </div>
                        <div className={styles.sav_TrustItem}>
                            <CheckCircle2 size={18} />
                            Cancel anytime
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default CTA;
