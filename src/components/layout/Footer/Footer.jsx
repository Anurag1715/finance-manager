"use client";

import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.scss';
import { LayoutGrid } from 'lucide-react';

const Footer = () => {
    return (
        <footer className={styles.savFooter}>
            <div className={styles.savFooterContainer}>
                <div className={styles.savFooterTop}>
                    <div className={styles.savFooterBrand}>
                        <h3><LayoutGrid size={24} color="#38BDF8" /> Savique</h3>
                        <p>Velocity for your wealth. Automate tracking, optimize growth, and reclaim your time.</p>
                    </div>

                    <div className={styles.savFooterColumn}>
                        <h4>Product</h4>
                        <ul>
                            <li><Link href="/features">Features</Link></li>
                            <li><Link href="/pricing">Pricing</Link></li>
                            <li><Link href="/register">Get Started</Link></li>
                        </ul>
                    </div>

                    <div className={styles.savFooterColumn}>
                        <h4>Company</h4>
                        <ul>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/careers">Careers</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className={styles.savFooterColumn}>
                        <h4>Support</h4>
                        <ul>
                            <li><Link href="/help">Help Center</Link></li>
                            <li><Link href="/privacy">Privacy Policy</Link></li>
                            <li><Link href="/terms">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.savFooterBottom}>
                    <p>&copy; {new Date().getFullYear()} Savique Inc. All rights reserved.</p>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <Link href="#">Twitter</Link>
                        <Link href="#">LinkedIn</Link>
                        <Link href="#">Instagram</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
