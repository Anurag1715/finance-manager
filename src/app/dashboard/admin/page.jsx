"use client";

import React from 'react';
import StatsCard from '@/components/cards/StatsCard';
import ChartCard from '@/components/cards/ChartCard';
import {
    Users,
    Activity,
    ArrowLeftRight,
    TrendingUp,
    MoreHorizontal,
    Edit2,
    Trash2
} from 'lucide-react';
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    BarChart,
    Bar
} from 'recharts';
import styles from '@/components/cards/Cards.module.scss';

// Mock Data
const userGrowthData = [
    { name: 'Jan', users: 120 },
    { name: 'Feb', users: 210 },
    { name: 'Mar', users: 350 },
    { name: 'Apr', users: 480 },
    { name: 'May', users: 600 },
    { name: 'Jun', users: 850 },
];

const transactionVolumeData = [
    { name: 'Mon', volume: 12000 },
    { name: 'Tue', volume: 15000 },
    { name: 'Wed', volume: 10000 },
    { name: 'Thu', volume: 18000 },
    { name: 'Fri', volume: 22000 },
    { name: 'Sat', volume: 9000 },
    { name: 'Sun', volume: 7000 },
];

const users = [
    { id: 1, name: 'Alex Johnson', email: 'alex@example.com', role: 'User', joined: '2024-01-12', status: 'Active' },
    { id: 2, name: 'Sarah Smith', email: 'sarah@example.com', role: 'Admin', joined: '2023-11-05', status: 'Active' },
    { id: 3, name: 'Michael Brown', email: 'michael@example.com', role: 'User', joined: '2024-02-20', status: 'Inactive' },
    { id: 4, name: 'Emily Davis', email: 'emily@example.com', role: 'User', joined: '2024-03-01', status: 'Active' },
];

const AdminDashboard = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
                <h1 style={{ fontSize: '1.875rem', fontWeight: 800, color: '#0F172A' }}>Admin Overview</h1>
                <p style={{ color: '#64748B' }}>Platform status and management console.</p>
            </div>

            <div className={styles.sav_DashboardGrid}>
                <StatsCard title="Total Users" value="1,280" icon={Users} trend={15} trendType="up" />
                <StatsCard title="Active Users" value="850" icon={Activity} trend={5} trendType="up" />
                <StatsCard title="Total Transactions" value="4,520" icon={ArrowLeftRight} trend={12} trendType="up" />
                <StatsCard title="Growth Rate" value="24%" icon={TrendingUp} trend={3} trendType="up" />
            </div>

            <div className={styles.sav_MainGrid}>
                <div className={styles.sav_ContentColumn}>
                    <ChartCard title="User Growth">
                        <ResponsiveContainer width="100%" height={300}>
                            <AreaChart data={userGrowthData}>
                                <defs>
                                    <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.1} />
                                        <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 12 }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 12 }} />
                                <Tooltip />
                                <Area type="monotone" dataKey="users" stroke="#0EA5E9" strokeWidth={3} fillOpacity={1} fill="url(#colorUsers)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </ChartCard>

                    <ChartCard title="User Management">
                        <div style={{ overflowX: 'auto' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead>
                                    <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                                        <th style={{ textAlign: 'left', padding: '1rem', color: '#64748B', fontSize: '0.875rem' }}>User</th>
                                        <th style={{ textAlign: 'left', padding: '1rem', color: '#64748B', fontSize: '0.875rem' }}>Role</th>
                                        <th style={{ textAlign: 'left', padding: '1rem', color: '#64748B', fontSize: '0.875rem' }}>Joined Date</th>
                                        <th style={{ textAlign: 'left', padding: '1rem', color: '#64748B', fontSize: '0.875rem' }}>Status</th>
                                        <th style={{ textAlign: 'right', padding: '1rem', color: '#64748B', fontSize: '0.875rem' }}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map(u => (
                                        <tr key={u.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                                            <td style={{ padding: '1rem' }}>
                                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                    <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>{u.name}</span>
                                                    <span style={{ fontSize: '0.75rem', color: '#64748B' }}>{u.email}</span>
                                                </div>
                                            </td>
                                            <td style={{ padding: '1rem' }}>
                                                <span style={{
                                                    padding: '0.25rem 0.75rem',
                                                    background: u.role === 'Admin' ? '#E0F2FE' : '#F1F5F9',
                                                    color: u.role === 'Admin' ? '#0EA5E9' : '#475569',
                                                    borderRadius: '100px',
                                                    fontSize: '0.75rem',
                                                    fontWeight: 600
                                                }}>{u.role}</span>
                                            </td>
                                            <td style={{ padding: '1rem', fontSize: '0.875rem', color: '#64748B' }}>{u.joined}</td>
                                            <td style={{ padding: '1rem' }}>
                                                <span style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '0.5rem',
                                                    fontSize: '0.875rem',
                                                    color: u.status === 'Active' ? '#10B981' : '#64748B'
                                                }}>
                                                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: u.status === 'Active' ? '#10B981' : '#64748B' }} />
                                                    {u.status}
                                                </span>
                                            </td>
                                            <td style={{ padding: '1rem', textAlign: 'right' }}>
                                                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
                                                    <button style={{ padding: '0.5rem', background: 'transparent', color: '#64748B' }}><Edit2 size={16} /></button>
                                                    <button style={{ padding: '0.5rem', background: 'transparent', color: '#EF4444' }}><Trash2 size={16} /></button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </ChartCard>
                </div>

                <div className={styles.sav_ContentColumn}>
                    <ChartCard title="Transaction Volume">
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={transactionVolumeData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 12 }} />
                                <Tooltip />
                                <Bar dataKey="volume" fill="#0EA5E9" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </ChartCard>

                    <div style={{ padding: '1.5rem', background: 'white', borderRadius: '1.5rem', border: '1px solid #E2E8F0' }}>
                        <h4 style={{ fontWeight: 700, marginBottom: '1rem' }}>Quick Actions</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <button style={{ width: '100%', padding: '0.75rem', background: '#0EA5E9', color: 'white', border: 'none', borderRadius: '0.75rem', fontWeight: 600 }}>Create New User</button>
                            <button style={{ width: '100%', padding: '0.75rem', background: 'white', color: '#0EA5E9', border: '1px solid #0EA5E9', borderRadius: '0.75rem', fontWeight: 600 }}>Export Reports</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
