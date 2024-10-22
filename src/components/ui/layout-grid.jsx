/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Trash2 } from 'lucide-react';
import { httpCall } from '@/lib/httpCall';
import { Api } from '@/lib/api';
import { toast } from './use-toast';

import { Icons } from '../icons';

export const LayoutGrid = ({ gallery, toggleTrigger }) => {
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [id, setId] = React.useState(null);

  const handleDeleteImage = async (id) => {
    setId(id);
    setIsDeleting(true);
    const res = await httpCall(Api.delete(`image-gallery/${id}`));

    setIsDeleting(false);
    if (!res?.success) {
      return toast({
        variant: 'destructive',
        title: 'Something went wrong.',
        description: "Couldn't delete gallery image. Please try again!",
      });
    }

    toggleTrigger();
    toast({
      title: 'Gallery image deleted successfully.',
      description: 'Your gallery image deleted successfully!',
    });
  };
  return (
    <div className=" w-full min-h-[30rem] grid grid-cols-1 md:grid-cols-2  max-w-7xl mx-auto gap-4 ">
      {gallery.images?.length
        ? gallery.images.map((img, i) => (
            <div key={i} className={cn(img.className, 'relative')}>
              <div
                className={cn(
                  img.className,
                  'relative overflow-hidden rounded-lg cursor-pointer inset-0 min-h-[15rem] w-full m-auto  flex justify-center items-center flex-wrap flex-col'
                )}
              >
                <BlurImage image={img} />
              </div>

              <button
                onClick={() => handleDeleteImage(img.id)}
                className="absolute top-2 rounded-full right-2 z-30 bg-stone-200 p-2 "
              >
                {isDeleting && id === img.id ? (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Trash2 color="black" size={20} />
                )}
              </button>
            </div>
          ))
        : null}

      <div
        className={cn(
          'absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10 pointer-events-none'
        )}
      />
    </div>
  );
};

const BlurImage = ({ image }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <img
      src={image.url}
      onLoad={() => setLoaded(true)}
      className={cn(
        'object-cover object-top absolute inset-0 h-full w-full transition duration-200',
        loaded ? 'blur-none' : 'blur-md'
      )}
      alt="thumbnail"
    />
  );
};
