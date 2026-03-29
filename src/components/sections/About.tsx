'use client';

import { motion } from 'framer-motion';
import { Code2, Lightbulb, Users } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Container } from '@/components/layout/Container';
import { FadeIn } from '@/components/animations/FadeIn';

const highlights = [
    {
        icon: Code2,
        title: 'Production Experience',
        description: 'Shipped and maintained features in a live Rails + React application',
    },
    {
        icon: Lightbulb,
        title: 'Full-Stack Thinking',
        description: 'Comfortable across the stack — from database queries to UI components',
    },
    {
        icon: Users,
        title: 'Team-Ready',
        description: 'Used to code reviews, clear communication, and collaborative workflows',
    },
];

export function About() {
    return (
        <Section id="about">
            <Container>
                <SectionHeader
                    title="About Me"
                    subtitle="Passionate about building software that makes a difference"
                />

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Story */}
                    <FadeIn direction="left">
                        <div className="space-y-6">
                            <p className="text-lg leading-relaxed text-muted">
                                I&apos;m a <strong className="text-foreground">full-stack web developer</strong> with
                                real production experience. I currently work on a Rails + React application
                                where I maintain existing features, fix bugs, and help migrate legacy code
                                into cleaner, more modern implementations.
                            </p>

                            <p className="text-lg leading-relaxed text-muted">
                                I work across the stack — from designing <strong className="text-foreground">ActiveRecord queries
                                    and REST APIs</strong> in Rails to building <strong className="text-foreground">React components</strong> with
                                hooks, context, and clean state management. I care about the decisions
                                behind the code, not just making it work.
                            </p>

                            <p className="text-lg leading-relaxed text-muted">
                                I&apos;m actively looking for <strong className="text-foreground">freelance,
                                    part-time, or full-time roles</strong> where I can keep growing,
                                contribute to a real team, and take on more responsibility over time.
                            </p>
                        </div>
                    </FadeIn>

                    {/* Highlights */}
                    <FadeIn direction="right" delay={0.2}>
                        <div className="space-y-4">
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    className="flex gap-4 p-4 rounded-2xl bg-card border border-card-border hover:border-primary/30 transition-colors"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ x: 4 }}
                                >
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient flex items-center justify-center">
                                        <item.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                                        <p className="text-sm text-muted">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </Container>
        </Section>
    );
}
