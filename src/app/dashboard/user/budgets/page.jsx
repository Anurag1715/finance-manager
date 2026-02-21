"use client";

import React from 'react';
import ChartCard from '@/components/cards/ChartCard';
import { Plus, Wallet, AlertCircle, TrendingUp } from 'lucide-react';
import styles from '@/components/cards/Cards.module.scss';

const BudgetPage = () => {
    const budgets = [
        { id: 1, category: 'Food & Dining', limit: 500, spent: 420.50, color: '#0EA5E9' },
        { id: 2, category: 'Rent & Utilities', limit: 1500, spent: 1500.00, color: '#10B981' },
        { id: 3, category: 'Entertainment', limit: 200, spent: 245.00, color: '#F59E0B' },
        { id: 4, category: 'Transport', limit: 300, spent: 120.00, color: '#6366F1' },
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1 style={{ fontSize: '1.875rem', fontWeight: 800, color: '#0F172A' }}>Budgets</h1>
                    <p style={{ color: '#64748B' }}>Set limits and control your spending by category.</p>
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
                    Create Budget
                </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
                <div style={{ padding: '1.5rem', background: 'white', borderRadius: '1.25rem', border: '1px solid #E2E8F0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#F0F9FF', color: '#0EA5E9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Wallet size={20} />
                        </div>
                        <span style={{ fontWeight: 600, color: '#64748B' }}>Total Budgeted</span>
                    </div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>$2,500.00</div>
                </div>

                <div style={{ padding: '1.5rem', background: 'white', borderRadius: '1.25rem', border: '1px solid #E2E8F0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#ECFDF5', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <TrendingUp size={20} />
                        </div>
                        <span style={{ fontWeight: 600, color: '#64748B' }}>Total Spent</span>
                    </div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>$2,285.50</div>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                {budgets.map(b => {
                    const percentage = Math.min((b.spent / b.limit) * 100, 100);
                    const isOver = b.spent > b.limit;

                    return (
                        <ChartCard key={b.id} title={b.category}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                                    <div>
                                        <div style={{ fontSize: '2rem', fontWeight: 800 }}>${b.spent.toFixed(2)}</div>
                                        <div style={{ fontSize: '0.875rem', color: '#64748B' }}>of ${b.limit.toFixed(2)} monthly limit</div>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <div style={{ fontSize: '1rem', fontWeight: 700, color: isOver ? '#EF4444' : '#10B981' }}>
                                            {isOver ? `Over by $${(b.spent - b.limit).toFixed(2)}` : `$${(b.limit - b.spent).toFixed(2)} left`}
                                        </div>
                                    </div>
                                </div>

                                <div style={{ height: '12px', width: '100%', background: '#F1F5F9', borderRadius: '100px', overflow: 'hidden' }}>
                                    <div style={{
                                        height: '100%',
                                        width: `${percentage}%`,
                                        background: isOver ? '#EF4444' : b.color,
                                        borderRadius: '100px',
                                        transition: 'width 0.5s ease'
                                    }} />
                                </div>

                                {isOver && (
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem', background: '#FEF2F2', color: '#EF4444', borderRadius: '0.75rem', fontSize: '0.875rem', fontWeight: 600 }}>
                                        <AlertCircle size={18} />
                                        Budget exceeded! Review your spending in this category.
                                    </div>
                                )}
                            </div>
                        </ChartCard>
                    );
                })}
            </div>
        </div>
    );
};

export default BudgetPage;
