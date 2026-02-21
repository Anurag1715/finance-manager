"use client";

import React from 'react';
import { Search, Bell, User } from 'lucide-react';
import styles from './Header.module.scss';

const Header = ({ user, profile }) => {
    const displayName = profile?.name || user?.email?.split('@')[0] || 'User';
    const initials = displayName.substring(0, 2).toUpperCase();

    return (
        <header className={styles.sav_Header}>
            <div className={styles.sav_Search}>
                <Search size={18} />
                <input type="text" placeholder="Search transactions, budgets..." />
            </div>

            <div className={styles.sav_UserActions}>
                <button className={styles.sav_IconBtn}>
                    <Bell size={20} />
                    <div className={styles.sav_NotificationDot} />
                </button>

                <div className={styles.sav_UserProfile}>
                    <div className={styles.sav_Avatar}>
                        {profile?.avatar_url ? (
                            <img src={profile.avatar_url} alt={displayName} className={styles.sav_Avatar} />
                        ) : (
                            <span>{initials}</span>
                        )}
                    </div>
                    <div className={styles.sav_UserInfo}>
                        <span className={styles.sav_UserName}>{displayName}</span>
                        <span className={styles.sav_UserRole}>{profile?.role || 'User'}</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
