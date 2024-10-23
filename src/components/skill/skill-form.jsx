/* eslint-disable react/prop-types */
import { Button } from '@/components/ui/button';
import { useForm, useFieldArray, FormProvider } from 'react-hook-form';
import { useEffect } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import FieldArraySection from '@/components/form/fieldArrayInput';
import { useUpdateSkill } from '@/hooks/skill.hook';

const SkillForm = ({ skill, isUpdate = false, setIsOpen }) => {
  const methods = useForm({});

  const { mutate: updateSkill, isPending: updatePending } = useUpdateSkill();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  const {
    fields: frontendFields,
    append: appendFrontend,
    remove: removeFrontend,
  } = useFieldArray({
    control,
    name: 'frontend',
  });

  const {
    fields: backendFields,
    append: appendBackend,
    remove: removeBackend,
  } = useFieldArray({
    control,
    name: 'backend',
  });
  const {
    fields: softSkillFields,
    append: appendSoftSkill,
    remove: removeSoftSkill,
  } = useFieldArray({
    control,
    name: 'softSkill',
  });

  // Reset the form when new project are provided (useful for edit mode)
  useEffect(() => {
    if (isUpdate) {
      reset({
        frontend: skill?.frontend || [],
        backend: skill?.backend || [],
        softSkill: skill?.softSkill || [],
      });
    }
  }, [skill, reset, isUpdate]);

  // Unified handleAppend function for both features and technology
  const handleAppend = (type) => {
    if (type === 'frontend') appendFrontend();
    if (type === 'backend') appendBackend();
    if (type === 'softSkill') appendSoftSkill();
  };

  const onSubmit = (data) => {
    console.log(data);
    if (isUpdate) {
      updateSkill(
        {
          data,
        },
        {
          onSuccess: () => {
            setIsOpen(false);
          },
        }
      );

      return;
    }
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className='max-w-[900px]'>
          <div className='flex gap-8 mt-8 w-full'>
            <FieldArraySection
              title='Frontend'
              fields={frontendFields}
              appendField={() => handleAppend('frontend')}
              removeField={removeFrontend}
              fieldName='frontend'
              error={errors.frontend}
            />

            <FieldArraySection
              title='Backend'
              fields={backendFields}
              appendField={() => handleAppend('backend')}
              removeField={removeBackend}
              fieldName='backend'
              error={errors.backend}
            />
            <FieldArraySection
              title='Soft skills'
              fields={softSkillFields}
              appendField={() => handleAppend('softSkill')}
              removeField={removeSoftSkill}
              fieldName='softSkill'
              error={errors.softSkill}
            />
          </div>
          <Button className='mt-4 w-20'>
            {updatePending ? (
              <RotatingLines
                height='15'
                width='15'
                radius='5'
                strokeColor='#fff'
              />
            ) : (
              'Update'
            )}
          </Button>
        </form>
      </FormProvider>
    </>
  );
};

export default SkillForm;
