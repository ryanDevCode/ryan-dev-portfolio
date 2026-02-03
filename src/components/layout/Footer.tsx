'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Container } from './Container';

const socialLinks = [
    { href: 'https://github.com/ryanDevCode', icon: Github, label: 'GitHub' },
    { href: 'https://linkedin.com/in/jason-ryan-odvina', icon: Linkedin, label: 'LinkedIn' },
    { href: 'mailto:odvinajason@gmail.com', icon: Mail, label: 'Email' },
];

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 border-t border-border bg-secondary/30">
            <Container>
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo and copyright */}
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <motion.a
                            href="#"
                            className="text-lg font-bold tracking-tight"
                            whileHover={{ scale: 1.02 }}
                        >
                            <span className="text-gradient">Ryan</span>
                            <span className="text-foreground">.dev</span>
                        </motion.a>
                        <p className="text-sm text-muted flex items-center gap-1">
                            © {currentYear} · Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> and lots of coffee
                        </p>
                    </div>

                    {/* Social links */}
                    <div className="flex items-center gap-3">
                        {socialLinks.map((link) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-xl bg-secondary hover:bg-secondary-hover transition-colors text-muted hover:text-foreground"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label={link.label}
                            >
                                <link.icon className="w-5 h-5" />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </Container>
        </footer>
    );
}
