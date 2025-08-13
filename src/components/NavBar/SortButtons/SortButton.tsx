import { SortName } from '@/interfaces/filterSort.interface';
import { useLocation, useNavigate } from '@tanstack/react-router';
import { sortArrow, sortButton } from './sortButtons.styles';
import { IoIosArrowRoundUp, IoIosArrowRoundDown } from 'react-icons/io';

export default function SortButton({
  label,
  sortName
}: Readonly<{
  label: string;
  sortName: SortName;
}>) {
  const navigate = useNavigate({ from: '/' });
  const { search } = useLocation();

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
    <button className={sortButton} onClick={handleSortChange}>
      {label}{' '}
      <div className={sortArrow}>
        {actualSortBy === sortName && (
          <span>
            {actualDirection === 'desc' ? (
              <IoIosArrowRoundDown />
            ) : (
              <IoIosArrowRoundUp />
            )}
          </span>
        )}
      </div>
    </button>
  );
}
