/* eslint-disable react/prop-types */
import { UserAuthForm } from '@/components/user-auth-form';

export default function Login() {
  return (
    <>
      <div className='container relative min-h-screen h-[650px] flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
        <div className='relative hidden h-full flex-col bg-muted  text-white lg:flex dark:border-r'>
          <div className='absolute inset-0 bg-zinc-900 ' />
          <h2 className='relative z-20 text-xl font-medium h-screen flex-col flex items-center justify-center'>
            Next Gen Devs Dashboard.
          </h2>
        </div>
        <div className='lg:p-8'>
          <div className='mx-auto grid w-[350px] gap-6'>
            <div className='grid gap-2 text-center'>
              <h1 className='text-3xl font-bold mb-10'>Login</h1>
            </div>
            <UserAuthForm />
          </div>
        </div>
      </div>
    </>
  );
}
