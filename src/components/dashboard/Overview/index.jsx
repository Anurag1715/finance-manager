"use client";

import React from 'react';
import { TrendingUp, TrendingDown, Wallet, ArrowUpRight, Clock, User, MoreVertical } from 'lucide-react';
import styles from './Overview.module.scss';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const Overview = () => {
    const stats = [
        { label: 'Total Income', value: '$5,800', change: '+12%', icon: TrendingUp, color: '#38bdf8' },
        { label: 'Total Expenses', value: '$3,450', change: '+5%', icon: TrendingDown, color: '#f59e0b' },
        { label: 'Current Balance', value: '$7,100', change: '+8%', icon: Wallet, color: '#2dd4bf' },
    ];

    const transactions = [
        { name: 'Grocery Store', date: '25-06-2023', type: 'Food', amount: '-$120.00', status: 'Completed' },
        { name: 'Electric Bill', date: '22-06-2023', type: 'Utility', amount: '-$80.00', status: 'Pending' },
        { name: 'Netflix Subscription', date: '20-06-2023', type: 'Entertain', amount: '-$20.00', status: 'Completed' },
        { name: 'Salary Deposit', date: '15-06-2023', type: 'Income', amount: '+$4,500.00', status: 'Completed' },
    ];

    const notifications = [
        { title: 'Savings goal achieved!', time: '10 min ago', type: 'success' },
        { title: 'User Emma Collins joined', time: '1 hour ago', type: 'info' },
        { title: 'Monthly Budget update', time: '2 hours ago', type: 'warning' },
    ];

    return (
        <div className={styles.sav_Overview}>
            {/* Stats Row */}
            <div className={styles.sav_StatsGrid}>
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        className={styles.sav_StatCard}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <div className={styles.sav_StatInfo}>
                            <span className={styles.sav_StatLabel}>{stat.label}</span>
                            <div className={styles.sav_StatValue}>
                                {stat.value}
                                <span className={styles.sav_StatChange}>{stat.change}</span>
                            </div>
                            <div className={styles.sav_StatProgress}>
                                <div className={styles.sav_ProgressBar} style={{ width: '70%', backgroundColor: stat.color }} />
                            </div>
                        </div>
                        <div className={styles.sav_StatIcon} style={{ backgroundColor: `${stat.color}15`, color: stat.color }}>
                            <stat.icon size={24} />
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Charts Row */}
            <div className={styles.sav_MainGrid}>
                <div className={styles.sav_ChartContainer}>
                    <div className={styles.sav_CardHeader}>
                        <h3>Spending Overview</h3>
                        <div className={styles.sav_CardActions}>
                            <select>
                                <option>Last 6 Months</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.sav_ChartPlaceholder}>
                        {/* Simulated Line Chart */}
                        <svg width="100%" height="200" viewBox="0 0 600 200">
                            <path d="M0,150 C50,140 100,160 150,120 S250,80 300,100 S450,40 600,60" fill="none" stroke="#38bdf8" strokeWidth="4" />
                            <circle cx="150" cy="120" r="4" fill="#38bdf8" />
                            <circle cx="300" cy="100" r="4" fill="#38bdf8" />
                            <circle cx="450" cy="40" r="4" fill="#38bdf8" />
                        </svg>
                        <div className={styles.sav_ChartLabels}>
                            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                        </div>
                    </div>
                </div>

                <div className={styles.sav_CategoryCard}>
                    <div className={styles.sav_CardHeader}>
                        <h3>Top Categories</h3>
                        <button className={styles.sav_TextBtn}>See More</button>
                    </div>
                    <div className={styles.sav_DoughnutContainer}>
                        <div className={styles.sav_Doughnut}>
                            <div className={styles.sav_DoughnutCenter}>
                                <span>65%</span>
                            </div>
                        </div>
                        <div className={styles.sav_CategoryList}>
                            <div className={styles.sav_CatItem}><span style={{ background: '#38bdf8' }} /> Rent</div>
                            <div className={styles.sav_CatItem}><span style={{ background: '#2dd4bf' }} /> Food</div>
                            <div className={styles.sav_CatItem}><span style={{ background: '#f59e0b' }} /> Utilities</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Row */}
            <div className={styles.sav_BottomGrid}>
                <div className={styles.sav_TransactionsCard}>
                    <div className={styles.sav_CardHeader}>
                        <h3>Recent Transactions</h3>
                        <button className={styles.sav_IconBtn}><MoreVertical size={18} /></button>
                    </div>
                    <div className={styles.sav_TableWrapper}>
                        <table className={styles.sav_Table}>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Date</th>
                                    <th>Type</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transactions.map((t, i) => (
                                    <tr key={i}>
                                        <td>{t.name}</td>
                                        <td>{t.date}</td>
                                        <td>{t.type}</td>
                                        <td className={t.amount.startsWith('+') ? styles.income : styles.expense}>{t.amount}</td>
                                        <td><span className={clsx(styles.status, styles[t.status.toLowerCase()])}>{t.status}</span></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className={styles.sav_NotificationsCard}>
                    <div className={styles.sav_CardHeader}>
                        <h3>Notifications</h3>
                    </div>
                    <div className={styles.sav_NotifList}>
                        {notifications.map((n, i) => (
                            <div key={i} className={styles.sav_NotifItem}>
                                <div className={clsx(styles.notifIcon, styles[n.type])} />
                                <div className={styles.notifContent}>
                                    <p>{n.title}</p>
                                    <span>{n.time}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;
