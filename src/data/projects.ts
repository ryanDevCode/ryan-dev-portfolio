import { Project, Experience, Skill } from '@/types';

export const projects: Project[] = [
    {
        slug: 'analytics-dashboard',
        title: 'Analytics Dashboard',
        description: 'Real-time analytics dashboard with interactive charts and data visualization for tracking key business metrics.',
        longDescription: 'A comprehensive analytics dashboard built for a SaaS company to monitor user engagement, revenue metrics, and product usage patterns. The dashboard provides real-time updates and allows users to drill down into specific metrics.',
        problem: 'The client was using multiple disconnected tools to track their business metrics, leading to fragmented insights and delayed decision-making. They needed a unified dashboard that could aggregate data from various sources and present it in an actionable format.',
        solution: 'Built a React-based dashboard with modular chart components using Recharts. Implemented WebSocket connections for real-time data updates, custom filtering and date range selection, and exportable reports. The architecture follows a component-based design pattern for easy maintenance and feature additions.',
        outcome: 'Reduced time spent on manual reporting by 80%. The client now has instant access to all key metrics in one place, enabling faster data-driven decisions. The dashboard handles over 10,000 data points with smooth performance.',
        techStack: ['React', 'TypeScript', 'Recharts', 'WebSocket', 'Node.js', 'PostgreSQL'],
        featured: true,
    },
    {
        slug: 'ecommerce-admin-panel',
        title: 'E-commerce Admin Panel',
        description: 'Full-featured admin panel for managing products, orders, and customer data with role-based access control.',
        longDescription: 'A robust admin panel built for a mid-size e-commerce business to manage their entire product catalog, process orders, handle customer inquiries, and generate business reports.',
        problem: 'The existing admin interface was outdated, slow, and lacked essential features like bulk operations and proper access control. Staff members were spending excessive time on routine tasks that could be automated.',
        solution: 'Developed a modern React frontend with a Rails 5 API backend. Implemented role-based access control, bulk product operations, real-time order notifications, and comprehensive search and filtering. Used Sidekiq for background job processing and Redis for caching.',
        outcome: 'Order processing time reduced by 60%. Staff can now manage 3x more products with the same team size. The system successfully handles Black Friday traffic spikes without performance degradation.',
        techStack: ['React', 'Ruby on Rails 5', 'PostgreSQL', 'Redis', 'Sidekiq', 'AWS S3'],
        featured: true,
    },
    {
        slug: 'legacy-system-migration',
        title: 'Legacy System Migration',
        description: 'Complete migration of a Rails 3 application to Rails 7 with modernized architecture and improved performance.',
        longDescription: 'A comprehensive migration project to upgrade a legacy Rails 3 application to Rails 7, including database optimizations, API redesign, and frontend modernization.',
        problem: 'The client had a 10-year-old Rails 3 application that was becoming increasingly difficult to maintain. Security patches were no longer available, hosting costs were rising, and developer productivity was hampered by outdated tooling.',
        solution: 'Executed a phased migration approach: first upgrading through intermediate Rails versions, then modernizing the database schema, and finally rebuilding the frontend with React. Maintained backward compatibility throughout to ensure zero downtime.',
        outcome: 'Page load times improved by 70%. The application now runs on modern, supported infrastructure with complete test coverage. Deployment frequency increased from monthly to multiple times per week.',
        techStack: ['Ruby on Rails 7', 'React', 'PostgreSQL', 'Docker', 'GitHub Actions', 'Heroku'],
        featured: true,
    },
];

export const experiences: Experience[] = [
    {
        id: '1',
        role: 'Full-Stack Developer',
        company: 'Squadzip',
        location: 'Remote',
        startDate: '2024',
        endDate: 'Present',
        highlights: [
            'Built and maintained React dashboards for internal analytics tools',
            'Developed RESTful APIs using Ruby on Rails 5',
            'Implemented CI/CD pipelines reducing deployment time by 50%',
            'Collaborated with design team to create responsive, accessible interfaces',
        ],
    },
    // {
    //     id: '2',
    //     role: 'Junior Developer',
    //     company: 'Web Agency',
    //     location: 'Hybrid',
    //     startDate: '2021',
    //     endDate: '2023',
    //     highlights: [
    //         'Contributed to 10+ client projects using React and Rails',
    //         'Migrated legacy Rails 3 applications to modern versions',
    //         'Improved page performance through code optimization and caching strategies',
    //         'Mentored interns on React best practices',
    //     ],
    // },
    {
        id: '2',
        role: 'Freelance Developer',
        company: 'Self-Employed',
        location: 'Remote',
        startDate: '2020',
        endDate: '2021',
        highlights: [
            'Delivered custom web solutions for small businesses',
            'Built responsive landing pages and portfolio sites',
            'Integrated third-party APIs and custom features',
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
