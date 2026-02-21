"use client";

import React from 'react';
import styles from './login.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { motion } from 'framer-motion';
import { Mail, Lock, AlertCircle, Github } from 'lucide-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { supabase } from '@/shared/supabaseClient';
import { makeRequest } from '@/shared/api';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Checkbox from '@/components/ui/Checkbox';
import Badge from '@/components/ui/Badge';

const schema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
});

const LoginPage = () => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const queryClient = useQueryClient();
    const loginMutation = useMutation({
        mutationFn: (data) =>
            makeRequest(supabase.auth.signInWithPassword({
                email: data.email,
                password: data.password,
            })),
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ['user'] });
            router.push('/dashboard');
        },
    });

    const onSubmit = (data) => {
        loginMutation.mutate(data);
    };

    const isSubmitting = loginMutation.isPending;
    const error = loginMutation.error?.message;

    return (
        <section className={styles.sav_Auth}>
            <motion.div
                className={styles.sav_AuthCard}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className={styles.sav_AuthHeader}>
                    <Badge variant="primary">Welcome Back</Badge>
                    <h1>Log In</h1>
                    <p>Enter your credentials to access your account</p>
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

                <div className={styles.sav_Divider}>Or continue with</div>

                {error && (
                    <div className={styles.sav_ErrorMessage}>
                        <AlertCircle size={16} />
                        <span>{error}</span>
                    </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        label="Email Address"
                        placeholder="you@example.com"
                        {...register('email')}
                        error={errors.email?.message}
                        startIcon={Mail}
                        disabled={isSubmitting}
                    />

                    <Input
                        label="Password"
                        type="password"
                        placeholder="••••••••"
                        {...register('password')}
                        error={errors.password?.message}
                        startIcon={Lock}
                        disabled={isSubmitting}
                    />

                    <div className={styles.sav_FormActions}>
                        <Checkbox label="Remember me" />
                        <Link href="/forgot-password">Forgot Password?</Link>
                    </div>

                    <Button type="submit" fullWidth disabled={isSubmitting}>
                        {isSubmitting ? 'Logging in...' : 'Sign In'}
                    </Button>
                </form>

                <div className={styles.sav_AuthFooter}>
                    Don't have an account? <Link href="/register">Sign Up</Link>
                </div>
            </motion.div>
        </section>
    );
};

export default LoginPage;
