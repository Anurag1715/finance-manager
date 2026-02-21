import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/shared/supabaseClient';
import { makeRequest } from '@/shared/api';

export const useUser = () => {
    return useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            try {
                return await makeRequest(supabase.auth.getUser());
            } catch (err) {
                return null;
            }
        },
        select: (data) => data?.user || data, // Handle both raw user and wrapped object
    });
};
