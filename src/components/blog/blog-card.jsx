/* eslint-disable react/prop-types */
import { useDeleteBlog } from '@/hooks/blog.hook';
import { Button } from '../ui/button';
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
import { EditBlogModal } from './edit-blog-modal';

export default function BlogCard({ blog }) {
  const { mutate: deleteBlog } = useDeleteBlog();
  const handleDeleteBlog = () => {
    deleteBlog(blog._id);
  };
  return (
    <div>
      <img
        className='h-[330px] w-full object-cover'
        src={blog.thumbnail}
        alt='thumbnail'
      />
      <p className='text-xl font-semibold my-6'>{blog.title}</p>
      {/* <p className='text-xl font-semibold my-6'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </p> */}

      <div className='flex gap-8 justify-between'>
        <EditBlogModal blog={blog} />

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button className='w-full py-5 border-primary  text-base'>
              Delete
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleDeleteBlog}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}
