/* eslint-disable react/prop-types */
import React from 'react';
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';
import ContentForm from './blog-form';
import { Button } from '../ui/button';

export function EditBlogModal({ blog }) {
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
      <DialogContent className='md:max-w-[700px] rounded-md max-w-[90%]  max-h-[90vh] overflow-y-auto'>
        <ContentForm blog={blog} isEdit={true} setIsOpen={setIsOpen} />
      </DialogContent>
    </Dialog>
  );
}
