'use client';

import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider } from 'next-themes';
import BackgroundLine from '../components/BackgroundLine';

export function UIProvider({ children }: { children: React.ReactNode }) {
    return (
        <NextUIProvider>
            <ThemeProvider attribute="class" defaultTheme="dark">
                <BackgroundLine />
                {children}
            </ThemeProvider>
        </NextUIProvider>
    );
}
