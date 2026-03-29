import { Project, Experience, Skill } from '@/types';

export const projects: Project[] = [
    {
        slug: 'analytics-dashboard',
        title: 'Internal Analytics Dashboard',
        description:
            'Led backend development of an internal dashboard for tracking post and comment engagement across the platform.',
        longDescription:
            'Built to give teams real visibility into content activity, this dashboard centralizes post and comment metrics in one place. I owned the backend from data modeling to API design, with a focus on query efficiency and clean architecture that the frontend could build on confidently.',
        problem:
            'Engagement data was scattered across the database with no unified view. Existing queries were slow and difficult to extend, making reporting both painful and unreliable.',
        solution:
            'Designed aggregation logic in Ruby on Rails using optimized ActiveRecord queries, eliminating N+1 issues and structuring the API to support dynamic filters and chart data. Collaborated closely with the frontend team to define clear data contracts.',
        outcome:
            'Delivered a centralized dashboard that made content metrics actionable. Faster queries and a clean API layer reduced friction for future reporting iterations.',
        techStack: ['Ruby on Rails 5', 'PostgreSQL', 'React', 'JavaScript'],
        featured: true,
    },
    {
        slug: 'ai-post-summarization',
        title: 'AI-Powered Post Summarization',
        description:
            'Integrated an AI summarization feature into a production Rails app, improving content readability at scale.',
        longDescription:
            'Designed and implemented the backend pipeline for an AI-powered post summarization feature. I handled prompt preparation, API integration, and persisting results — ensuring the feature fit naturally into the existing data model and could be safely iterated on.',
        problem:
            'Long-form posts made it hard for users to scan content quickly. Manual curation wasn\'t viable at scale, and there was no automated solution in place.',
        solution:
            'Built backend logic to prepare post content, call an external AI API, and store summaries alongside existing records. Structured the implementation to be rollback-safe and testable without disrupting existing workflows.',
        outcome:
            'Shipped a live AI feature that improved content accessibility with no regressions, establishing a pattern for future AI integrations in the codebase.',
        techStack: ['Ruby on Rails', 'PostgreSQL', 'REST APIs'],
        featured: true,
    },
    {
        slug: 'legacy-rails-migration',
        title: 'Legacy Rails Migration',
        description:
            'Migrated and modernized legacy Rails 3 features as part of a production upgrade to Rails 5.',
        longDescription:
            'Part of an ongoing Rails 3-to-5 migration in a live production environment. My work focused on identifying deprecated patterns, refactoring controllers and models, and ensuring each migrated feature remained stable without requiring downtime or data loss.',
        problem:
            'The legacy codebase had accumulated years of technical debt — outdated conventions, deprecated APIs, and slow queries that made new development risky and slow.',
        solution:
            'Migrated features incrementally, refactoring controllers, models, and scopes to align with Rails 5 conventions. Optimized ActiveRecord queries and addressed N+1 problems uncovered during the migration.',
        outcome:
            'Reduced regression risk while improving performance and maintainability, enabling the team to build on a stable, modern foundation.',
        techStack: ['Ruby on Rails 5', 'PostgreSQL', 'ActiveRecord'],
        featured: false,
    },
];


export const experiences: Experience[] = [
    {
        id: '1',
        role: 'Web Developer',
        company: 'Squadzip',
        location: 'Remote',
        startDate: '2024',
        endDate: 'Present',
        highlights: [
            'Led backend development for an internal analytics dashboard, designing aggregation queries and a clean API layer for frontend integration',
            'Built and shipped an AI-powered post summarization feature, owning backend design, external API integration, and safe data persistence',
            'Migrated legacy Rails 3 features to Rails 5, refactoring controllers and models while minimizing regression risk in production',
            'Identified and resolved N+1 query issues across multiple modules, improving overall application performance',
            'Refactored existing code for readability and maintainability, reducing complexity in critical parts of the codebase',
        ],
    },
    {
        id: '2',
        role: 'Freelance Web Developer',
        company: 'Self-Employed',
        location: 'Remote',
        startDate: '2022',
        endDate: '2024',
        highlights: [
            'Built and delivered web applications end-to-end for independent clients and academic projects',
            'Implemented features across the full stack — from UI components to backend logic and database queries',
            'Iterated on projects based on feedback, debugging and refining until requirements were met',
        ],
    },
];


export const skills: Skill[] = [
    // Frontend
    { name: 'React', category: 'frontend' },
    { name: 'JavaScript', category: 'frontend' },
    { name: 'TypeScript', category: 'frontend' },
    { name: 'Next.js', category: 'frontend' },
    { name: 'Tailwind CSS', category: 'frontend' },
    { name: 'HTML/CSS', category: 'frontend' },
    { name: 'Framer Motion', category: 'frontend' },
    { name: 'Shadcn UI', category: 'frontend' },
    { name: 'Lucide React', category: 'frontend' },
    { name: 'Bootstrap', category: 'frontend' },
    { name: 'Zurb Foundation', category: 'frontend' },
    { name: 'Material-UI', category: 'frontend' },

    // Backend
    { name: 'Ruby on Rails', category: 'backend' },
    { name: 'Ruby', category: 'backend' },
    { name: 'Laravel', category: 'backend' },
    { name: 'PHP', category: 'backend' },
    { name: 'Node.js', category: 'backend' },
    { name: 'PostgreSQL', category: 'backend' },
    { name: 'REST APIs', category: 'backend' },
    { name: 'Redis', category: 'backend' },
    { name: 'Sidekiq', category: 'backend' },
    { name: 'Heroku', category: 'backend' },
    { name: 'AWS', category: 'backend' },
    { name: 'Firebase', category: 'backend' },


    // Tools
    { name: 'Git', category: 'tools' },
    { name: 'Docker', category: 'tools' },
    { name: 'GitHub Actions', category: 'tools' },
    { name: 'VS Code', category: 'tools' },
    { name: 'Figma', category: 'tools' },
    { name: 'Linux', category: 'tools' },
];
