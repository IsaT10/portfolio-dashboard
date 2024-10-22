/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

import { cn } from '@/lib/utils';
import { Button, buttonVariants } from '@/components/ui/button';

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
import { useContext } from 'react';
import { AuthContext } from '@/provider/AuthProvider';

export function SidebarNav({ className, items, ...props }) {
  const { logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut();
  };
  return (
    <nav
      className={cn(
        'flex space-x-2  lg:h-[95%] justify-between  lg:items-stretch items-end lg:flex-col lg:space-x-0 lg:space-y-1 ',
        className
      )}
      {...props}
    >
      <div>
        <div className='space-y-0.5'>
          <h2 className='text-2xl font-bold tracking-tight my-10 '>
            Dashboard.
          </h2>
        </div>
        <div className='flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-3'>
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                buttonVariants({ variant: 'ghost' }),
                'admins' === item.to
                  ? 'bg-muted hover:bg-bg-stone-100'
                  : 'hover:bg-stone-100',
                'justify-start',
                `${location.pathname === item.to ? 'bg-stone-100' : ''}`
              )}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <div className='flex flow-row lg:flex-col items-start gap-5 justify-between'>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              variant='ghost'
              className='text-left pl-4 font-medium flex gap-2 items-center hover:bg-stone-100'
            >
              Logout
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Logout</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to logout?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleLogout}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        {/* <Link to='/support'>
          <Button
            variant='ghost'
            className='text-left pl-4 font-medium flex gap-2 items-center hover:bg-stone-100'
          >
            Support
          </Button>
        </Link> */}
      </div>
    </nav>
  );
}
