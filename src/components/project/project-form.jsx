/* eslint-disable react/prop-types */
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useFieldArray, FormProvider } from 'react-hook-form';
import FormInput from '@/components/form/formInput';
import React, { useEffect } from 'react';
import FormTextarea from '@/components/form/formTextarea';
import { projectValidationSchema } from '@/schema/project-validation-schema';
import { useAddProject, useUpdateProject } from '@/hooks/project.hook';
import { RotatingLines } from 'react-loader-spinner';
import FieldArraySection from '@/components/form/fieldArrayInput';

const ProjectForm = ({ project, isUpdate = false, setIsOpen }) => {
  const inputRef = React.useRef(null);
  const [imageFile, setImageFile] = React.useState(null);
  const methods = useForm({
    resolver: zodResolver(projectValidationSchema),
  });

  const { mutate: addProject, isPending: createPending } = useAddProject();
  const { mutate: updateProject, isPending: updatePending } =
    useUpdateProject();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

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

  // Reset the form when new project are provided (useful for edit mode)
  useEffect(() => {
    if (isUpdate) {
      reset({
        technology: project?.technology || [],
        features: project?.features || [],
        title: project?.title || '',
        description: project?.description || '',
        liveLink: project?.liveLink || '',
        githubClient: project?.githubClient || '',
        githubServer: project?.githubServer || '',
      });

      if (project.coverImage) {
        setImageFile(project.coverImage);
      }
    }
  }, [project, reset, isUpdate]);

  // Unified handleAppend function for both features and technology
  const handleAppend = (type) => {
    if (type === 'technology') appendTechnology();
    if (type === 'features') appendFeature();
  };

  const onSubmit = (data) => {
    const formData = new FormData();

    formData.append('data', JSON.stringify(data));

    if (imageFile) {
      formData.append('image', imageFile);
    }

    if (isUpdate) {
      updateProject(
        {
          projectData: formData,
          projectId: project?._id,
        },
        {
          onSuccess: () => {
            setIsOpen(false);
          },
        }
      );

      return;
    }

    addProject(formData, {
      onSuccess: () => {
        setIsOpen(false);
      },
    });
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
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className='max-w-[900px]'>
          <div className='flex sm:flex-row flex-col gap-10'>
            <div className='extraOutline border-primary border-[3px] border-dashed flex-1 h-max mb-6 row-span-2  rounded-lg'>
              <div
                onClick={handleImage}
                className='file_upload h-[300px] sm:h-[383px] relative rounded-lg cursor-pointer'
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
                  <div className='py-24 sm:py-32'>
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
                    <p className='text-center text-primary tracking-tight text-xl sm:text-2xl'>
                      Choose a cover image
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
            <div className='flex-1 space-y-4 sm:space-y-5 '>
              <FormInput name='title' label='Title' />

              <FormTextarea label='Description' name='description' />
              <FormInput label='Live link' name='liveLink' />
            </div>
          </div>

          <div className='flex sm:flex-row mt-4 flex-col gap-4 sm:gap-10 w-full'>
            <div className='flex-1'>
              <FormInput label='Github client' name='githubClient' />
            </div>
            <div className='flex-1'>
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
          <Button className='mt-4 w-20'>
            {createPending || updatePending ? (
              <RotatingLines
                height='15'
                width='15'
                radius='5'
                strokeColor='#fff'
              />
            ) : (
              'Submit'
            )}
          </Button>
        </form>
      </FormProvider>
    </>
  );
};

// Reusable FieldArraySection component for features and technology

export default ProjectForm;
