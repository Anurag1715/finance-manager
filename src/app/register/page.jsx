"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../login/login.module.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from '@/components/ui/Input/Input';
import Button from '@/components/ui/Button/Button';
import { supabase } from '@/shared/supabaseClient';
import { useRouter } from 'next/navigation';
import { UserPlus, AlertCircle } from 'lucide-react';

const schema = yup.object().shape({
    name: yup.string().required('Full name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm password is required'),
});

export default function Register() {
    const [authError, setAuthError] = useState(null);
    const router = useRouter();
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data) => {
        setAuthError(null);
        try {
            const { error } = await supabase.auth.signUp({
                email: data.email,
                password: data.password,
                options: {
                    data: {
                        full_name: data.name,
                        role: 'citizen'
                    }
                }
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
                    <h1>Create Account</h1>
                    <p>Join CivicTrack and help build a better community</p>
                </div>

                {authError && (
                    <div className={styles.civ_auth__error}>
                        <AlertCircle size={18} />
                        {authError}
                    </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className={styles.civ_auth__form}>
                    <Input
                        label="Full Name"
                        placeholder="John Doe"
                        error={errors.name}
                        {...register('name')}
                    />
                    <Input
                        label="Email Address"
                        type="email"
                        placeholder="john@example.com"
                        error={errors.email}
                        {...register('email')}
                    />
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <Input
                            label="Password"
                            type="password"
                            placeholder="••••••••"
                            error={errors.password}
                            {...register('password')}
                        />
                        <Input
                            label="Confirm"
                            type="password"
                            placeholder="••••••••"
                            error={errors.confirmPassword}
                            {...register('confirmPassword')}
                        />
                    </div>

                    <Button type="submit" fullWidth disabled={isSubmitting}>
                        {isSubmitting ? 'Creating account...' : 'Create Account'} <UserPlus size={18} />
                    </Button>
                </form>

                <div className={styles.civ_auth__divider}>or</div>

                <div className={styles.civ_auth__footer}>
                    Already have an account? <Link href="/login">Sign in here</Link>
                </div>
            </div>
        </div>
    );
}
