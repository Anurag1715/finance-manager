export const makeRequest = async (apiCall) => {
    const { data, error } = await apiCall;
    if (error) {
        throw new Error(error.message || 'Something went wrong');
    }
    return data;
};
