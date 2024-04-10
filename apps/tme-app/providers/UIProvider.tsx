'use client';

import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'react-hot-toast';
import BackgroundLine from '../components/BackgroundLine';

export function UIProvider({ children }: { children: React.ReactNode }) {
    return (
        <NextUIProvider>
            <ThemeProvider attribute="class" defaultTheme="dark">
                <BackgroundLine />
                {children}
                <Toaster />
            </ThemeProvider>
        </NextUIProvider>
    );
}
