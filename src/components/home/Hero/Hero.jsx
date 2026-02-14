"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Activity } from 'lucide-react';
import styles from './Hero.module.scss';

const Hero = () => {
    return (
        <section className={styles.sav_Hero}>
            {/* Spotlight Effect Top */}
            <div className={styles.sav_Spotlight} />

            <div className={styles.sav_HeroContent}>
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={styles.sav_HeroBadge}
                >
                    Designed for Growth
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Your Financial Future, <br />
                    <span>Reimagined by Savique.</span>
                </motion.h1>

                {/* Subhead */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Savique replaces chaos with clarity. Automated tracking, intelligent budgets, and predictive insights to help you build lasting wealth.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    className={styles.sav_HeroActions}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <Link href="/register" className={styles.sav_BtnPrimary}>
                        Start Free Trial
                    </Link>
                    <Link href="/features" className={styles.sav_BtnSecondary}>
                        See How It Works <ArrowRight size={18} />
                    </Link>
                </motion.div>
            </div>

            {/* Visual Core (Savique Dashboard) */}
            <motion.div
                className={styles.sav_HeroVisual}
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{ alignItems: 'center' }}
            >
                {/* Glass Dashboard Mockup */}
                <div style={{
                    width: '100%', maxWidth: '900px', height: '500px',
                    background: 'rgba(15, 23, 42, 0.6)',
                    borderRadius: '24px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    boxShadow: '0 40px 80px -20px rgba(0,0,0,0.6)',
                    backdropFilter: 'blur(20px)',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    {/* Header */}
                    <div style={{ height: '64px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', padding: '0 2rem', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }}></div>
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }}></div>
                        </div>
                        <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', fontWeight: '500', letterSpacing: '0.05em' }}>SAVIQUE INTELLIGENCE</div>
                    </div>

                    {/* Content */}
                    <div style={{ padding: '2rem', display: 'flex', gap: '2rem', flex: 1 }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', flex: '0 0 65%' }}>
                            <div>
                                <div style={{ color: '#94A3B8', fontSize: '0.9rem', fontWeight: '500', marginBottom: '0.5rem' }}>Total Net Worth</div>
                                <div style={{ color: '#F8FAFC', fontSize: '3rem', fontWeight: '700', lineHeight: 1 }}>$142,850<span style={{ color: '#38BDF8', fontSize: '1.5rem', verticalAlign: 'top', marginLeft: '0.5rem' }}>+12%</span></div>
                            </div>

                            {/* Chart */}
                            <div style={{ flex: 1, position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg, rgba(56, 189, 248, 0.1) 0%, transparent 100%)', borderRadius: '16px', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
                                <svg width="100%" height="100%" viewBox="0 0 500 200" preserveAspectRatio="none">
                                    <path d="M0,180 C80,180 150,120 250,130 S350,60 500,20" fill="none" stroke="#38BDF8" strokeWidth="4" />
                                    <circle cx="500" cy="20" r="6" fill="#38BDF8" stroke="white" strokeWidth="2" />
                                </svg>
                            </div>
                        </div>

                        {/* Sidebar Cards */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.25rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                    <span style={{ color: '#94A3B8', fontSize: '0.8rem' }}>Monthly Budget</span>
                                    <span style={{ color: '#F8FAFC', fontSize: '0.8rem' }}>82%</span>
                                </div>
                                <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px' }}>
                                    <div style={{ width: '82%', height: '100%', background: '#F59E0B', borderRadius: '3px' }}></div>
                                </div>
                            </div>

                            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.25rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ padding: '0.75rem', background: 'rgba(56, 189, 248, 0.1)', borderRadius: '12px', color: '#38BDF8' }}><Activity size={20} /></div>
                                <div>
                                    <div style={{ color: '#F8FAFC', fontSize: '0.9rem', fontWeight: '600' }}>Investment</div>
                                    <div style={{ color: '#94A3B8', fontSize: '0.8rem' }}>+$450.00 today</div>
                                </div>
                            </div>

                            <div style={{ background: '#38BDF8', padding: '1.25rem', borderRadius: '16px', marginTop: 'auto', color: '#0F172A' }}>
                                <div style={{ fontSize: '0.9rem', fontWeight: '700', marginBottom: '0.25rem' }}>Smart Savings</div>
                                <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>You saved $320 this month via auto-roundups.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
