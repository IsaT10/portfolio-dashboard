import React from 'react';
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';
import ContentForm from './blog-form';
import { PencilLine } from 'lucide-react';

export function WriteBlogModal() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <DialogTrigger asChild>
        <button className='flex relative group items-center space-x-2 px-14 py-2 border border-primary rounded-md'>
          <span className='group-hover:text-primary text-lg font-medium'>
            Write new blog
          </span>
          <span className='absolute left-2'>
            <PencilLine strokeWidth={1.5} size={20} />
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className='md:max-w-[700px] rounded-md max-w-[90%]  max-h-[90vh] overflow-y-auto '>
        {/* <DialogHeader>
          <DialogTitle>Write blog</DialogTitle>
        </DialogHeader> */}
        <ContentForm setIsOpen={setIsOpen} />
      </DialogContent>
    </Dialog>
  );
}
