"use client";

import React from 'react';
import styles from './register.module.scss';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from '@/components/ui/Input/Input';
import Button from '@/components/ui/Button/Button';
import Badge from '@/components/ui/Badge/Badge';
import { UserPlus } from 'lucide-react';

const schema = yup.object().shape({
    fullname: yup.string().required('Full Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
});

export default function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log("Register Data:", data);
        alert("Savique Account created successfully!");
    };

    return (
        <div className={styles.savAuth}>
            <div className={styles.savAuthCard}>
                <div className={styles.savAuthHeader}>
                    <Badge variant="success" className={styles.savBadge}>Start Tracking</Badge>
                    <h1>Create Your Savique Account</h1>
                    <p>Start managing your personal finances in minutes.</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        label="Full Name"
                        placeholder="John Doe"
                        {...register('fullname')}
                        error={errors.fullname?.message}
                    />

                    <Input
                        label="Email"
                        placeholder="john@example.com"
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
                        Create Account <UserPlus size={18} />
                    </Button>
                </form>

                <div className={styles.savAuthFooter}>
                    <p>Already have an account? <Link href="/login">Log In</Link></p>
                </div>
            </div>
        </div>
    );
}
