"use client";

import React from 'react';
import StatsCard from '@/components/cards/StatsCard';
import ChartCard from '@/components/cards/ChartCard';
import {
    Wallet,
    TrendingUp,
    TrendingDown,
    PieChart as PieChartIcon,
    Target,
    ArrowUpRight,
    ArrowDownRight,
    Calendar,
    Bell
} from 'lucide-react';
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    PieChart,
    Pie,
    Cell,
    BarChart,
    Bar,
    Legend
} from 'recharts';
import styles from '@/components/cards/Cards.module.scss';

// Mock Data
const spendingData = [
    { name: 'Jan', amount: 4000 },
    { name: 'Feb', amount: 3000 },
    { name: 'Mar', amount: 2000 },
    { name: 'Apr', amount: 2780 },
    { name: 'May', amount: 1890 },
    { name: 'Jun', amount: 2390 },
    { name: 'Jul', amount: 3490 },
];

const categoryData = [
    { name: 'Food', value: 400, color: '#0EA5E9' },
    { name: 'Rent', value: 1200, color: '#10B981' },
    { name: 'Entertainment', value: 300, color: '#F59E0B' },
    { name: 'Utilities', value: 200, color: '#6366F1' },
    { name: 'Transport', value: 150, color: '#EF4444' },
];

const incomeVsExpenseData = [
    { name: 'May', income: 5000, expense: 3800 },
    { name: 'Jun', income: 5200, expense: 4100 },
    { name: 'Jul', income: 4800, expense: 3200 },
    { name: 'Aug', income: 6000, expense: 4500 },
];

const transactions = [
    { id: 1, date: '2024-03-15', category: 'Food', amount: 45.50, method: 'Credit Card', status: 'Completed' },
    { id: 2, date: '2024-03-14', category: 'Rent', amount: 1200.00, method: 'Bank Transfer', status: 'Completed' },
    { id: 3, date: '2024-03-12', category: 'Utilities', amount: 85.20, method: 'Auto-pay', status: 'Pending' },
    { id: 4, date: '2024-03-10', category: 'Entertainment', amount: 25.00, method: 'Cash', status: 'Completed' },
];

const UserDashboard = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1 style={{ fontSize: '1.875rem', fontWeight: 800, color: '#0F172A' }}>Dashboard</h1>
                    <p style={{ color: '#64748B' }}>Welcome back! Here's what's happening today.</p>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button style={{
                        padding: '0.625rem 1.25rem',
                        background: 'white',
                        border: '1px solid #E2E8F0',
                        borderRadius: '0.75rem',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        <Calendar size={18} />
                        March 2024
                    </button>
                </div>
            </div>

            <div className={styles.sav_DashboardGrid}>
                <StatsCard title="Total Balance" value="$12,450.00" icon={Wallet} trend={12} trendType="up" />
                <StatsCard title="Monthly Income" value="$5,200.00" icon={TrendingUp} trend={8} trendType="up" />
                <StatsCard title="Monthly Expenses" value="$3,120.00" icon={TrendingDown} trend={4} trendType="down" />
                <StatsCard title="Remaining Budget" value="$850.00" icon={Target} trend={2} trendType="neutral" />
            </div>

            <div className={styles.sav_MainGrid}>
                <div className={styles.sav_ContentColumn}>
                    <ChartCard title="Spending Overview">
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={spendingData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 12 }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 12 }} />
                                <Tooltip
                                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                                />
                                <Line type="monotone" dataKey="amount" stroke="#0EA5E9" strokeWidth={3} dot={{ r: 4, fill: '#0EA5E9' }} activeDot={{ r: 6 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </ChartCard>

                    <ChartCard title="Recent Transactions">
                        <div style={{ overflowX: 'auto' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead>
                                    <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                                        <th style={{ textAlign: 'left', padding: '1rem', color: '#64748B', fontSize: '0.875rem' }}>Date</th>
                                        <th style={{ textAlign: 'left', padding: '1rem', color: '#64748B', fontSize: '0.875rem' }}>Category</th>
                                        <th style={{ textAlign: 'left', padding: '1rem', color: '#64748B', fontSize: '0.875rem' }}>Amount</th>
                                        <th style={{ textAlign: 'left', padding: '1rem', color: '#64748B', fontSize: '0.875rem' }}>Method</th>
                                        <th style={{ textAlign: 'left', padding: '1rem', color: '#64748B', fontSize: '0.875rem' }}>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {transactions.map(t => (
                                        <tr key={t.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                                            <td style={{ padding: '1rem', fontSize: '0.875rem', fontWeight: 500 }}>{t.date}</td>
                                            <td style={{ padding: '1rem' }}>
                                                <span style={{
                                                    padding: '0.25rem 0.75rem',
                                                    background: '#F1F5F9',
                                                    borderRadius: '100px',
                                                    fontSize: '0.75rem',
                                                    fontWeight: 600,
                                                    color: '#475569'
                                                }}>{t.category}</span>
                                            </td>
                                            <td style={{ padding: '1rem', fontSize: '0.875rem', fontWeight: 700, color: t.amount > 100 ? '#EF4444' : '#0F172A' }}>
                                                -${t.amount.toFixed(2)}
                                            </td>
                                            <td style={{ padding: '1rem', fontSize: '0.875rem', color: '#64748B' }}>{t.method}</td>
                                            <td style={{ padding: '1rem' }}>
                                                <span style={{
                                                    padding: '0.25rem 0.75rem',
                                                    background: t.status === 'Completed' ? '#D1FAE5' : '#FEF3C7',
                                                    color: t.status === 'Completed' ? '#10B981' : '#D97706',
                                                    borderRadius: '100px',
                                                    fontSize: '0.75rem',
                                                    fontWeight: 600
                                                }}>{t.status}</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </ChartCard>
                </div>

                <div className={styles.sav_ContentColumn}>
                    <ChartCard title="Expenses by Category">
                        <ResponsiveContainer width="100%" height={250}>
                            <PieChart>
                                <Pie
                                    data={categoryData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {categoryData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem' }}>
                            {categoryData.map(item => (
                                <div key={item.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: item.color }} />
                                        <span style={{ fontSize: '0.875rem', color: '#64748B' }}>{item.name}</span>
                                    </div>
                                    <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#0F172A' }}>${item.value}</span>
                                </div>
                            ))}
                        </div>
                    </ChartCard>

                    <ChartCard title="Income vs Expenses">
                        <ResponsiveContainer width="100%" height={200}>
                            <BarChart data={incomeVsExpenseData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 12 }} />
                                <Tooltip />
                                <Bar dataKey="income" fill="#10B981" radius={[4, 4, 0, 0]} />
                                <Bar dataKey="expense" fill="#EF4444" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </ChartCard>

                    <div style={{ padding: '1.5rem', background: 'linear-gradient(135deg, #0EA5E9 0%, #0369A1 100%)', borderRadius: '1.5rem', color: 'white' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                            <Bell size={24} />
                            <h4 style={{ fontWeight: 700 }}>Upcoming Bills</h4>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span>Netflix Subscription</span>
                                <span style={{ fontWeight: 700 }}>$15.99</span>
                            </div>
                            <div style={{ fontSize: '0.75rem', opacity: 0.8 }}>Due in 3 days</div>
                            <button style={{ width: '100%', padding: '0.75rem', background: 'white', color: '#0EA5E9', border: 'none', borderRadius: '0.75rem', fontWeight: 700 }}>Pay Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
