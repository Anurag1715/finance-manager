"use client";

import React, { useState } from 'react';
import ChartCard from '@/components/cards/ChartCard';
import {
    Search,
    Filter,
    MoreVertical,
    UserPlus,
    Mail,
    Shield,
    UserX,
    CheckCircle,
    Edit2,
    Trash2
} from 'lucide-react';
import styles from '@/components/cards/Cards.module.scss';

const UserManagementPage = () => {
    const [users, setUsers] = useState([
        { id: 1, name: 'Alex Johnson', email: 'alex@example.com', role: 'User', joined: '2024-01-12', status: 'Active' },
        { id: 2, name: 'Sarah Smith', email: 'sarah@example.com', role: 'Admin', joined: '2023-11-05', status: 'Active' },
        { id: 3, name: 'Michael Brown', email: 'michael@example.com', role: 'User', joined: '2024-02-20', status: 'Inactive' },
        { id: 4, name: 'Emily Davis', email: 'emily@example.com', role: 'User', joined: '2024-03-01', status: 'Active' },
        { id: 5, name: 'David Wilson', email: 'david@example.com', role: 'Moderator', joined: '2023-12-15', status: 'Active' },
    ]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1 style={{ fontSize: '1.875rem', fontWeight: 800, color: '#0F172A' }}>User Management</h1>
                    <p style={{ color: '#64748B' }}>Monitor, manage and update user roles and permissions.</p>
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
                    <UserPlus size={20} />
                    Add New User
                </button>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ flex: 1, position: 'relative' }}>
                    <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }} />
                    <input
                        placeholder="Search by name, email or role..."
                        style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 2.75rem', borderRadius: '0.75rem', border: '1px solid #E2E8F0', background: 'white' }}
                    />
                </div>
                <button style={{ padding: '0.75rem 1.25rem', background: 'white', border: '1px solid #E2E8F0', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                    <Filter size={18} />
                    Role
                </button>
            </div>

            <ChartCard title="All Users">
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                                <th style={{ textAlign: 'left', padding: '1rem', color: '#64748B', fontSize: '0.875rem' }}>Full Name</th>
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
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#F1F5F9', color: '#64748B', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                {u.name.charAt(0)}
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>{u.name}</span>
                                                <span style={{ fontSize: '0.75rem', color: '#64748B' }}>{u.email}</span>
                                            </div>
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
                                            <CheckCircle size={14} />
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
    );
};

export default UserManagementPage;
