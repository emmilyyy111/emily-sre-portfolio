import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  // Your projects data, you can use an array to map through them
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Description of Project 1...',
      // Other project details
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
