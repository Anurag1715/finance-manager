"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/shared/hooks/useUser';
import { useProfile } from '@/shared/hooks/useProfile';

const DashboardRedirectPage = () => {
    const router = useRouter();
    const { data: user, isLoading: userLoading } = useUser();
    const { data: profile, isLoading: profileLoading } = useProfile(user?.id);

    useEffect(() => {
        if (!userLoading && !profileLoading) {
            if (profile?.role === 'admin') {
                router.push('/dashboard/admin');
            } else {
                router.push('/dashboard/user');
            }
        }
    }, [user, profile, userLoading, profileLoading, router]);


    return null;
};


export default DashboardRedirectPage;

