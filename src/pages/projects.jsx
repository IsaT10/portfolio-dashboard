/* eslint-disable react/prop-types */
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useFieldArray, FormProvider } from 'react-hook-form';
import FormInput from '@/components/form/formInput';
import { Cross, PlusCircle } from 'lucide-react';
import React, { useEffect } from 'react';
import { z } from 'zod';
import FormTextarea from '@/components/form/formTextarea';
import { Icons } from '@/components/icons';

const projectValidationSchema = z.object({
  title: z.string().min(1, { message: 'Title is required' }),
  description: z.string().min(1, { message: 'Description is required' }),
  liveLink: z.string().min(1, { message: 'Live link is required' }),
  githubClient: z
    .string()
    .min(1, { message: 'Github cliient link is required' }),
  githubServer: z
    .string()
    .min(1, { message: 'Github server link is required' }),
  technology: z
    .array(z.string().min(1, { message: 'Technology is required' }))
    .nonempty({ message: 'At least one technology is required' }),
  features: z
    .array(z.string().min(1, { message: 'Feature is required' }))
    .nonempty({ message: 'At least one feature is required' }),
});

const Projects = ({ defaultValues, isEdit = false }) => {
  const inputRef = React.useRef(null);
  const [imageFile, setImageFile] = React.useState(null);
  const methods = useForm({
    resolver: zodResolver(projectValidationSchema),
    defaultValues: {
      technology: ['sadas', 'asdas'] || [],
      features: defaultValues?.features || [],
      password: defaultValues?.password || '',
      location: defaultValues?.location || '',
    },
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  // Use useFieldArray for both technology and features fields
  const {
    fields: technologyFields,
    append: appendTechnology,
    remove: removeTechnology,
  } = useFieldArray({
    control,
    name: 'technology',
  });

  const {
    fields: featuresFields,
    append: appendFeature,
    remove: removeFeature,
  } = useFieldArray({
    control,
    name: 'features',
  });

  // Reset the form when new defaultValues are provided (useful for edit mode)
  useEffect(() => {
    if (isEdit) {
      reset({
        technology: ['sadas', 'asdas'] || [],
        features: defaultValues?.features || [],
        password: defaultValues?.password || '',
        location: defaultValues?.location || '',
      });

      // if (thumbnail) {
      //   setImageFile(thumbnail);
      // }
    }
  }, [defaultValues, reset, isEdit]);

  // Unified handleAppend function for both features and technology
  const handleAppend = (type) => {
    if (type === 'technology') appendTechnology();
    if (type === 'features') appendFeature();
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    const projectData = {
      ...data,
      technology: data.technology.map((tech) => tech),
      features: data.features.map((feat) => feat),
    };

    console.log(projectData);
    console.log(imageFile);

    formData.append('data', JSON.stringify(projectData));

    if (imageFile) {
      formData.append('image', imageFile);
    }
  };

  const handleOnChangeImage = (e) => {
    const imgFile = e.target.files[0];
    if (imgFile) {
      setImageFile(imgFile);
    }
  };

  const handleImage = () => {
    inputRef.current?.click();
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className='max-w-[900px]'>
        <div className='flex gap-10'>
          <div className='extraOutline border-primary border-[3px] border-dashed w-[400px] h-max mb-6 row-span-2  rounded-lg'>
            <div
              onClick={handleImage}
              className='file_upload h-[383px] relative rounded-lg cursor-pointer'
            >
              {imageFile ? (
                typeof imageFile === 'string' ? (
                  // If it's a URL, render it directly
                  <img
                    className='w-full h-[378px] object-cover rounded-md'
                    src={imageFile}
                    alt='Uploaded Thumbnail'
                  />
                ) : (
                  // If it's a file, create a URL for it
                  <img
                    className='w-full h-[378px] object-cover rounded-md'
                    src={URL.createObjectURL(imageFile)} // Only call this if it's a File
                    alt='Uploaded Thumbnail'
                  />
                )
              ) : (
                <div className='py-32'>
                  <svg
                    className='text-primary w-16 mx-auto '
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='1'
                      d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
                    />
                  </svg>
                  <p className='text-center text-primary tracking-tight text-xl sm:text-3xl'>
                    Choose a Thumbnail
                  </p>
                </div>
              )}
              <div className='input_field flex flex-col w-max mx-auto text-center'>
                <input
                  ref={inputRef}
                  onChange={handleOnChangeImage}
                  className='hidden' // Hide the input field
                  type='file'
                  accept='image/*' // Ensure only images are accepted
                />
              </div>
            </div>
          </div>
          <div className='flex-1 space-y-5'>
            <FormInput name='title' label='Title' />

            <FormTextarea label='Description' name='description' />
            <FormInput label='Live link' name='liveLink' />
            <FormInput label='Github client' name='githubClient' />
            <FormInput label='Github server' name='githubServer' />
          </div>
        </div>

        {/* Features Section */}
        <div className='flex gap-8 mt-8 w-full'>
          <FieldArraySection
            title='Features'
            fields={featuresFields}
            appendField={() => handleAppend('features')}
            removeField={removeFeature}
            fieldName='features'
            error={errors.features}
          />

          {/* Technology Section */}
          <FieldArraySection
            title='Technology'
            fields={technologyFields}
            appendField={() => handleAppend('technology')}
            removeField={removeTechnology}
            fieldName='technology'
            error={errors.technology}
          />
        </div>
        <Button type='submit'>Post</Button>
      </form>
    </FormProvider>
  );
};

// Reusable FieldArraySection component for features and technology
const FieldArraySection = ({
  title,
  fields,
  appendField,
  removeField,
  fieldName,
  error,
}) => {
  return (
    <div className='w-full'>
      <div className='flex justify-between items-center'>
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
};

export default Projects;
