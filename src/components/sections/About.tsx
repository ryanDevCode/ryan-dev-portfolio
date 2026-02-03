'use client';

import { motion } from 'framer-motion';
import { Code2, Lightbulb, Users } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Container } from '@/components/layout/Container';
import { FadeIn } from '@/components/animations/FadeIn';

const highlights = [
    {
        icon: Code2,
        title: 'Technical Excellence',
        description: 'Clean, maintainable code with modern best practices',
    },
    {
        icon: Lightbulb,
        title: 'Problem Solver',
        description: 'Finding elegant solutions to complex challenges',
    },
    {
        icon: Users,
        title: 'Collaborative',
        description: 'Clear communication and team-oriented approach',
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
                                hands-on experience building dashboards, analytics tools, and enterprise
                                applications. My journey started with curiosity and has evolved into a
                                passion for creating web experiences that are both beautiful and functional.
                            </p>

                            <p className="text-lg leading-relaxed text-muted">
                                I&apos;ve worked with <strong className="text-foreground">React</strong> (including
                                legacy versions) and <strong className="text-foreground">Ruby on Rails</strong> (3 & 5),
                                giving me a unique perspective on modernizing codebases and building greenfield
                                projects alike. I thrive on learning new technologies and finding the right
                                tool for each job.
                            </p>

                            <p className="text-lg leading-relaxed text-muted">
                                Currently, I&apos;m exploring opportunities for <strong className="text-foreground">freelance
                                    work, part-time roles, and full-time positions</strong> where I can continue to
                                grow while delivering real value.
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
