"use client";

import React, { useState } from 'react';
import ChartCard from '@/components/cards/ChartCard';
import { User, Mail, Phone, Globe, DollarSign, Trash2, Camera, ShieldAlert } from 'lucide-react';
import styles from '@/components/cards/Cards.module.scss';

const ProfilePage = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: 'John Doe',
        email: 'john@example.com',
        phone: '+1 234 567 890',
        currency: 'USD ($)',
        timezone: 'GMT-5 (EST)',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        setIsEditing(false);
        // Add success message or logic here
    };

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
                <h1 style={{ fontSize: '1.875rem', fontWeight: 800, color: '#0F172A' }}>Profile Settings</h1>
                <p style={{ color: '#64748B' }}>Manage your personal information and preferences.</p>
            </div>

            <ChartCard title="Personal Information">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                        <div style={{ position: 'relative' }}>
                            <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: '#E0F2FE', display: 'flex', alignItems: 'center', justifyCenter: 'center', color: '#0EA5E9', fontSize: '2rem', fontWeight: 800 }}>
                                JD
                            </div>
                            <button style={{ position: 'absolute', bottom: 0, right: 0, padding: '0.5rem', background: 'white', borderRadius: '50%', border: '1px solid #E2E8F0', color: '#64748B' }}>
                                <Camera size={16} />
                            </button>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>{formData.name}</h3>
                            <p style={{ color: '#64748B' }}>Member since January 2024</p>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.875rem', fontWeight: 600, color: '#475569' }}>Full Name</label>
                            <div style={{ position: 'relative' }}>
                                <User size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }} />
                                <input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 2.75rem', borderRadius: '0.75rem', border: '1px solid #E2E8F0', background: isEditing ? 'white' : '#F8FAFC' }}
                                />
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.875rem', fontWeight: 600, color: '#475569' }}>Email Address</label>
                            <div style={{ position: 'relative' }}>
                                <Mail size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }} />
                                <input
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 2.75rem', borderRadius: '0.75rem', border: '1px solid #E2E8F0', background: isEditing ? 'white' : '#F8FAFC' }}
                                />
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.875rem', fontWeight: 600, color: '#475569' }}>Phone Number</label>
                            <div style={{ position: 'relative' }}>
                                <Phone size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }} />
                                <input
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 2.75rem', borderRadius: '0.75rem', border: '1px solid #E2E8F0', background: isEditing ? 'white' : '#F8FAFC' }}
                                />
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.875rem', fontWeight: 600, color: '#475569' }}>Currency</label>
                            <div style={{ position: 'relative' }}>
                                <DollarSign size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }} />
                                <select
                                    name="currency"
                                    value={formData.currency}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 2.75rem', borderRadius: '0.75rem', border: '1px solid #E2E8F0', background: isEditing ? 'white' : '#F8FAFC', appearance: 'none' }}
                                >
                                    <option>USD ($)</option>
                                    <option>EUR (€)</option>
                                    <option>INR (₹)</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1rem' }}>
                        {isEditing ? (
                            <>
                                <button onClick={() => setIsEditing(false)} style={{ padding: '0.75rem 1.5rem', background: 'white', border: '1px solid #E2E8F0', borderRadius: '0.75rem', fontWeight: 600 }}>Cancel</button>
                                <button onClick={handleSave} style={{ padding: '0.75rem 1.5rem', background: '#0EA5E9', color: 'white', border: 'none', borderRadius: '0.75rem', fontWeight: 600 }}>Save Changes</button>
                            </>
                        ) : (
                            <button onClick={() => setIsEditing(true)} style={{ padding: '0.75rem 1.5rem', background: '#0EA5E9', color: 'white', border: 'none', borderRadius: '0.75rem', fontWeight: 600 }}>Edit Profile</button>
                        )}
                    </div>
                </div>
            </ChartCard>

            <ChartCard title="Danger Zone">
                <div style={{ padding: '1rem', background: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ padding: '0.75rem', background: 'rgba(239, 68, 68, 0.1)', color: '#EF4444', borderRadius: '0.75rem' }}>
                            <ShieldAlert size={24} />
                        </div>
                        <div>
                            <h4 style={{ fontWeight: 700, color: '#EF4444' }}>Delete Account</h4>
                            <p style={{ fontSize: '0.875rem', color: '#64748B' }}>This action is permanent and cannot be undone.</p>
                        </div>
                    </div>
                    <button style={{ padding: '0.75rem 1.5rem', background: '#EF4444', color: 'white', border: 'none', borderRadius: '0.75rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Trash2 size={18} />
                        Delete Account
                    </button>
                </div>
            </ChartCard>
        </div>
    );
};

export default ProfilePage;
