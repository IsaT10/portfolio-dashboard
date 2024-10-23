import React from 'react';
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';
import { PencilLine } from 'lucide-react';
import ProjectForm from './project-form';

export function AddProjectModal() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <DialogTrigger asChild>
        <button className='flex relative group items-center space-x-2 px-14 py-2 border border-primary rounded-md'>
          <span className='group-hover:text-primary text-lg font-medium'>
            Add new project
          </span>
          <span className='absolute left-2'>
            <PencilLine strokeWidth={1.5} size={20} />
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className='md:max-w-[800px] rounded-md  max-h-[90vh] overflow-y-auto '>
        {/* <DialogHeader>
          <DialogTitle>Write blog</DialogTitle>
        </DialogHeader> */}
        <ProjectForm setIsOpen={setIsOpen} />
      </DialogContent>
    </Dialog>
  );
}
