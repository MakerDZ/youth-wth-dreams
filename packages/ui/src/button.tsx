'use client';

import { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    className?: string;
    appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
    return (
        <button className={className}>
            <a href={'https://t.me/+juq5zOk9a980MzU1'}>{children}</a>
        </button>
    );
};
