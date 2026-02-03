'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    type?: 'button' | 'submit';
}

const variants = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary-hover shadow-lg shadow-primary/25',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary-hover',
    outline: 'border-2 border-border bg-transparent hover:bg-secondary text-foreground',
    ghost: 'bg-transparent hover:bg-secondary text-foreground',
};

const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
};

export function Button({
    children,
    variant = 'primary',
    size = 'md',
    href,
    onClick,
    className,
    disabled = false,
    type = 'button',
}: ButtonProps) {
    const baseStyles = cn(
        'inline-flex items-center justify-center gap-2 rounded-xl font-medium',
        'transition-all duration-300 ease-out',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        'disabled:opacity-50 disabled:pointer-events-none',
        variants[variant],
        sizes[size],
        className
    );

    const MotionComponent = href ? motion.a : motion.button;

    return (
        <MotionComponent
            href={href}
            onClick={onClick}
            disabled={disabled}
            type={href ? undefined : type}
            className={baseStyles}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
            {children}
        </MotionComponent>
    );
}
