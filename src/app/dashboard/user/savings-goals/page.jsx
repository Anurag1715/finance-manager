"use client";

import React from 'react';
import ChartCard from '@/components/cards/ChartCard';
import { Plus, Target, Trophy, TrendingUp, Calendar } from 'lucide-react';
import styles from '@/components/cards/Cards.module.scss';

const SavingsGoalsPage = () => {
    const goals = [
        { id: 1, title: 'New Electric Car', target: 45000, current: 32000, deadline: '2025-12-31', icon: '🚗', color: '#0EA5E9' },
        { id: 2, title: 'Emergency Fund', target: 10000, current: 7500, deadline: '2024-06-30', icon: '🛡️', color: '#10B981' },
        { id: 3, title: 'Summer Vacation', target: 3000, current: 1200, deadline: '2024-05-15', icon: '🏖️', color: '#F59E0B' },
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1 style={{ fontSize: '1.875rem', fontWeight: 800, color: '#0F172A' }}>Savings Goals</h1>
                    <p style={{ color: '#64748B' }}>Dream big and track your progress towards financial freedom.</p>
                </div>
                <button style={{
                    padding: '0.75rem 1.5rem',
                    background: '#0EA5E9',
                    color: 'white',
                    border: 'none',
                    borderRadius: '0.75rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                }}>
                    <Plus size={20} />
                    New Goal
                </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                <div style={{ padding: '1.5rem', background: 'white', borderRadius: '1.5rem', border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{ width: '40px', height: '40px', background: '#F0F9FF', color: '#0EA5E9', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Target size={20} />
                        </div>
                        <span style={{ fontWeight: 600, color: '#64748B' }}>Total Savings</span>
                    </div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 800 }}>$40,700.00</div>
                    <div style={{ fontSize: '0.875rem', color: '#10B981', fontWeight: 600 }}>+ $1,200 this month</div>
                </div>

                <div style={{ padding: '1.5rem', background: 'white', borderRadius: '1.5rem', border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{ width: '40px', height: '40px', background: '#ECFDF5', color: '#10B981', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Trophy size={20} />
                        </div>
                        <span style={{ fontWeight: 600, color: '#64748B' }}>Goals Completed</span>
                    </div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 800 }}>4</div>
                    <div style={{ fontSize: '0.875rem', color: '#64748B' }}>Last 12 months</div>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
                {goals.map(goal => {
                    const percentage = Math.round((goal.current / goal.target) * 100);
                    return (
                        <ChartCard key={goal.id} title={goal.title}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <div style={{ fontSize: '2.5rem' }}>{goal.icon}</div>
                                        <div>
                                            <div style={{ fontSize: '0.875rem', color: '#64748B', fontWeight: 500 }}>Currently Saved</div>
                                            <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>${goal.current.toLocaleString()}</div>
                                        </div>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <div style={{ fontSize: '0.875rem', color: '#64748B', fontWeight: 500 }}>Target amount</div>
                                        <div style={{ fontSize: '1rem', fontWeight: 700 }}>${goal.target.toLocaleString()}</div>
                                    </div>
                                </div>

                                <div style={{ position: 'relative', height: '24px', background: '#F1F5F9', borderRadius: '12px', overflow: 'hidden' }}>
                                    <div style={{
                                        height: '100%',
                                        width: `${percentage}%`,
                                        background: `linear-gradient(90deg, ${goal.color} 0%, #FFF 200%)`,
                                        borderRadius: '12px',
                                        transition: 'width 1s ease-out'
                                    }} />
                                    <div style={{
                                        position: 'absolute',
                                        left: '50%',
                                        top: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        fontSize: '0.75rem',
                                        fontWeight: 800,
                                        color: percentage > 50 ? 'white' : '#1e293b'
                                    }}>
                                        {percentage}%
                                    </div>
                                </div>

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid #F1F5F9' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#64748B' }}>
                                        <Calendar size={16} />
                                        Target: {new Date(goal.deadline).toLocaleDateString()}
                                    </div>
                                    <button style={{ padding: '0.5rem 1rem', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>
                                        Add Funds
                                    </button>
                                </div>
                            </div>
                        </ChartCard>
                    );
                })}
            </div>
        </div>
    );
};

export default SavingsGoalsPage;
