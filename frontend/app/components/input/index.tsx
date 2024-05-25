import { UseFormRegister } from 'react-hook-form';

type InputProps = {
  label: string;
  register: UseFormRegister;
  name: string;
  required: boolean;
  error?: string;
};

export default function Input({
  label,
  name,
  register,
  error,
  required
}: InputProps) {
  return (
    <div className='mb-4'>
      <label>{label}</label>
      <input
        className='block border rounded px-4 py-3 w-full'
        {...register(name, { required })}
      />
      {error && <p className='text-red-600 text-sm mt-2'>{error}</p>}
    </div>
  );
}
