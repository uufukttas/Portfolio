// components/ProjectsPage.tsx
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// types/project.ts
export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
};

const projects: Project[] = [
    { id: 1, title: 'Emoji Search', description: 'Basic emoji search with words', image: "/emoji.avif", link: "https://emojisearch-uufukttas.netlify.app/" },
    { id: 2, title: 'ToDo App', description: 'Todo app developed by typescript', image: "/todo.avif", link: "https://uufukttas-typescript-todo.netlify.app/" },
    { id: 3, title: 'Weather App', description: 'Dynamic weather app', image: "/weather.avif", link: "https://uufukttas-weather-app.netlify.app/" },
    { id: 4, title: 'Giphy Finder', description: 'Various giphy finder for everything', image: "/giphy.avif", link: "https://uufukttas-giphy-finder.netlify.app/" },
    { id: 5, title: 'Image Slider', description: 'Image slider without any library', image: "/slider.avif", link: "https://uufukttas-image-slider.netlify.app/" },
];

const ProjectsPage: React.FC = () => {
    return (
        <div className="container py-12 mx-auto h-full">
            <div className="flex mx-auto flex-wrap justify-center">
                {projects.map((project) => (
                    <div key={project.id} className="h-auto w-full md:w-1/3 flex justify-center p-4 md:p-0">
                        <div className="rounded-lg shadow-lg h-full text-center my-2">
                            <Link href={project.link}>
                                <Image alt="Project" className="hover:scale-110" height={200} src={project.image} width={300} />
                                <div className="text-2xl font-bold my-4">{project.title}</div>
                                <div className="text-white-700">{project.description}</div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;
