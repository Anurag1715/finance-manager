"use client";

import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.scss';
import { LayoutGrid } from 'lucide-react';

const Footer = () => {
    return (
        <footer className={styles.sav_Footer}>
            <div className={styles.sav_FooterContainer}>
                <div className={styles.sav_FooterTop}>
                    <div className={styles.sav_FooterBrand}>
                        <h3><LayoutGrid size={24} color="#38BDF8" /> Savique</h3>
                        <p>Velocity for your wealth. Automate tracking, optimize growth, and reclaim your time.</p>
                    </div>

                    <div className={styles.sav_FooterColumn}>
                        <h4>Product</h4>
                        <ul>
                            <li><Link href="/features">Features</Link></li>
                            <li><Link href="/register">Get Started</Link></li>
                        </ul>
                    </div>

                    <div className={styles.sav_FooterColumn}>
                        <h4>Company</h4>
                        <ul>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.sav_FooterBottom}>
                    <p>&copy; {new Date().getFullYear()} Savique Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
