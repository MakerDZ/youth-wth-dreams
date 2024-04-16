import { useQuery } from '@tanstack/react-query';

export const useGetCommitHeapMap = (chatId: string) => {
    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ['commitment-heap-map'],
        queryFn: async () => {
            const response = await fetch(`/api/commitment?id=${chatId}`);

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error);
            }

            const data = await response.json();
            return data;
        },
        refetchOnMount: false,
        staleTime: Infinity,
    });

    return { data, isLoading, error, refetch };
};
