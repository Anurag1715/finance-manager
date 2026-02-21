"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    ArrowLeftRight,
    PieChart,
    BarChart3,
    Settings,
    LogOut,
    UserCircle,
    Wallet,
    Target,
    Users,
    Bell,
    Shield
} from 'lucide-react';
import styles from './Sidebar.module.scss';
import clsx from 'clsx';

const Sidebar = ({ role = 'user', onLogout }) => {
    const pathname = usePathname();

    const userMenuItems = [
        { icon: LayoutDashboard, label: 'Overview', href: '/dashboard/user' },
        { icon: ArrowLeftRight, label: 'Transactions', href: '/dashboard/user/transactions' },
        { icon: Wallet, label: 'Budgets', href: '/dashboard/user/budgets' },
        { icon: BarChart3, label: 'Analytics', href: '/dashboard/user/analytics' },
        { icon: Target, label: 'Savings Goals', href: '/dashboard/user/savings-goals' },
        { icon: PieChart, label: 'Reports', href: '/dashboard/user/reports' },
        { icon: UserCircle, label: 'Profile', href: '/dashboard/user/profile' },
        { icon: Settings, label: 'Settings', href: '/dashboard/user/settings' },
    ];

    const adminMenuItems = [
        { icon: LayoutDashboard, label: 'Overview', href: '/dashboard/admin' },
        { icon: Users, label: 'User Management', href: '/dashboard/admin/users' },
        { icon: ArrowLeftRight, label: 'Transactions', href: '/dashboard/admin/transactions' },
        { icon: BarChart3, label: 'Analytics & Reports', href: '/dashboard/admin/reports' },
        { icon: Shield, label: 'System Settings', href: '/dashboard/admin/settings' },
        { icon: Bell, label: 'Notifications', href: '/dashboard/admin/notifications' },
        { icon: UserCircle, label: 'Admin Profile', href: '/dashboard/admin/profile' },
    ];

    const menuItems = role === 'admin' ? adminMenuItems : userMenuItems;

    return (
        <aside className={styles.sav_Sidebar}>
            <div className={styles.sav_LogoSection}>
                <div className={styles.sav_Logo}>
                    <div className={styles.sav_LogoIcon}>
                        <Wallet size={24} />
                    </div>
                    <span>Savique</span>
                </div>
            </div>

            <nav className={styles.sav_Nav}>
                <div className={styles.sav_SectionLabel}>Menu</div>
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
                            {isActive && <div className={styles.sav_ActiveIndicator} />}
                        </Link>
                    );
                })}
            </nav>

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
