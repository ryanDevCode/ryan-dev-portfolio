'use client';

import { motion } from 'framer-motion';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Container } from '@/components/layout/Container';
import { skills } from '@/data/projects';
import { FadeIn } from '@/components/animations/FadeIn';

const categories = [
    { key: 'frontend', title: 'Frontend', color: 'from-blue-500 to-cyan-500' },
    { key: 'backend', title: 'Backend', color: 'from-purple-500 to-pink-500' },
    { key: 'tools', title: 'Tools & DevOps', color: 'from-orange-500 to-yellow-500' },
] as const;

export function Skills() {
    return (
        <Section id="skills">
            <Container>
                <SectionHeader
                    title="Skills & Technologies"
                    subtitle="The tools and technologies I work with"
                />

                <div className="grid md:grid-cols-3 gap-8">
                    {categories.map((category, categoryIndex) => {
                        const categorySkills = skills.filter(s => s.category === category.key);

                        return (
                            <FadeIn key={category.key} delay={categoryIndex * 0.1}>
                                <div className="p-6 rounded-2xl bg-card border border-card-border">
                                    {/* Category header */}
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className={`w-1 h-8 rounded-full bg-gradient-to-b ${category.color}`} />
                                        <h3 className="text-lg font-semibold">{category.title}</h3>
                                    </div>

                                    {/* Skills */}
                                    <div className="flex flex-wrap gap-2">
                                        {categorySkills.map((skill, skillIndex) => (
                                            <motion.span
                                                key={skill.name}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                className="px-4 py-2 text-sm font-medium rounded-xl bg-secondary hover:bg-secondary-hover transition-colors cursor-default"
                                            >
                                                {skill.name}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </FadeIn>
                        );
                    })}
                </div>
            </Container>
        </Section>
    );
}
