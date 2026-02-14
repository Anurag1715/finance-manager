"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './login.module.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from '@/components/ui/Input/Input';
import Button from '@/components/ui/Button/Button';
import { supabase } from '@/shared/supabaseClient';
import { useRouter } from 'next/navigation';
import { LogIn, AlertCircle } from 'lucide-react';

const schema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

export default function Login() {
    const [authError, setAuthError] = useState(null);
    const router = useRouter();
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data) => {
        setAuthError(null);
        try {
            const { error } = await supabase.auth.signInWithPassword({
                email: data.email,
                password: data.password,
            });

            if (error) throw error;
            router.push('/dashboard/citizen');
        } catch (error) {
            setAuthError(error.message);
        }
    };

    return (
        <div className={styles.civ_auth}>
            <div className={styles.civ_auth__card}>
                <div className={styles.civ_auth__header}>
                    <h1>Welcome Back</h1>
                    <p>Enter your credentials to access your dashboard</p>
                </div>

                {authError && (
                    <div className={styles.civ_auth__error}>
                        <AlertCircle size={18} />
                        {authError}
                    </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className={styles.civ_auth__form}>
                    <Input
                        label="Email Address"
                        type="email"
                        placeholder="john@example.com"
                        error={errors.email}
                        {...register('email')}
                    />
                    <Input
                        label="Password"
                        type="password"
                        placeholder="••••••••"
                        error={errors.password}
                        {...register('password')}
                    />

                    <Button type="submit" fullWidth disabled={isSubmitting}>
                        {isSubmitting ? 'Verifying...' : 'Sign In'} <LogIn size={18} />
                    </Button>
                </form>

                <div className={styles.civ_auth__divider}>or</div>

                <div className={styles.civ_auth__footer}>
                    Don't have an account? <Link href="/register">Create an account</Link>
                </div>
            </div>
        </div>
    );
}
