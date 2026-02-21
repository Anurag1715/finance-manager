import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/shared/supabaseClient';
import { makeRequest } from '@/shared/api';

export const useTransactions = (options = {}) => {
    return useQuery({
        queryKey: ['transactions', options],
        queryFn: async () => {
            let query = supabase
                .from('transactions')
                .select('*')
                .order('date', { ascending: false });

            if (options.limit) {
                query = query.limit(options.limit);
            }

            if (options.userId) {
                query = query.eq('user_id', options.userId);
            }

            return await makeRequest(query);
        },
    });
};
