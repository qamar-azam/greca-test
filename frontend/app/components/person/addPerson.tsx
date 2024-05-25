'use client';

import { useMutation } from '@tanstack/react-query';
import Alert from '../alert/index';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './addPerson.schema';
import Input from '../input/index';
import Button from '../button/index';
import Dropdown from '../dropdown/index';
import { IFormInput, Person } from './addPerson.type';

function AddPerson() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInput>({
    resolver: yupResolver(schema)
  });

  const mutation = useMutation({
    mutationFn: (newPerson: Person) => {
      return fetch(`/persons`, {
        method: 'POST',
        body: JSON.stringify({ data: newPerson })
      }).then((res) => res.json());
    }
  });

  const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput) => {
    mutation.mutate({ ...data, slug: data.firstName });
  };

  return (
    <div className='w-1/3'>
      {mutation.data?.error && (
        <Alert status='error' message={mutation.data?.error?.message} />
      )}
      {mutation.isPending && (
        <Alert status='success' message={'Please wait...'} />
      )}
      {mutation.data?.data && (
        <Alert status='success' message={'hooray! Person successfully added'} />
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label='First Name'
          name='firstName'
          register={register}
          error={errors.firstName?.message}
          required
        />

        <Input
          label='Email'
          name='email'
          register={register}
          error={errors.email?.message}
          required
        />

        <Dropdown
          label='Age Group'
          name='age'
          register={register}
          options={[
            { label: 'Adult', value: 'adult' },
            { label: 'Child', value: 'child' },
            { label: 'Infant', value: 'infant' }
          ]}
          error={errors.age?.message}
          required
        />

        <Input label='Address' name='address' register={register} required />

        <Button label='Submit' />
      </form>
    </div>
  );
}

export default AddPerson;
