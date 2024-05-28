import React from 'react';
import ProjectsPage from "../src/components/Projects"
import Main from '@/src/components/Main';
import "../app/globals.css";

const Projects: React.FC = () => {
  return (
    <div className="blog-page-container flex h-screen bg-black text-white">
      <Main>
        <ProjectsPage />
      </Main>
    </div>
  );
};

export default Projects;
