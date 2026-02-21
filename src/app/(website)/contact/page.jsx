"use client";

import React from 'react';
import styles from './contact.module.scss';
import clsx from 'clsx';
import { Send, Mail, MessageSquare, User } from 'lucide-react';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

const ContactPage = () => {
    return (
        <section className={styles.sav_Contact}>
            <div className={styles.sav_ContactCard}>
                <div className={styles.sav_Header}>
                    <Badge variant="primary">Support</Badge>
                    <h1>Get in Touch</h1>
                    <p>Have questions about Savique? We're here to help you scale your wealth.</p>
                </div>

                <form>
                    <Input
                        label="Full Name"
                        placeholder="John Doe"
                        startIcon={User}
                    />
                    <Input
                        label="Email Address"
                        type="email"
                        placeholder="john@example.com"
                        startIcon={Mail}
                    />
                    <Input
                        label="Subject"
                        placeholder="How can we help?"
                        startIcon={MessageSquare}
                    />

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'rgba(255,255,255,0.6)', marginLeft: '0.25rem' }}>Message</label>
                        <textarea
                            rows={5}
                            placeholder="Your message here..."
                            style={{
                                width: '100%',
                                padding: '0.75rem 1rem',
                                borderRadius: '12px',
                                border: '1px solid rgba(255,255,255,0.1)',
                                background: 'rgba(15, 23, 42, 0.4)',
                                color: 'white',
                                outline: 'none',
                                resize: 'vertical'
                            }}
                        />
                    </div>

                    <Button fullWidth>
                        <Send size={18} /> Send Message
                    </Button>
                </form>
            </div>
        </section>
    );
};

export default ContactPage;
