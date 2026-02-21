"use client";

import React from 'react';
import ChartCard from '@/components/cards/ChartCard';
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    BarChart,
    Bar,
    Cell,
    PieChart,
    Pie
} from 'recharts';
import { TrendingUp, TrendingDown, Target, Zap } from 'lucide-react';
import styles from '@/components/cards/Cards.module.scss';

const spendingTrends = [
    { name: 'Mon', amount: 120 },
    { name: 'Tue', amount: 300 },
    { name: 'Wed', amount: 150 },
    { name: 'Thu', amount: 450 },
    { name: 'Fri', amount: 600 },
    { name: 'Sat', amount: 350 },
    { name: 'Sun', amount: 200 },
];

const savingsRate = [
    { month: 'Jan', rate: 15 },
    { month: 'Feb', rate: 18 },
    { month: 'Mar', rate: 12 },
    { month: 'Apr', rate: 22 },
    { month: 'May', rate: 25 },
    { month: 'Jun', rate: 20 },
];

const topCategories = [
    { name: 'Housing', value: 1200, color: '#0EA5E9' },
    { name: 'Food', value: 500, color: '#10B981' },
    { name: 'Travel', value: 300, color: '#F59E0B' },
    { name: 'Health', value: 200, color: '#6366F1' },
];

const AnalyticsPage = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
                <h1 style={{ fontSize: '1.875rem', fontWeight: 800, color: '#0F172A' }}>Financial Analytics</h1>
                <p style={{ color: '#64748B' }}>Deep dive into your spending and saving patterns.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
                <ChartCard title="Weekly Spending Trend">
                    <ResponsiveContainer width="100%" height={350}>
                        <AreaChart data={spendingTrends}>
                            <defs>
                                <linearGradient id="colorAmt" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.1} />
                                    <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 12 }} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 12 }} />
                            <Tooltip />
                            <Area type="monotone" dataKey="amount" stroke="#0EA5E9" strokeWidth={3} fillOpacity={1} fill="url(#colorAmt)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </ChartCard>

                <div className={styles.sav_ContentColumn}>
                    <div style={{ padding: '1.5rem', background: 'white', borderRadius: '1.5rem', border: '1px solid #E2E8F0' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                            <div style={{ width: '40px', height: '40px', background: '#F0F9FF', color: '#0EA5E9', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Target size={20} />
                            </div>
                            <h4 style={{ fontWeight: 700 }}>Efficiency Score</h4>
                        </div>
                        <div style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>84/100</div>
                        <p style={{ color: '#64748B', fontSize: '0.875rem' }}>Your spending is 12% more efficient than last month. Keep it up!</p>
                        <div style={{ height: '8px', background: '#F1F5F9', borderRadius: '4px', overflow: 'hidden', marginTop: '1rem' }}>
                            <div style={{ width: '84%', height: '100%', background: 'linear-gradient(90deg, #0EA5E9 0%, #10B981 100%)' }} />
                        </div>
                    </div>

                    <div style={{ padding: '1.5rem', background: 'white', borderRadius: '1.5rem', border: '1px solid #E2E8F0' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                            <div style={{ width: '40px', height: '40px', background: '#FFF7ED', color: '#F59E0B', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Zap size={20} />
                            </div>
                            <h4 style={{ fontWeight: 700 }}>Quick Insights</h4>
                        </div>
                        <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ fontSize: '0.875rem', color: '#475569', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                                <div style={{ minWidth: '6px', height: '6px', borderRadius: '50%', background: '#F59E0B', marginTop: '6px' }} />
                                Higher food spending observed on weekends.
                            </li>
                            <li style={{ fontSize: '0.875rem', color: '#475569', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                                <div style={{ minWidth: '6px', height: '6px', borderRadius: '50%', background: '#10B981', marginTop: '6px' }} />
                                Savings goal "New Car" is 75% complete.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <ChartCard title="Savings Rate (%)">
                    <ResponsiveContainer width="100%" height={250}>
                        <BarChart data={savingsRate}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 12 }} />
                            <YAxis axisLine={false} tickLine={false} hide />
                            <Tooltip />
                            <Bar dataKey="rate" fill="#10B981" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </ChartCard>

                <ChartCard title="Top Expenditure Categories">
                    <ResponsiveContainer width="100%" height={250}>
                        <PieChart>
                            <Pie
                                data={topCategories}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {topCategories.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginTop: '1rem' }}>
                        {topCategories.map(item => (
                            <div key={item.name} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: item.color }} />
                                <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>{item.name}: ${item.value}</span>
                            </div>
                        ))}
                    </div>
                </ChartCard>
            </div>
        </div>
    );
};

export default AnalyticsPage;
