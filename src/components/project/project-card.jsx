/* eslint-disable react/prop-types */
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
import { UpdateProjectModal } from './update-project-modal';
import { useDeleteProject } from '@/hooks/project.hook';

export default function ProjectCard({ project }) {
  const { mutate: deleteProject } = useDeleteProject();
  const handleDeleteProject = () => {
    deleteProject(project._id);
  };
  return (
    <div>
      <img
        className='h-[330px] w-full object-cover'
        src={project.coverImage}
        alt='thumbnail'
      />
      <p className='text-xl font-semibold my-6'>{project.title}</p>
      {/* <p className='text-xl font-semibold my-6'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </p> */}

      <div className='flex gap-8 justify-between'>
        <UpdateProjectModal project={project} />

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
              <AlertDialogAction onClick={handleDeleteProject}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}
