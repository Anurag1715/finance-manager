"use client";

import React from 'react';
import styles from './contact.module.scss';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from '@/components/ui/Input/Input';
import Button from '@/components/ui/Button/Button';

const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    subject: yup.string().required('Subject is required'),
    message: yup.string().min(10, 'Message must be at least 10 characters').required('Message is required'),
});

export default function Contact() {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data);
        return new Promise(resolve => setTimeout(resolve, 2000));
    };

    return (
        <div className={styles.civ_contact}>
            <section className={styles.civ_contact__hero}>
                <h2 className="civ_badge civ_badge--info">Contact Us</h2>
                <h1>Get in Touch</h1>
                <p>Have questions? Our team is here to support your community's growth.</p>
            </section>

            <section className={styles.civ_contact__main}>
                <div className={styles.civ_contact__info}>
                    <div className="info-header">
                        <h2>Contact Information</h2>
                        <p>Prefer a direct call or email? Reach out any time.</p>
                    </div>

                    <div className="info-list">
                        <div className="info-item">
                            <div className="icon-box"><Phone size={20} /></div>
                            <div className="item-text">
                                <h4>Phone Support</h4>
                                <span>+1 (555) 000-0000</span>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-box"><Mail size={20} /></div>
                            <div className="item-text">
                                <h4>Email Us</h4>
                                <span>support@civictrack.gov</span>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-box"><MapPin size={20} /></div>
                            <div className="item-text">
                                <h4>Main Office</h4>
                                <span>123 City Hall Plaza, Metropolitan City, MC 12345</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.civ_contact__form}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-row">
                            <Input
                                label="Full Name"
                                placeholder="John Doe"
                                error={errors.name}
                                {...register('name')}
                            />
                            <Input
                                label="Email Address"
                                placeholder="john@example.com"
                                type="email"
                                error={errors.email}
                                {...register('email')}
                            />
                        </div>
                        <Input
                            label="Subject"
                            placeholder="What can we help you with?"
                            error={errors.subject}
                            {...register('subject')}
                        />
                        <div className="civ_input-group">
                            <label className="civ_input-group__label">Message</label>
                            <textarea
                                className={`civ_input-group__field ${errors.message ? 'civ_input-group__field--error' : ''}`}
                                style={{ minHeight: '150px' }}
                                placeholder="Details about your inquiry..."
                                {...register('message')}
                            ></textarea>
                            {errors.message && <span className="civ_input-group__error-message">{errors.message.message}</span>}
                        </div>

                        <Button type="submit" fullWidth disabled={isSubmitting}>
                            {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} />
                        </Button>
                    </form>
                </div>
            </section>
        </div>
    );
}
