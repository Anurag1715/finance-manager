"use client";

import React from 'react';
import styles from '../../login/login.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { motion } from 'framer-motion';
import { Mail, Lock, AlertCircle, Shield } from 'lucide-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { supabase } from '@/shared/supabaseClient';
import { makeRequest } from '@/shared/api';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

const schema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
});

const AdminLoginPage = () => {
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
                    <Badge variant="warning">Admin Portal</Badge>
                    <h1>Admin Login</h1>
                    <p>Access the administrative dashboard</p>
                </div>

                {error && (
                    <div className={styles.sav_ErrorMessage}>
                        <AlertCircle size={16} />
                        <span>{error}</span>
                    </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        label="Admin Email"
                        placeholder="admin@savique.com"
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

                    <div style={{ margin: '1.5rem 0' }}>
                        <Button type="submit" fullWidth disabled={isSubmitting}>
                            <Shield size={18} style={{ marginRight: '0.5rem' }} />
                            {isSubmitting ? 'Authenticating...' : 'Secure Login'}
                        </Button>
                    </div>
                </form>

                <div className={styles.sav_AuthFooter}>
                    Standard user? <Link href="/login">Go to Login</Link>
                </div>
            </motion.div>
        </section>
    );
};

export default AdminLoginPage;
