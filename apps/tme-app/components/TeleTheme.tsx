'use client';

import { useTheme } from 'next-themes';
import { useTelegram } from '../providers/Telegram';

export default function TeleTheme({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element {
    const { webApp } = useTelegram();
    const { setTheme } = useTheme();
    setTheme(webApp?.colorScheme!);
    return <>{children}</>;
}
