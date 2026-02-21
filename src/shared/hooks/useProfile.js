import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/shared/supabaseClient';
import { makeRequest } from '@/shared/api';

export const useProfile = (userId) => {
    return useQuery({
        queryKey: ['profile', userId],
        queryFn: async () => {
            if (!userId) return null;
            return await makeRequest(
                supabase
                    .from('profiles')
                    .select('*')
                    .eq('id', userId)
                    .single()
            );
        },
        enabled: !!userId,
    });
};
