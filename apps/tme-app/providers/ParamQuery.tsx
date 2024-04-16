'use client';
import NextAdapterApp from 'next-query-params/app';
import { QueryParamProvider } from 'use-query-params';

export function ParamQuery({ children }: { children: React.ReactNode }) {
    return (
        <QueryParamProvider adapter={NextAdapterApp}>
            {children}
        </QueryParamProvider>
    );
}
