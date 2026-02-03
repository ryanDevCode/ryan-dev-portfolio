'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Github, Linkedin, CheckCircle } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/animations/FadeIn';

export function Contact() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000));

        setIsLoading(false);
        setIsSubmitted(true);
    };

    return (
        <Section id="contact">
            <Container size="small">
                <SectionHeader
                    title="Let's Work Together"
                    subtitle="Have a project in mind? I'd love to hear about it."
                />

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact info */}
                    <FadeIn direction="left">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-lg font-semibold mb-4">Get in touch</h3>
                                <p className="text-muted leading-relaxed">
                                    I&apos;m currently open to freelance projects, part-time roles, and
                                    full-time opportunities. Whether you have a question or just want
                                    to say hi, feel free to reach out!
                                </p>
                            </div>

                            {/* Contact methods */}
                            <div className="space-y-4">
                                <motion.a
                                    href="mailto:odvinajason@gmail.com"
                                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-card-border hover:border-primary/30 transition-colors group"
                                    whileHover={{ x: 4 }}
                                >
                                    <div className="w-12 h-12 rounded-xl bg-gradient flex items-center justify-center">
                                        <Mail className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-medium group-hover:text-primary transition-colors">Email</p>
                                        <p className="text-sm text-muted">odvinajason@gmail.com</p>
                                    </div>
                                </motion.a>

                                <motion.a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-card-border hover:border-primary/30 transition-colors group"
                                    whileHover={{ x: 4 }}
                                >
                                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                                        <Github className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-medium group-hover:text-primary transition-colors">GitHub</p>
                                        <p className="text-sm text-muted">Check out my code</p>
                                    </div>
                                </motion.a>

                                <motion.a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-card-border hover:border-primary/30 transition-colors group"
                                    whileHover={{ x: 4 }}
                                >
                                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                                        <Linkedin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-medium group-hover:text-primary transition-colors">LinkedIn</p>
                                        <p className="text-sm text-muted">Let&apos;s connect</p>
                                    </div>
                                </motion.a>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Contact form */}
                    <FadeIn direction="right" delay={0.1}>
                        <div className="p-6 rounded-2xl bg-card border border-card-border">
                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="h-full flex flex-col items-center justify-center text-center py-12"
                                >
                                    <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                                        <CheckCircle className="w-8 h-8 text-green-500" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Message sent!</h3>
                                    <p className="text-muted">Thanks for reaching out. I&apos;ll get back to you soon.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                                            placeholder="Your name"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                                            placeholder="your@email.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={4}
                                            className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                                            placeholder="Tell me about your project..."
                                        />
                                    </div>

                                    <Button type="submit" className="w-full" disabled={isLoading}>
                                        {isLoading ? (
                                            <span className="flex items-center gap-2">
                                                <motion.span
                                                    animate={{ rotate: 360 }}
                                                    transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                                                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                                />
                                                Sending...
                                            </span>
                                        ) : (
                                            <>
                                                Send Message
                                                <Send className="w-4 h-4" />
                                            </>
                                        )}
                                    </Button>
                                </form>
                            )}
                        </div>
                    </FadeIn>
                </div>
            </Container>
        </Section>
    );
}
