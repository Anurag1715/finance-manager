import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/shared/supabaseClient';
import { makeRequest } from '@/shared/api';

export const useBudgets = (userId) => {
    return useQuery({
        queryKey: ['budgets', userId],
        queryFn: async () => {
            if (!userId) return [];
            return await makeRequest(
                supabase
                    .from('budgets')
                    .select('*')
                    .eq('user_id', userId)
            );
        },
        enabled: !!userId,
    });
};
