"use client";

import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.scss';
import clsx from 'clsx';
import { LayoutGrid } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();

    const isActive = (path) => pathname === path ? styles.savActive : '';

    return (
        <nav className={styles.savNavbar}>
            <div className={styles.savNavbarContainer}>
                {/* 1. Logo Left */}
                <Link href="/" className={styles.savNavbarLogo}>
                    <LayoutGrid className={styles.savLogoIcon} size={24} color="#38BDF8" />
                    <span>Savique</span>
                </Link>

                {/* 2. Links Center */}
                <div className={styles.savNavbarLinks}>
                    <Link href="/" className={clsx(styles.savNavbarLink, isActive('/'))}>Home</Link>
                    <Link href="/features" className={clsx(styles.savNavbarLink, isActive('/features'))}>Features</Link>
                    <Link href="/how-it-works" className={clsx(styles.savNavbarLink, isActive('/how-it-works'))}>How It Works</Link>
                    <Link href="/pricing" className={clsx(styles.savNavbarLink, isActive('/pricing'))}>Pricing</Link>
                </div>

                {/* 3. Actions Right */}
                <div className={styles.savNavbarActions}>
                    <Link href="/login" className={styles.savNavbarLink}>
                        Log In
                    </Link>
                    <Link href="/register" className={styles.savBtnSignup}>
                        Get Started
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
