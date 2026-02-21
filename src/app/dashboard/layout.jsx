"use client";

import React, { useEffect } from 'react';
import Sidebar from '@/components/sidebar';
import Header from '@/components/header';
import { useUser } from '@/shared/hooks/useUser';
import { useProfile } from '@/shared/hooks/useProfile';
import { useRouter, usePathname } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/shared/supabaseClient';
import { makeRequest } from '@/shared/api';

export default function DashboardLayout({ children }) {
    const router = useRouter();
    const pathname = usePathname();
    const queryClient = useQueryClient();
    const { data: user, isLoading: userLoading } = useUser();
    const { data: profile, isLoading: profileLoading } = useProfile(user?.id);

    const logoutMutation = useMutation({
        mutationFn: () => makeRequest(supabase.auth.signOut()),
        onSuccess: () => {
            queryClient.setQueryData(['user'], null);
            queryClient.setQueryData(['profile', user?.id], null);
            router.push('/login');
        },
    });

    useEffect(() => {
        if (!userLoading && !user) {
            router.push('/login');
            return;
        }

        if (profile) {
            const role = profile.role || 'user';
            const isAdminPath = pathname.startsWith('/dashboard/admin');
            const isUserPath = pathname.startsWith('/dashboard/user');

            if (role === 'user' && isAdminPath) {
                router.push('/dashboard/user');
            } else if (role === 'admin' && isUserPath) {
                router.push('/dashboard/admin');
            }
        }
    }, [user, userLoading, profile, pathname, router]);

    if (userLoading || profileLoading) return null;

    if (!user) return null;

    const role = profile?.role || 'user';

    return (
        <div className="dashboard-theme" style={{ display: 'flex', minHeight: '100vh' }}>
            <Sidebar role={role} onLogout={() => logoutMutation.mutate()} />
            <div style={{ flex: 1, marginLeft: '280px', display: 'flex', flexDirection: 'column' }}>
                <Header user={user} profile={profile} />
                <main style={{ flex: 1, padding: '2rem' }}>
                    {children}
                </main>
            </div>
        </div>
    );
}
