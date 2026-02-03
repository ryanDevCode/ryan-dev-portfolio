'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
    children: ReactNode;
    className?: string;
    size?: 'default' | 'small' | 'large';
}

export function Container({ children, className, size = 'default' }: ContainerProps) {
    const sizes = {
        small: 'max-w-4xl',
        default: 'max-w-6xl',
        large: 'max-w-7xl',
    };

    return (
        <div className={cn('mx-auto px-4 sm:px-6 lg:px-8', sizes[size], className)}>
            {children}
        </div>
    );
}
