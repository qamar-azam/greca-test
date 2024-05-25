import { UseFormRegister } from 'react-hook-form';

interface Option {
  label: string;
  value: string;
}

type DropdownProps = {
  label: string;
  register: UseFormRegister;
  name: string;
  options: Option[];
  required: boolean;
  error?: string;
};

export default function Dropdown({
  label,
  name,
  register,
  options,
  error,
  required
}: DropdownProps) {
  return (
    <div className='mb-4'>
      <label>{label}</label>

      <select
        className='block border rounded px-4 py-3 w-full'
        {...register(name, { required })}
      >
        <option value=''>Please select</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className='text-red-600 text-sm mt-2'>{error}</p>}
    </div>
  );
}
