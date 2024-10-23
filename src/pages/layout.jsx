/* eslint-disable react/prop-types */
import { SidebarNav } from '@/components/sidebar-nav';

const sidebarNavItems = [
  { title: 'Blogs', to: '/' },
  { title: 'Projects', to: '/projects' },
  { title: 'Skills', to: '/skills' },
];

export default function Layout({ children, container }) {
  return (
    <>
      <div className=' space-y-6  block'>
        <div className='relative flex  flex-col divide-x  space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0 '>
          <aside className='-mx-4  lg:w-[20%] xl:w-[15%] lg:sticky top-0 lg:h-screen pl-10 lg:pr-0 pr-10'>
            <SidebarNav items={sidebarNavItems} />
          </aside>
          {container ? (
            <div className='flex-1 p-10 bg-stone-50  '>{children}</div>
          ) : (
            <div className='flex-1 p-10 bg-stone-50  '>{children}</div>
          )}
        </div>
      </div>
    </>
  );
}
