"use client";

import React, { useState } from 'react';
import ChartCard from '@/components/cards/ChartCard';
import { Search, Filter, Download, ArrowUpDown, User } from 'lucide-react';

const AdminTransactionsPage = () => {
    const [transactions, setTransactions] = useState([
        { id: 1, user: 'Alex Johnson', date: '2024-03-15', category: 'Food', amount: 45.50, status: 'Completed' },
        { id: 2, user: 'Sarah Smith', date: '2024-03-14', category: 'Rent', amount: 1200.00, status: 'Completed' },
        { id: 3, user: 'Michael Brown', date: '2024-03-12', category: 'Utilities', amount: 85.20, status: 'Pending' },
        { id: 4, user: 'Alex Johnson', date: '2024-03-10', category: 'Entertainment', amount: 25.00, status: 'Completed' },
        { id: 5, user: 'Emily Davis', date: '2024-03-08', category: 'Transport', amount: 30.00, status: 'Completed' },
    ]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
                <h1 style={{ fontSize: '1.875rem', fontWeight: 800, color: '#0F172A' }}>Global Transactions</h1>
                <p style={{ color: '#64748B' }}>Monitor all transactions across the platform.</p>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ flex: 1, position: 'relative' }}>
                    <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }} />
                    <input
                        placeholder="Search by user or transaction..."
                        style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 2.75rem', borderRadius: '0.75rem', border: '1px solid #E2E8F0', background: 'white' }}
                    />
                </div>
                <button style={{ padding: '0.75rem 1.25rem', background: 'white', border: '1px solid #E2E8F0', borderRadius: '0.75rem', fontWeight: 600 }}>Export All</button>
            </div>

            <ChartCard title="All Transactions">
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                                <th style={{ textAlign: 'left', padding: '1rem', color: '#64748B', fontSize: '0.875rem' }}>User</th>
                                <th style={{ textAlign: 'left', padding: '1rem', color: '#64748B', fontSize: '0.875rem' }}>Date</th>
                                <th style={{ textAlign: 'left', padding: '1rem', color: '#64748B', fontSize: '0.875rem' }}>Category</th>
                                <th style={{ textAlign: 'left', padding: '1rem', color: '#64748B', fontSize: '0.875rem' }}>Amount</th>
                                <th style={{ textAlign: 'left', padding: '1rem', color: '#64748B', fontSize: '0.875rem' }}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map(t => (
                                <tr key={t.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                                    <td style={{ padding: '1rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <div style={{ width: '24px', height: '24px', background: '#F1F5F9', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <User size={12} />
                                            </div>
                                            <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>{t.user}</span>
                                        </div>
                                    </td>
                                    <td style={{ padding: '1rem', fontSize: '0.875rem' }}>{t.date}</td>
                                    <td style={{ padding: '1rem' }}>
                                        <span style={{ padding: '0.25rem 0.75rem', background: '#F1F5F9', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 600 }}>{t.category}</span>
                                    </td>
                                    <td style={{ padding: '1rem', fontSize: '0.875rem', fontWeight: 700 }}>${t.amount.toFixed(2)}</td>
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
    );
};

export default AdminTransactionsPage;
