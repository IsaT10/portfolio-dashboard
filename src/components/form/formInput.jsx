/* eslint-disable react/prop-types */

import { useFormContext } from 'react-hook-form';
import { Input } from '../ui/input';

export default function FormInput({
  required = false,
  type = 'text',
  label,
  name,
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <label htmlFor={name} className='font-semibold '>
        {label}
      </label>
      <Input {...register(name)} required={required} type={type} />
      {errors ? (
        <span className='text-sm text-red-600'>{errors[name]?.message}</span>
      ) : (
        ''
      )}
    </div>
  );
}
