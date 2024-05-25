import List from '../components/person/list';

export type Person = {
  id: number;
  attributes: {
    firstName: string;
    email: string;
    address: string;
    age: 'adult' | 'child' | 'infant';
  };
};

async function getData() {
  const res = await fetch(`${process.env.BACKEND_URL}/api/people`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

async function Page() {
  const { data }: { data: Person[] } = await getData();

  return (
    <main className='w-[1000px] m-auto p-24'>
      <h1 className='text-3xl mb-12'>Person List</h1>

      {data.length === 0 ? <p>No Record Found</p> : <List data={data} />}
    </main>
  );
}

export default Page;
