"use client";

import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.scss';
import clsx from 'clsx';
import { LayoutGrid } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();

    const isActive = (path) => pathname === path ? styles.sav_Active : '';

    return (
        <nav className={styles.sav_Navbar}>
            <div className={styles.sav_NavbarContainer}>
                {/* 1. Logo Left */}
                <Link href="/" className={styles.sav_NavbarLogo}>
                    <LayoutGrid className={styles.sav_LogoIcon} size={24} color="#38BDF8" />
                    <span>Savique</span>
                </Link>

                {/* 2. Links Center */}
                <div className={styles.sav_NavbarLinks}>
                    <Link href="/" className={clsx(styles.sav_NavbarLink, isActive('/'))}>Home</Link>
                    <Link href="/features" className={clsx(styles.sav_NavbarLink, isActive('/features'))}>Features</Link>
                    <Link href="/how-it-works" className={clsx(styles.sav_NavbarLink, isActive('/how-it-works'))}>How It Works</Link>
                </div>

                {/* 3. Actions Right */}
                <div className={styles.sav_NavbarActions}>
                    <Link href="/login" className={styles.sav_NavbarLink}>
                        Log In
                    </Link>
                    <Link href="/register" className={styles.sav_BtnSignup}>
                        Get Started
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
