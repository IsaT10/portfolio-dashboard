/* eslint-disable react/prop-types */
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { Button } from './ui/button';
import { MoreHorizontal } from 'lucide-react';
import { toast } from './ui/use-toast';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/config/firebase';

export function MailList({ items, toggleTrigger }) {
  const handleDelete = async (id) => {
    try {
      const docRef = doc(db, 'contact-data', id);

      await deleteDoc(docRef);

      toast({
        title: 'Message deleted successfully.',
        description: 'Your message deleted successfully!',
      });
      toggleTrigger();
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Something went wrong.',
        description: "Couldn't delete message. Please try again!",
      });
    }
  };

  return (
    <div className='flex flex-col gap-5  pt-0'>
      {items.map((data) => (
        <button
          key={data.id}
          className={cn(
            'flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-white'
          )}
        >
          <div className='flex w-full flex-col gap-1'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <div className='font-semibold'>{data.name}</div>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button aria-haspopup='true' size='icon' variant='ghost'>
                    <MoreHorizontal className='h-4 w-4' />
                    <span className='sr-only'>Toggle menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className='bg-white border shadow-sm rounded-lg p-1'
                  align='end'
                >
                  <DropdownMenuItem className='px-4 py-1.5 rounded-md hover:bg-stone-100 hover:outine-none'>
                    <a href={`mailto:${data.email}`}>Send mail</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => handleDelete(data.id)}
                    className='px-4 py-1.5 rounded-md hover:bg-stone-100'
                  >
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className='flex justify-between'>
              <div className='text-xs font-medium'>{data.email}</div>
              <div className={cn(' text-xs font-medium')}>
                {formatDistanceToNow(new Date(data.timestamp), {
                  addSuffix: true,
                })}
              </div>
            </div>
            <div className='text-xs font-medium mt-2'>{data.mobile}</div>
          </div>
          <div className=' text-xs text-muted-foreground leading-5'>
            {data.message}
          </div>
        </button>
      ))}
    </div>
  );
}
