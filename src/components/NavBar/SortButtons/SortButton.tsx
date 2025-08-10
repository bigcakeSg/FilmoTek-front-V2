import { SortName } from '@/interfaces/filterSort.interface';
import { useNavigate, useSearch } from '@tanstack/react-router';

export default function SortButton({
  label,
  sortName
}: Readonly<{
  label: string;
  sortName: SortName;
}>) {
  const navigate = useNavigate({ from: '/' });
  const search = useSearch({
    from: '/'
  });

  const actualSortBy = search.sortBy || 'releaseDate';
  const actualDirection = search.direction || 'asc';

  const handleSortChange = () => {
    const newDirection =
      actualSortBy === sortName && actualDirection === 'asc' ? 'desc' : 'asc';
    navigate({
      search: { ...search, sortBy: sortName, direction: newDirection }
    });
  };

  return (
    <button onClick={handleSortChange}>
      {label}{' '}
      {actualSortBy === sortName && (
        <span>{actualDirection === 'desc' ? '↓' : '↑'}</span>
      )}
    </button>
  );
}
