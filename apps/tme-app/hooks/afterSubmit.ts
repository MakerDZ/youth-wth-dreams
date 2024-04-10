import { useEffect } from 'react';
import type { IWebApp } from '../types/type';
import toast from 'react-hot-toast';

type AfterSubmit = {
    success: boolean | undefined;
    message: string | undefined;
    webApp: IWebApp | undefined;
};

export const useAfterSubmit = ({ success, message, webApp }: AfterSubmit) => {
    useEffect(() => {
        if (success && webApp) {
            return webApp.close();
        }

        if (!success && message) {
            toast.error(message);
        }
    }, [success, message]);
};
