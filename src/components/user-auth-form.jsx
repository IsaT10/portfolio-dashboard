/* eslint-disable react/prop-types */
import * as React from 'react';
import { useForm } from 'react-hook-form';

import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { AuthContext } from '@/provider/AuthProvider';
import { toast } from 'sonner';

export function UserAuthForm({ ...props }) {
  const [isToggle, setIsToggle] = React.useState(false);

  const { logIn } = React.useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: 'admin@gmail.com', // Default email value
      password: '123456', // Default password value
    },
  });
  const [isLoading, setIsLoading] = React.useState(false);

  async function onSubmit(data) {
    setIsLoading(true);
    const { email, password } = data;

    if (!email || !password) return;

    try {
      await logIn(email, password);

      toast.success('Login Successful! Welcome back!');
    } catch (error) {
      toast.error('Login failed! Invalid email or password.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={cn('grid gap-6')} {...props}>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete='off' noValidate>
        <div className='grid gap-4'>
          {/* Email Field */}
          <div className='grid gap-2'>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              placeholder='name@example.com'
              type='email'
              autoCapitalize='none'
              autoComplete='off'
              autoCorrect='off'
              disabled={isLoading}
              {...register('email', {
                required: 'Email is required',
              })}
            />
            {errors?.email && (
              <p className='px-1 text-sm text-red-600'>
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className='grid gap-2'>
            <div className='flex items-center'>
              <Label htmlFor='password'>Password</Label>
            </div>
            <div className='relative'>
              <Input
                id='password'
                type={isToggle ? 'text' : 'password'}
                {...register('password', {
                  required: 'Password is required',
                })}
              />
              <button
                className='absolute right-3 top-2'
                type='button'
                onClick={() => setIsToggle(!isToggle)}
              >
                {isToggle ? <Icons.eye /> : <Icons.eyeSlash />}
              </button>
            </div>
            {errors?.password && (
              <p className='px-1 text-sm text-red-600'>
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
            )}
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}
