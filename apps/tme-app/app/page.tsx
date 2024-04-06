'use client';

import { useTelegram } from '../providers/Telegram';
import { useSearchParams } from 'next/navigation';

export default function Page(): JSX.Element {
    const searchParams = useSearchParams();
    const { user, webApp } = useTelegram();
    return (
        <main>
            <div>
                {user ? (
                    <div>
                        <h1>{searchParams.get('button')}</h1>
                        <h1>Welcome {user?.username}</h1>
                        User data:
                        <pre>{JSON.stringify(user, null, 2)}</pre>
                        Eniter Web App data:
                        <pre>{JSON.stringify(webApp, null, 2)}</pre>
                    </div>
                ) : (
                    <div>Make sure web app is opened from telegram client</div>
                )}
            </div>
        </main>
    );
}
