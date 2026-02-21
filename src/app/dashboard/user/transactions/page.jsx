"use client";

import React, { useState } from 'react';
import ChartCard from '@/components/cards/ChartCard';
import { Plus, Search, Filter, Download, Edit2, Trash2, ArrowUpDown } from 'lucide-react';
import styles from '@/components/cards/Cards.module.scss';

const TransactionsPage = () => {
    const [transactions, setTransactions] = useState([
        { id: 1, date: '2024-03-15', category: 'Food', amount: 45.50, description: 'Grocery shopping', method: 'Credit Card', status: 'Completed' },
        { id: 2, date: '2024-03-14', category: 'Rent', amount: 1200.00, description: 'Monthly rent', method: 'Bank Transfer', status: 'Completed' },
        { id: 3, date: '2024-03-12', category: 'Utilities', amount: 85.20, description: 'Electricity bill', method: 'Auto-pay', status: 'Pending' },
        { id: 4, date: '2024-03-10', category: 'Entertainment', amount: 25.00, description: 'Cinema ticket', method: 'Cash', status: 'Completed' },
        { id: 5, date: '2024-03-08', category: 'Transport', amount: 30.00, description: 'Gas refill', method: 'Debit Card', status: 'Completed' },
    ]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1 style={{ fontSize: '1.875rem', fontWeight: 800, color: '#0F172A' }}>Transactions</h1>
                    <p style={{ color: '#64748B' }}>Track and manage your daily spending habits.</p>
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
                    gap: '0.5rem',
                    boxShadow: '0 4px 6px -1px rgba(14, 165, 233, 0.3)'
                }}>
                    <Plus size={20} />
                    Add Transaction
                </button>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: '300px', position: 'relative' }}>
                    <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }} />
                    <input
                        placeholder="Search by description or category..."
                        style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 2.75rem', borderRadius: '0.75rem', border: '1px solid #E2E8F0', background: 'white' }}
                    />
                </div>
                <button style={{ padding: '0.75rem 1.25rem', background: 'white', border: '1px solid #E2E8F0', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                    <Filter size={18} />
                    Filters
                </button>
                <button style={{ padding: '0.75rem 1.25rem', background: 'white', border: '1px solid #E2E8F0', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                    <Download size={18} />
                    Export
                </button>
            </div>

            <ChartCard>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                                <th style={{ textAlign: 'left', padding: '1rem', color: '#64748B', fontSize: '0.875rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                        Date <ArrowUpDown size={14} />
                                    </div>
                                </th>
                                <th style={{ textAlign: 'left', padding: '1rem', color: '#64748B', fontSize: '0.875rem' }}>Description</th>
                                <th style={{ textAlign: 'left', padding: '1rem', color: '#64748B', fontSize: '0.875rem' }}>Category</th>
                                <th style={{ textAlign: 'left', padding: '1rem', color: '#64748B', fontSize: '0.875rem' }}>Amount</th>
                                <th style={{ textAlign: 'left', padding: '1rem', color: '#64748B', fontSize: '0.875rem' }}>Status</th>
                                <th style={{ textAlign: 'right', padding: '1rem', color: '#64748B', fontSize: '0.875rem' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map(t => (
                                <tr key={t.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                                    <td style={{ padding: '1rem', fontSize: '0.875rem', fontWeight: 500 }}>{t.date}</td>
                                    <td style={{ padding: '1rem' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>{t.description}</span>
                                            <span style={{ fontSize: '0.75rem', color: '#64748B' }}>via {t.method}</span>
                                        </div>
                                    </td>
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
                                    <td style={{ padding: '1rem', fontSize: '0.875rem', fontWeight: 800, color: '#EF4444' }}>
                                        -${t.amount.toFixed(2)}
                                    </td>
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
                                    <td style={{ padding: '1rem', textAlign: 'right' }}>
                                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
                                            <button style={{ padding: '0.5rem', background: 'transparent', color: '#64748B', borderRadius: '0.5rem' }}>
                                                <Edit2 size={16} />
                                            </button>
                                            <button style={{ padding: '0.5rem', background: 'transparent', color: '#EF4444', borderRadius: '0.5rem' }}>
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </ChartCard>
        </div>
    );
};

export default TransactionsPage;
