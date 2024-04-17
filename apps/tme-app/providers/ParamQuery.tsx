'use client';
import NextAdapterApp from 'next-query-params/app';
import { Suspense } from 'react';
import { QueryParamProvider } from 'use-query-params';

export function ParamQuery({ children }: { children: React.ReactNode }) {
    return (
        <Suspense>
            <QueryParamProvider adapter={NextAdapterApp}>
                {children}
            </QueryParamProvider>
        </Suspense>
    );
}
