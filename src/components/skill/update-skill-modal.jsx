/* eslint-disable react/prop-types */
import React from 'react';
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';
import { Button } from '../ui/button';
import SkillForm from './skill-form';

export function UpdateSkillModal({ skill }) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Dialog open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <DialogTrigger asChild>
        <Button
          variant='outline'
          className='w-max py-5 border-primary  text-base'
        >
          Update skills
        </Button>
      </DialogTrigger>
      <DialogContent className='md:max-w-[800px] rounded-md   max-h-[90vh] overflow-y-auto'>
        <SkillForm skill={skill} isUpdate={true} setIsOpen={setIsOpen} />
      </DialogContent>
    </Dialog>
  );
}
