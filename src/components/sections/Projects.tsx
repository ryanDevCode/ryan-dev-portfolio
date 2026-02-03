'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Container } from '@/components/layout/Container';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/Card';
import { projects } from '@/data/projects';

export function Projects() {
    return (
        <Section id="projects" dark>
            <Container>
                <SectionHeader
                    title="Featured Projects"
                    subtitle="A selection of work I'm proud of"
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.filter(p => p.featured).map((project, index) => (
                        <motion.div
                            key={project.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link href={`/projects/${project.slug}`} className="block h-full">
                                <Card className="h-full flex flex-col group">
                                    {/* Image placeholder */}
                                    <div className="relative h-48 -mx-6 -mt-6 mb-4 rounded-t-2xl bg-gradient overflow-hidden">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-6xl opacity-20">
                                                {project.title.charAt(0)}
                                            </span>
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />

                                        {/* Hover overlay */}
                                        <motion.div
                                            className="absolute inset-0 bg-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                                        >
                                            <span className="flex items-center gap-2 text-white font-medium">
                                                View Case Study
                                                <ArrowUpRight className="w-4 h-4" />
                                            </span>
                                        </motion.div>
                                    </div>

                                    <CardHeader className="flex-grow">
                                        <CardTitle className="flex items-center justify-between">
                                            {project.title}
                                            <ArrowUpRight className="w-5 h-5 text-muted group-hover:text-primary transition-colors" />
                                        </CardTitle>
                                        <CardDescription>
                                            {project.description}
                                        </CardDescription>
                                    </CardHeader>

                                    <CardFooter className="flex-wrap gap-2">
                                        {project.techStack.slice(0, 4).map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 py-1 text-xs font-medium rounded-md bg-secondary text-muted"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.techStack.length > 4 && (
                                            <span className="px-2 py-1 text-xs font-medium rounded-md bg-secondary text-muted">
                                                +{project.techStack.length - 4}
                                            </span>
                                        )}
                                    </CardFooter>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
