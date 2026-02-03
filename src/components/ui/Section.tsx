'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
    children: ReactNode;
    id?: string;
    className?: string;
    dark?: boolean;
}

export function Section({ children, id, className, dark = false }: SectionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section
            id={id}
            ref={ref}
            className={cn(
                'py-20 md:py-32',
                dark && 'bg-secondary/50',
                className
            )}
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                {children}
            </motion.div>
        </section>
    );
}

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
    align?: 'left' | 'center';
}

export function SectionHeader({ title, subtitle, className, align = 'center' }: SectionHeaderProps) {
    return (
        <div className={cn(
            'mb-12 md:mb-16',
            align === 'center' && 'text-center',
            className
        )}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                {title}
            </h2>
            {subtitle && (
                <p className="text-muted text-lg max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
