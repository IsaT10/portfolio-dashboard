/* eslint-disable react/prop-types */
import { cn } from '@/lib/utils';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { toast } from './use-toast';
import { httpCall } from '@/lib/httpCall';
import { Api } from '@/lib/api';

export const BentoGrid = ({ className, children }) => {
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2 gap-6', className)}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  title,
  description,
  header,
  toggleTrigger,
}) => {
  const handleDeleteGallery = async (id) => {
    const res = await httpCall(Api.delete(`gallery/${id}`));

    if (!res?.success) {
      return toast({
        variant: 'destructive',
        title: 'Something went wrong.',
        description: "Couldn't delete gallery. Please try again!",
      });
    }

    toggleTrigger();
    toast({
      title: 'Gallery deleted successfully.',
      description: 'Your gallery deleted successfully!',
    });
  };
  return (
    <>
      <div
        className={cn(
          'row-span-1 rounded-xl group/bento transition duration-200 shadow-input dark:shadow-none p-4 bg-stone-100 border border-input justify-between flex flex-col space-y-4 relative ',
          className
        )}
      >
        <figure className="flex flex-1 w-full   rounded-xl">{header}</figure>

        {/* <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div> */}

        <div className="flex items-end ">
          <Link
            to={`/gallery/${id}`}
            className="group-hover/bento:translate-x-2 transition duration-200 flex-1"
          >
            <div className="font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
              {title}
            </div>
            <div className="font-normal text-neutral-600 text-xs dark:text-neutral-300">
              {description}
            </div>
          </Link>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="ml-5">Delete</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your Gallery.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={() => handleDeleteGallery(id)}>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </>
  );
};
