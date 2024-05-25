import { Person } from '../../persons/page';

type ListProps = {
  data: Person[];
};

export default function List({ data }: ListProps) {
  return (
    <table className='w-full text-left text-gray-500 dark:text-gray-400'>
      <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
        <tr>
          <th className='px-6 py-3'>Name</th>
          <th className='px-6 py-3'>Email</th>
          <th className='px-6 py-3'>Age Group</th>
          <th className='px-6 py-3'>Address</th>
        </tr>
      </thead>
      <tbody>
        {data.map((person) => (
          <tr
            key={person.id}
            className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'
          >
            <td className='px-6 py-4'>{person.attributes.firstName}</td>
            <td className='px-6 py-4'>{person.attributes.email}</td>
            <td className='px-6 py-4'>{person.attributes.age}</td>
            <td className='px-6 py-4'>{person.attributes.address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
