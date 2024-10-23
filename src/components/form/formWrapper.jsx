/* eslint-disable react/prop-types */

import { FormProvider, useForm } from 'react-hook-form';

export default function FormWrapper({
  children,
  onSubmit,
  defaultValues,
  resolver,
}) {
  const formConfig = {};
  if (defaultValues) {
    formConfig['defaultValues'] = defaultValues;
  }
  if (resolver) {
    formConfig['resolver'] = resolver;
  }

  const methods = useForm(formConfig);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}
