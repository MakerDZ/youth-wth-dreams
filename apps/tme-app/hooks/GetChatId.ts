import { useQueryParam } from 'use-query-params';

export const useGetChatId = () => {
    const [chatId, setName] = useQueryParam('chatId');
    return {
        chatId,
    };
};
