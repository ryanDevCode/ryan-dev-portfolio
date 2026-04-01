import { Project, Experience, Skill } from '@/types';

export const projects: Project[] = [
    {
        slug: 'analytics-dashboard',
        title: 'Analytics Dashboard',
        description:
            'Built the full-stack analytics dashboard for a SaaS platform, enabling subscribed companies to track post and comment engagement in one place.',
        longDescription:
            'Built to give teams real visibility into content activity, this dashboard centralizes post and comment metrics in one place. The backend was built end-to-end — from data modeling to API design, with a focus on query efficiency and clean architecture that the frontend could build on confidently.',
        problem:
            'Engagement data was scattered across the database with no unified view. Existing queries were slow and difficult to extend, making reporting both painful and unreliable.',
        solution:
            'Designed aggregation logic in Ruby on Rails using optimized ActiveRecord queries, eliminating N+1 issues and structuring the API to support dynamic filters and chart data. Built the frontend in React and collaborated with the UI designer to translate designs into a polished, functional interface.',
        outcome:
            'Delivered a centralized dashboard that made content metrics actionable. Faster queries and a clean API layer reduced friction for future reporting iterations.',
        techStack: ['Ruby on Rails 5', 'PostgreSQL', 'React', 'JavaScript'],
        featured: true,
    },
    {
        slug: 'ai-post-summarization',
        title: 'AI-Powered Post Summarization',
        description:
            'Built a scheduled AI summarization system that automatically generates post summaries based on user-configured frequency, date range, and hashtag targeting.',
        longDescription:
            'Designed and implemented an end-to-end AI summarization feature integrated into a production Rails app. Users no longer need to manually filter and review posts to write a conclusion — the system does it automatically on a schedule. Users can configure which posts get summarized by setting a frequency, a date range, and assigning relevant hashtags to their posts, giving them fine-grained control over what gets summarized and when.',
        problem:
            'Users had to manually filter through posts and reviews to piece together a summary or conclusion — a time-consuming process with no automation in place. There was no structured way to surface insights from large volumes of content.',
        solution:
            "Built a scheduled background job system using Sidekiq and Redis that triggers AI summary generation via AWS Bedrock at configured intervals. Users can define the frequency and date range for summaries, and use the platform's hashtag system to tag which posts should be included in each summary run. The pipeline handles prompt engineering, async processing, and result storage within the existing Rails data model.",
        outcome:
            'Eliminated the need for manual post review by automating summary generation on a configurable schedule. Users gained a flexible, low-effort way to stay on top of content trends using hashtags and frequency settings.',
        techStack: ['Ruby on Rails', 'AWS Bedrock', 'Sidekiq', 'Redis', 'PostgreSQL'],
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
            'Built a full-stack analytics dashboard for a SaaS platform, designing aggregation queries, a clean API layer, and the React frontend in collaboration with the UI designer',
            'Built a scheduled AI summarization system using AWS Bedrock, Sidekiq, and Redis — allowing users to configure frequency, date range, and hashtag-based post targeting for automated summary generation',
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
    { name: 'AWS Bedrock', category: 'backend' },
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
