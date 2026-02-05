import { Project, Experience, Skill } from '@/types';

export const projects: Project[] = [
    {
        slug: 'analytics-dashboard',
        title: 'Internal Analytics Dashboard',
        description:
            'Lead development of an internal analytics dashboard for visualizing posts, comments, and engagement metrics.',
        longDescription:
            'An internal dashboard built to help teams monitor post and comment activity across the platform. I led the backend design and implementation, focusing on data aggregation, query optimization, and maintainable architecture while supporting frontend visualization requirements.',
        problem:
            'The existing system lacked clear visibility into post and comment data. Metrics were scattered across the database, queries were inefficient, and there was no centralized way to analyze trends or engagement.',
        solution:
            'Designed and implemented backend data aggregation using Ruby on Rails, optimizing queries to support analytics use cases. Exposed structured data for frontend charts and filters, enabling dynamic dashboards for tracking posts, comments, and related metrics.',
        outcome:
            'Delivered a centralized analytics dashboard that provides clear visibility into platform activity. Improved performance and enabled faster iteration on reporting features.',
        techStack: ['Ruby on Rails 5', 'PostgreSQL', 'React', 'JavaScript'],
        featured: true,
    },
    {
        slug: 'ai-post-summarization',
        title: 'AI-Powered Post Summarization',
        description:
            'Lead development of an AI-powered feature that generates concise summaries for user-generated posts.',
        longDescription:
            'An ongoing feature designed to enhance content readability by automatically generating summaries for posts. I owned the technical design and backend integration, ensuring the feature fit seamlessly into the existing Rails application.',
        problem:
            'Long-form posts made it difficult for users to quickly understand content. Manual summarization was not scalable and introduced inconsistency.',
        solution:
            'Implemented backend logic to prepare post data, integrate AI-generated summaries, and persist results within the existing data model. Ensured the feature aligned with current workflows and could be iterated on safely.',
        outcome:
            'Introduced automated post summaries that improve content accessibility and user experience while maintaining system stability.',
        techStack: ['Ruby on Rails', 'PostgreSQL', 'REST APIs'],
        featured: true,
    },
    {
        slug: 'legacy-rails-migration',
        title: 'Legacy Rails Feature Migration',
        description:
            'Migration and modernization of legacy Rails 3 features as part of a Rails 5 upgrade.',
        longDescription:
            'A focused modernization effort involving the migration of legacy Rails 3 features to Rails 5. The work emphasized maintainability, performance, and minimizing regression risks in a production environment.',
        problem:
            'Legacy Rails 3 code was difficult to maintain, prone to performance issues, and incompatible with modern tooling.',
        solution:
            'Migrated existing features incrementally, refactored controllers and models, and optimized database queries while ensuring backward compatibility.',
        outcome:
            'Stabilized the codebase, improved performance, and enabled continued development on a modern Rails version.',
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
            'Acted as lead developer for internal analytics dashboards and AI-powered features',
            'Designed and built backend data aggregation to support dashboards for posts and comments',
            'Led the technical design and implementation of an AI-powered post summarization feature',
            'Maintained and migrated legacy Rails 3 features during the upgrade to Rails 5',
            'Refactored controllers and models to improve maintainability and readability',
            'Optimized ActiveRecord queries and resolved N+1 issues to improve performance',
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
            'Developed and improved web applications for freelance and academic projects',
            'Implemented frontend components and backend logic based on project requirements',
            'Debugged, refactored, and delivered features iteratively based on feedback',
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
