/* eslint-disable react/prop-types */
import React from 'react';
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';
import { Button } from '../ui/button';
import ProjectForm from './project-form';

export function UpdateProjectModal({ project }) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Dialog open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <DialogTrigger asChild>
        <Button
          variant='outline'
          className='w-full py-5 border-primary  text-base'
        >
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className='md:max-w-[800px] rounded-md   max-h-[90vh] overflow-y-auto'>
        <ProjectForm project={project} isUpdate={true} setIsOpen={setIsOpen} />
      </DialogContent>
    </Dialog>
  );
}
