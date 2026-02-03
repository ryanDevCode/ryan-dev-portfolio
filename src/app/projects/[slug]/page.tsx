import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { projects } from '@/data/projects';
import { CaseStudyContent } from './CaseStudyContent';

interface Props {
    params: Promise<{ slug: string }>;
}

// Generate static paths for all projects
export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

// Generate metadata for each project
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return {
            title: 'Project Not Found',
        };
    }

    return {
        title: `${project.title} | Case Study`,
        description: project.description,
    };
}

export default async function CaseStudyPage({ params }: Props) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return <CaseStudyContent project={project} />;
}
