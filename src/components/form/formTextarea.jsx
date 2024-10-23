/* eslint-disable react/prop-types */
import { useFormContext } from 'react-hook-form';
import { Textarea } from '../ui/textarea';

export default function FormTextarea({ required = false, label, name }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <label htmlFor={name} className='font-semibold '>
        {label}
      </label>
      <Textarea {...register(name)} required={required} />
      {errors ? (
        <span className='text-sm text-red-600'>{errors[name]?.message}</span>
      ) : (
        ''
      )}
    </div>
  );
}
