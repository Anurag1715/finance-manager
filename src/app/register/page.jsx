"use client";

import React, { useState } from 'react';
import styles from './register.module.scss';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { motion } from 'framer-motion';
import { UserPlus, Github, Mail, Lock } from 'lucide-react';

import Input from '@/components/ui/Input/Input';
import Button from '@/components/ui/Button/Button';
import Checkbox from '@/components/ui/Checkbox/Checkbox';
import Badge from '@/components/ui/Badge/Badge';

const schema = yup.object().shape({
    fullname: yup.string().required('Full name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string()
        .min(8, 'Password must be at least 8 characters')
        .matches(/[A-Z]/, 'Must contain one uppercase letter')
        .matches(/[0-9]/, 'Must contain one number')
        .required('Password is required'),
    agree: yup.boolean().oneOf([true], 'You must agree to the terms'),
});

const RegisterPage = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const password = watch('password', '');

    const getStrength = () => {
        let s = 0;
        if (password.length >= 8) s++;
        if (/[A-Z]/.test(password)) s++;
        if (/[0-9]/.test(password)) s++;
        if (/[^A-Za-z0-9]/.test(password)) s++;
        return s;
    };

    const strength = getStrength();

    const onSubmit = (data) => {
        setIsSubmitting(true);
        console.log("Register Data:", data);
        setTimeout(() => setIsSubmitting(false), 2000);
    };

    return (
        <section className={styles.sav_Auth}>
            <motion.div
                className={styles.sav_AuthCard}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className={styles.sav_AuthHeader}>
                    <Badge variant="primary">Join Savique</Badge>
                    <h1>Create Account</h1>
                    <p>Start your journey to financial freedom</p>
                </div>

                <div className={styles.sav_SocialGrid}>
                    <Button variant="secondary" fullWidth>
                        <Github size={20} /> Github
                    </Button>
                    <Button variant="secondary" fullWidth>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        Google
                    </Button>
                </div>

                <div className={styles.sav_Divider}>Or use email</div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        label="Full Name"
                        placeholder="John Doe"
                        {...register('fullname')}
                        startIcon={UserPlus}
                        error={errors.fullname?.message}
                    />

                    <Input
                        label="Email"
                        placeholder="john@example.com"
                        {...register('email')}
                        startIcon={Mail}
                        error={errors.email?.message}
                    />

                    <Input
                        label="Password"
                        type="password"
                        placeholder="••••••••"
                        {...register('password')}
                        startIcon={Lock}
                        error={errors.password?.message}
                    />

                    {/* Password Strength Meter */}
                    <div className={styles.sav_PasswordStrength}>
                        <span className={strength >= 1 ? (strength === 1 ? styles.active : (strength <= 3 ? styles.medium : styles.strong)) : ''} />
                        <span className={strength >= 2 ? (strength <= 3 ? styles.medium : styles.strong) : ''} />
                        <span className={strength >= 3 ? (strength <= 3 ? styles.medium : styles.strong) : ''} />
                        <span className={strength >= 4 ? styles.strong : ''} />
                    </div>

                    <div className={styles.sav_Terms}>
                        <Checkbox
                            label={<>I agree to the <Link href="/terms">Terms</Link> and <Link href="/privacy">Privacy Policy</Link></>}
                            {...register('agree')}
                            error={!!errors.agree}
                        />
                    </div>

                    <Button type="submit" fullWidth disabled={isSubmitting}>
                        {isSubmitting ? 'Creating Account...' : 'Create Account'}
                    </Button>
                </form>

                <div className={styles.sav_AuthFooter}>
                    Already have an account? <Link href="/login">Log In</Link>
                </div>
            </motion.div>
        </section>
    );
};

export default RegisterPage;
