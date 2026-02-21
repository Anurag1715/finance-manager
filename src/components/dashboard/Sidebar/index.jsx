"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    Users,
    ArrowLeftRight,
    PieChart,
    BarChart3,
    Settings,
    ChevronRight,
    LogOut,
    UserCircle
} from 'lucide-react';
import styles from './Sidebar.module.scss';
import clsx from 'clsx';

const Sidebar = ({ onLogout }) => {
    const pathname = usePathname();

    const menuItems = [
        { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
        { icon: Users, label: 'Users', href: '/dashboard/users' },
        { icon: ArrowLeftRight, label: 'Transactions', href: '/dashboard/transactions', badge: '12' },
        { icon: PieChart, label: 'Budgets', href: '/dashboard/budgets' },
        { icon: BarChart3, label: 'Reports', href: '/dashboard/reports' },
        { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
    ];

    return (
        <aside className={styles.sav_Sidebar}>
            <div className={styles.sav_LogoSection}>
                <div className={styles.sav_Logo}>
                    <div className={styles.sav_LogoIcon}>
                        <ArrowLeftRight size={20} />
                    </div>
                    <span>Savique</span>
                </div>
            </div>

            <nav className={styles.sav_Nav}>
                {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={clsx(styles.sav_NavItem, isActive && styles.active)}
                        >
                            <item.icon size={20} />
                            <span>{item.label}</span>
                            {item.badge && <span className={styles.sav_Badge}>{item.badge}</span>}
                            {isActive && <div className={styles.sav_ActiveIndicator} />}
                        </Link>
                    );
                })}
            </nav>

            <div className={styles.sav_AdminSection}>
                <div className={styles.sav_SectionLabel}>ADMIN</div>
                <Link href="/dashboard/admin" className={styles.sav_NavItem}>
                    <UserCircle size={20} />
                    <span>Admin Panel</span>
                </Link>
            </div>

            <div className={styles.sav_SidebarFooter}>
                <button onClick={onLogout} className={styles.sav_LogoutBtn}>
                    <LogOut size={20} />
                    <span>Logout</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
