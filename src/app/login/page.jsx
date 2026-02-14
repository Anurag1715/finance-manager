"use client";

import React from 'react';
import styles from './login.module.scss';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from '@/components/ui/Input/Input';
import Button from '@/components/ui/Button/Button';
import Badge from '@/components/ui/Badge/Badge';
import { LogIn } from 'lucide-react';

const schema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required'),
});

export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log("Login Data:", data);
        // Implement login logic
    };

    return (
        <div className={styles.savAuth}>
            <div className={styles.savAuthCard}>
                <div className={styles.savAuthHeader}>
                    <Badge variant="primary" className={styles.savBadge}>Welcome Back</Badge>
                    <h1>Log In to Savique</h1>
                    <p>Access your financial dashboard securely and continue building smarter money habits.</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        label="Email"
                        placeholder="you@example.com"
                        {...register('email')}
                        error={errors.email?.message}
                    />
                    <Input
                        label="Password"
                        type="password"
                        placeholder="••••••••"
                        {...register('password')}
                        error={errors.password?.message}
                    />

                    <Button type="submit" variant="primary" size="lg" fullWidth>
                        Log In <LogIn size={18} />
                    </Button>
                </form>

                <div className={styles.savAuthFooter}>
                    <p>New here? <Link href="/register">Create an account</Link></p>
                </div>
            </div>
        </div>
    );
}
