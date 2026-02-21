"use client";

import React from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import Header from '@/components/dashboard/Header';
import { useUser } from '@/shared/hooks/useUser';
import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/shared/supabaseClient';
import { makeRequest } from '@/shared/api';

export default function DashboardLayout({ children }) {
    const router = useRouter();
    const queryClient = useQueryClient();
    const { data: user, isLoading } = useUser();

    const logoutMutation = useMutation({
        mutationFn: () => makeRequest(supabase.auth.signOut()),
        onSuccess: () => {
            queryClient.setQueryData(['user'], null);
            router.push('/login');
        },
    });

    if (isLoading) return null; // Or a loader
    if (!user) {
        router.push('/login');
        return null;
    }

    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: '#f8fafc' }}>
            <Sidebar onLogout={() => logoutMutation.mutate()} />
            <div style={{ flex: 1, marginLeft: '280px', display: 'flex', flexDirection: 'column' }}>
                <Header user={user} />
                <main style={{ flex: 1 }}>
                    {children}
                </main>
            </div>
        </div>
    );
}
