'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import { Project } from '@/types';

interface CaseStudyContentProps {
    project: Project;
}

export function CaseStudyContent({ project }: CaseStudyContentProps) {
    return (
        <>
            <Header />
            <main className="pt-20">
                {/* Hero */}
                <section className="py-20 bg-gradient relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent)]" />
                    </div>

                    <Container>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Link
                                href="/#projects"
                                className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Back to Projects
                            </Link>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                                {project.title}
                            </h1>

                            <p className="text-xl text-white/80 max-w-3xl">
                                {project.longDescription}
                            </p>

                            {/* Tech stack */}
                            <div className="flex flex-wrap gap-2 mt-8">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 text-sm font-medium rounded-full bg-white/10 text-white border border-white/20"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            {(project.liveUrl || project.githubUrl) && (
                                <div className="flex gap-4 mt-8">
                                    {project.liveUrl && (
                                        <Button
                                            href={project.liveUrl}
                                            variant="secondary"
                                            className="bg-white text-gray-900 hover:bg-white/90"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            View Live
                                        </Button>
                                    )}
                                    {project.githubUrl && (
                                        <Button
                                            href={project.githubUrl}
                                            variant="outline"
                                            className="border-white/30 text-white hover:bg-white/10"
                                        >
                                            <Github className="w-4 h-4" />
                                            Source Code
                                        </Button>
                                    )}
                                </div>
                            )}
                        </motion.div>
                    </Container>
                </section>

                {/* Content sections */}
                <section className="py-20">
                    <Container size="small">
                        <div className="space-y-16">
                            {/* Problem */}
                            <FadeIn>
                                <div>
                                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 text-sm font-bold">
                                            1
                                        </span>
                                        The Problem
                                    </h2>
                                    <p className="text-lg text-muted leading-relaxed pl-11">
                                        {project.problem}
                                    </p>
                                </div>
                            </FadeIn>

                            {/* Solution */}
                            <FadeIn delay={0.1}>
                                <div>
                                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 text-sm font-bold">
                                            2
                                        </span>
                                        The Solution
                                    </h2>
                                    <p className="text-lg text-muted leading-relaxed pl-11">
                                        {project.solution}
                                    </p>
                                </div>
                            </FadeIn>

                            {/* Tech Stack Details */}
                            <FadeIn delay={0.2}>
                                <div>
                                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500 text-sm font-bold">
                                            3
                                        </span>
                                        Tech Stack
                                    </h2>
                                    <div className="pl-11 grid grid-cols-2 md:grid-cols-3 gap-3">
                                        {project.techStack.map((tech) => (
                                            <div
                                                key={tech}
                                                className="p-4 rounded-xl bg-card border border-card-border text-center font-medium"
                                            >
                                                {tech}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </FadeIn>

                            {/* Outcome */}
                            <FadeIn delay={0.3}>
                                <div>
                                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 text-sm font-bold">
                                            4
                                        </span>
                                        The Outcome
                                    </h2>
                                    <p className="text-lg text-muted leading-relaxed pl-11">
                                        {project.outcome}
                                    </p>
                                </div>
                            </FadeIn>
                        </div>

                        {/* CTA */}
                        <FadeIn delay={0.4}>
                            <div className="mt-20 p-8 rounded-2xl bg-gradient text-white text-center">
                                <h3 className="text-2xl font-bold mb-4">Interested in working together?</h3>
                                <p className="text-white/80 mb-6">Let&apos;s discuss how I can help with your next project.</p>
                                <Button
                                    href="/#contact"
                                    className="bg-white text-gray-900 hover:bg-white/90"
                                >
                                    Get in Touch
                                </Button>
                            </div>
                        </FadeIn>
                    </Container>
                </section>
            </main>
            <Footer />
        </>
    );
}
