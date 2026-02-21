"use client";

import React from 'react';
import ChartCard from '@/components/cards/ChartCard';
import {
    Settings,
    Globe,
    Bell,
    Shield,
    Mail,
    Database,
    Zap
} from 'lucide-react';
import styles from '@/components/cards/Cards.module.scss';

const AdminSettingsPage = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
                <h1 style={{ fontSize: '1.875rem', fontWeight: 800, color: '#0F172A' }}>System Settings</h1>
                <p style={{ color: '#64748B' }}>Configure global platform settings and monitor system health.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                <ChartCard title="Platform Configuration">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.875rem', fontWeight: 600, color: '#475569' }}>Site Name</label>
                            <input
                                defaultValue="Savique Finance"
                                style={{ padding: '0.75rem 1rem', borderRadius: '0.75rem', border: '1px solid #E2E8F0', background: 'white' }}
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.875rem', fontWeight: 600, color: '#475569' }}>Support Email</label>
                            <input
                                defaultValue="support@savique.com"
                                style={{ padding: '0.75rem 1rem', borderRadius: '0.75rem', border: '1px solid #E2E8F0', background: 'white' }}
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.875rem', fontWeight: 600, color: '#475569' }}>Default Currency</label>
                            <select style={{ padding: '0.75rem 1rem', borderRadius: '0.75rem', border: '1px solid #E2E8F0', background: 'white' }}>
                                <option>USD ($)</option>
                                <option>EUR (€)</option>
                                <option>GBP (£)</option>
                            </select>
                        </div>
                    </div>
                </ChartCard>

                <ChartCard title="Security Settings">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <div style={{ fontWeight: 600 }}>Two-Factor Authentication</div>
                                <div style={{ fontSize: '0.875rem', color: '#64748B' }}>Enforce 2FA for all admin accounts</div>
                            </div>
                            <div style={{ width: '40px', height: '20px', background: '#0EA5E9', borderRadius: '10px', position: 'relative' }}>
                                <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'white', position: 'absolute', right: '2px', top: '2px' }} />
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <div style={{ fontWeight: 600 }}>Session Timeout</div>
                                <div style={{ fontSize: '0.875rem', color: '#64748B' }}>Automatic logout after 30 mins of inactivity</div>
                            </div>
                            <div style={{ width: '40px', height: '20px', background: '#E2E8F0', borderRadius: '10px', position: 'relative' }}>
                                <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'white', position: 'absolute', left: '2px', top: '2px' }} />
                            </div>
                        </div>
                        <button style={{ width: '100%', padding: '0.75rem', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '0.75rem', fontWeight: 600, color: '#EF4444' }}>
                            Rotate Security Keys
                        </button>
                    </div>
                </ChartCard>

                <ChartCard title="Notification Settings">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ padding: '1rem', background: '#F8FAFC', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <Mail size={20} style={{ color: '#0EA5E9' }} />
                            <div>
                                <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>System Alerts</div>
                                <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Receive emails on system critical events.</div>
                            </div>
                        </div>
                        <div style={{ padding: '1rem', background: '#F8FAFC', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <Bell size={20} style={{ color: '#F59E0B' }} />
                            <div>
                                <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>User Reports</div>
                                <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Daily summary of user activities and growth.</div>
                            </div>
                        </div>
                    </div>
                </ChartCard>

                <ChartCard title="System Health">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Database size={16} style={{ color: '#10B981' }} />
                                <span style={{ fontSize: '0.875rem' }}>Database Status</span>
                            </div>
                            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#10B981' }}>Healthy</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Zap size={16} style={{ color: '#0EA5E9' }} />
                                <span style={{ fontSize: '0.875rem' }}>API Latency</span>
                            </div>
                            <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>24ms</span>
                        </div>
                        <div style={{ height: '8px', background: '#ECFDF5', borderRadius: '4px', overflow: 'hidden' }}>
                            <div style={{ width: '99.9%', height: '100%', background: '#10B981' }} />
                        </div>
                        <p style={{ fontSize: '0.75rem', color: '#64748B', textAlign: 'center' }}>99.9% Uptime in the last 30 days</p>
                    </div>
                </ChartCard>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                <button style={{ padding: '0.75rem 1.5rem', background: 'white', border: '1px solid #E2E8F0', borderRadius: '0.75rem', fontWeight: 600 }}>Discard Changes</button>
                <button style={{ padding: '0.75rem 1.5rem', background: '#0EA5E9', color: 'white', border: 'none', borderRadius: '0.75rem', fontWeight: 600 }}>Save Settings</button>
            </div>
        </div>
    );
};

export default AdminSettingsPage;
