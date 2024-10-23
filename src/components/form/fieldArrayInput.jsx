import { Icons } from '../icons';
import FormInput from './formInput';

/* eslint-disable react/prop-types */
export default function FieldArraySection({
  title,
  fields,
  appendField,
  removeField,
  fieldName,
  error,
}) {
  return (
    <div className='w-full'>
      <div className='flex justify-between items-center  border-b border-stone-400 py-2.5 '>
        <h2 className='font-semibold'>{title}</h2>
        <button type='button' onClick={appendField}>
          <Icons.plus />
        </button>
      </div>
      {error && typeof error.message === 'string' && (
        <p className='text-red-500'>{error.message}</p>
      )}

      {fields.map((field, index) => (
        <div key={field.id} className='relative my-5 '>
          <FormInput name={`${fieldName}.${index}`} />
          <button
            className='absolute right-4 top-2 text-red-600'
            type='button'
            onClick={() => removeField(index)}
          >
            <Icons.trash />
          </button>
        </div>
      ))}
    </div>
  );
}
