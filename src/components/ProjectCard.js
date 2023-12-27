import React from 'react';

const ProjectCard = ({ project }) => {
  const { title, description } = project;

  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      {/* Other project details */}
    </div>
  );
};

export default ProjectCard;
