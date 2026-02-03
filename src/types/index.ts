export interface Project {
    slug: string;
    title: string;
    description: string;
    longDescription: string;
    problem: string;
    solution: string;
    outcome: string;
    techStack: string[];
    image?: string;
    liveUrl?: string;
    githubUrl?: string;
    featured: boolean;
}

export interface Experience {
    id: string;
    role: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    highlights: string[];
}

export interface Skill {
    name: string;
    category: 'frontend' | 'backend' | 'tools';
}
