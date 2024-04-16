import './globals.css';
import type { Metadata } from 'next';
import { TelegramProvider } from '../providers/Telegram';
import { UIProvider } from '../providers/UIProvider';
import { dbConnect } from '../lib/database';
import { ParamQuery } from '../providers/ParamQuery';

export const metadata: Metadata = {
    title: 'Youth With Dreams',
    description: 'This is a private app for interacting with a Telegram bot.',
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}): Promise<JSX.Element> {
    await dbConnect;
    return (
        <html>
            <body className="w-full h-full font-nunito">
                <ParamQuery>
                    <TelegramProvider>
                        <UIProvider>{children}</UIProvider>
                    </TelegramProvider>
                </ParamQuery>
            </body>
        </html>
    );
}
