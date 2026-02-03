'use client';

import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Container } from '@/components/layout/Container';
import { experiences } from '@/data/projects';

export function Experience() {
    return (
        <Section id="experience" dark>
            <Container size="small">
                <SectionHeader
                    title="Experience"
                    subtitle="My professional journey so far"
                />

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

                    {/* Timeline items */}
                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative grid md:grid-cols-2 gap-8 ${index % 2 === 0 ? 'md:text-right' : ''
                                    }`}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-gradient border-4 border-background" />

                                {/* Content */}
                                <div className={index % 2 === 0 ? 'md:pr-12' : 'md:col-start-2 md:pl-12'}>
                                    <div className="p-6 rounded-2xl bg-card border border-card-border hover:border-primary/30 transition-colors">
                                        {/* Header */}
                                        <div className="mb-4">
                                            <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                                            <p className="text-primary font-medium">{exp.company}</p>
                                        </div>

                                        {/* Meta */}
                                        <div className={`flex flex-wrap gap-4 text-sm text-muted mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''
                                            }`}>
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                {exp.startDate} – {exp.endDate}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <MapPin className="w-4 h-4" />
                                                {exp.location}
                                            </span>
                                        </div>

                                        {/* Highlights */}
                                        <ul className={`space-y-2 text-sm text-muted ${index % 2 === 0 ? 'md:text-right' : ''
                                            }`}>
                                            {exp.highlights.map((highlight, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                                    <span>{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Empty column for alternating layout */}
                                {index % 2 === 0 && <div className="hidden md:block" />}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}
