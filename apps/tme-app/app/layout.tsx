import './globals.css';
import type { Metadata } from 'next';
import { TelegramProvider } from '../providers/Telegram';
import { UIProvider } from '../providers/UIProvider';

export const metadata: Metadata = {
    title: 'Youth With Dreams',
    description: 'This is a private app for interacting with a Telegram bot.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element {
    return (
        <html>
            <body>
                <TelegramProvider>
                    <UIProvider>{children}</UIProvider>
                </TelegramProvider>
            </body>
        </html>
    );
}
