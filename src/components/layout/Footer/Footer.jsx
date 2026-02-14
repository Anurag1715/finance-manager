import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.scss';
import { MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className={styles.civ_footer}>
            <div className={styles.civ_footer__container}>
                <div className={styles.civ_footer__info}>
                    <div className={styles.civ_footer__logo}>
                        <MapPin size={32} />
                        <span>Civic<span>Track</span></span>
                    </div>
                    <p className={styles.civ_footer__description}>
                        Empowering citizens to report issues and municipalities to solve them efficiently.
                        A cleaner, safer, and better community for everyone.
                    </p>
                </div>

                <div>
                    <h4 className={styles.civ_footer__col_title}>Platform</h4>
                    <div className={styles.civ_footer__links}>
                        <Link href="/" className={styles.civ_footer__link}>Home</Link>
                        <Link href="/how-it-works" className={styles.civ_footer__link}>How It Works</Link>
                        <Link href="/register" className={styles.civ_footer__link}>Report Issue</Link>
                    </div>
                </div>

                <div>
                    <h4 className={styles.civ_footer__col_title}>Company</h4>
                    <div className={styles.civ_footer__links}>
                        <Link href="/about" className={styles.civ_footer__link}>About Us</Link>
                        <Link href="/contact" className={styles.civ_footer__link}>Contact</Link>
                        <Link href="/privacy" className={styles.civ_footer__link}>Privacy Policy</Link>
                    </div>
                </div>

                <div>
                    <h4 className={styles.civ_footer__col_title}>Contact</h4>
                    <div className={styles.civ_footer__links}>
                        <span className={styles.civ_footer__link}>support@civictrack.gov</span>
                        <span className={styles.civ_footer__link}>+1 (555) 000-0000</span>
                    </div>
                </div>
            </div>

            <div className={styles.civ_footer__bottom}>
                <p>&copy; {new Date().getFullYear()} CivicTrack. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
