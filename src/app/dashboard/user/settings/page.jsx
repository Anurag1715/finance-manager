"use client";

import React from 'react';
import ChartCard from '@/components/cards/ChartCard';
import { Bell, Shield, Eye, Smartphone, Mail, Languages } from 'lucide-react';

const UserSettingsPage = () => {
    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
                <h1 style={{ fontSize: '1.875rem', fontWeight: 800, color: '#0F172A' }}>Account Settings</h1>
                <p style={{ color: '#64748B' }}>Configure your account preferences and security options.</p>
            </div>

            <ChartCard title="Security Preferences">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <div style={{ padding: '0.75rem', background: '#F1F5F9', borderRadius: '12px' }}><Shield size={20} /></div>
                            <div>
                                <div style={{ fontWeight: 600 }}>Two-Factor Authentication</div>
                                <div style={{ fontSize: '0.875rem', color: '#64748B' }}>Add an extra layer of security to your account.</div>
                            </div>
                        </div>
                        <button style={{ padding: '0.5rem 1rem', border: '1px solid #E2E8F0', borderRadius: '0.5rem', fontWeight: 600 }}>Enable</button>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <div style={{ padding: '0.75rem', background: '#F1F5F9', borderRadius: '12px' }}><Smartphone size={20} /></div>
                            <div>
                                <div style={{ fontWeight: 600 }}>Device Management</div>
                                <div style={{ fontSize: '0.875rem', color: '#64748B' }}>Manage devices currently signed into your account.</div>
                            </div>
                        </div>
                        <button style={{ padding: '0.5rem 1rem', border: '1px solid #E2E8F0', borderRadius: '0.5rem', fontWeight: 600 }}>Manage</button>
                    </div>
                </div>
            </ChartCard>

            <ChartCard title="Notification Preferences">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span>Email Notifications</span>
                        <div style={{ width: '40px', height: '20px', background: '#0EA5E9', borderRadius: '10px', position: 'relative' }}>
                            <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'white', position: 'absolute', right: '2px', top: '2px' }} />
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span>Push Notifications</span>
                        <div style={{ width: '40px', height: '20px', background: '#0EA5E9', borderRadius: '10px', position: 'relative' }}>
                            <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'white', position: 'absolute', right: '2px', top: '2px' }} />
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span>Weekly Summary</span>
                        <div style={{ width: '40px', height: '20px', background: '#E2E8F0', borderRadius: '10px', position: 'relative' }}>
                            <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'white', position: 'absolute', left: '2px', top: '2px' }} />
                        </div>
                    </div>
                </div>
            </ChartCard>
        </div>
    );
};

export default UserSettingsPage;
