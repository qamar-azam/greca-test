type ButtonProps = {
  label: string;
};

export default function Button({ label }: ButtonProps) {
  return (
    <button type='submit' className='bg-black text-white w-full p-4 rounded'>
      {label}
    </button>
  );
}
