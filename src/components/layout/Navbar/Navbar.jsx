"use client";

import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.scss';
import Button from '../../ui/Button/Button';
import { MapPin } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className={styles.civ_navbar}>
            <div className={styles.civ_navbar__container}>
                <Link href="/" className={styles.civ_navbar__logo}>
                    <MapPin size={32} />
                    <span>Civic<span>Track</span></span>
                </Link>

                <div className={styles.civ_navbar__links}>
                    <Link href="/about" className={styles.civ_navbar__link}>About</Link>
                    <Link href="/how-it-works" className={styles.civ_navbar__link}>How It Works</Link>
                    <Link href="/contact" className={styles.civ_navbar__link}>Contact</Link>
                </div>

                <div className={styles.civ_navbar__actions}>
                    <Link href="/login">
                        <Button variant="ghost">Login</Button>
                    </Link>
                    <Link href="/register">
                        <Button>Get Started</Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
