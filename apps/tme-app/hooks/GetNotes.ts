import { useQuery } from '@tanstack/react-query';

export const useGetNotes = (chatId: string, filter: string) => {
    const { data, isLoading, error, refetch } = useQuery({
        queryKey: [filter],
        queryFn: async () => {
            const response = await fetch(
                `/api/note?filter=${filter}&id=${chatId}`
            );

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
