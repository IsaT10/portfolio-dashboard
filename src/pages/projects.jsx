/* eslint-disable react/prop-types */

import { AddProjectModal } from '@/components/project/add-projects-modal';
import ProjectCard from '@/components/project/project-card';
import { useGetProjects } from '@/hooks/project.hook';

const Projects = () => {
  const { data, isPending, error } = useGetProjects();

  const projects = data?.data?.result;
  return (
    <>
      <AddProjectModal />

      <h2 className='text-xl font-semibold my-10'>Projects</h2>

      <div className='grid  md:grid-cols-2 xl:grid-cols-3  gap-y-20  gap-x-14'>
        {projects?.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </>
  );
};

// Reusable FieldArraySection component for features and technology

export default Projects;
