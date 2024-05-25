type AlertProps = {
  status: 'error' | 'success' | '';
  message: string;
};

export default function Alert({ status, message }: AlertProps) {
  const classes =
    status === 'error'
      ? 'text-red-600 border-red-600'
      : status === 'success'
      ? 'text-green-600 border-green-600'
      : 'border-black';
  return (
    <p className={`${classes} font-bold border  p-2 rounded mb-4`}>{message}</p>
  );
}
