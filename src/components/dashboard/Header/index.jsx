"use client";

import React from 'react';
import { Search, Bell, ChevronDown, User } from 'lucide-react';
import styles from './Header.module.scss';

const Header = ({ user }) => {
    return (
        <header className={styles.sav_DashboardHeader}>
            <div className={styles.sav_HeaderLeft}>
                <div className={styles.sav_PanelBadge}>
                    <span>Admin Panel</span>
                </div>
            </div>

            <div className={styles.sav_HeaderRight}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginRight: '2rem' }}>
                    <div className={styles.sav_Welcome}>
                        Welcome, <span>{user?.email?.split('@')[0] || 'John Doe'}</span>
                    </div>
                    <button className={styles.sav_IconButton}>
                        <Search size={20} />
                    </button>
                    <button className={styles.sav_IconButton}>
                        <Bell size={20} />
                        <div className={styles.sav_NoticeDot} />
                    </button>
                </div>

                <div className={styles.sav_UserProfile}>
                    <div className={styles.sav_Avatar}>
                        <User size={20} />
                    </div>
                    <div className={styles.sav_UserInfo}>
                        <span className={styles.sav_UserName}>Admin</span>
                        <ChevronDown size={14} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
