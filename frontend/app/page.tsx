import Link from 'next/link';
import AddPerson from './components/person/addPerson';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center  p-24'>
      <h1 className='text-3xl mb-8'>Add Person</h1>
      <Link
        href='/persons'
        className='bg-black rounded text-white px-4 py-2 mb-12'
      >
        View All List
      </Link>
      <AddPerson />
    </main>
  );
}
