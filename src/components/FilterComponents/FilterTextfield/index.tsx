import { useEffect, useState } from 'react';
import TextfieldComponent from '@components/ui/TextfieldComponent';
import { filterTextField } from './filterTextField.styles';
import { useDebounce } from 'use-debounce';
import { useNavigate, useSearch } from '@tanstack/react-router';
import { HiSearch } from 'react-icons/hi';

export default function FilterTextfield() {
  const navigate = useNavigate({ from: '/' });
  const search = useSearch({ from: '/' });

  const [isFieldChanged, setIsFieldChanged] = useState(false);
  const [fieldValue, setFieldValue] = useState(() => {
    if (Array.isArray(search.filter)) {
      const titleFilter =
        search.filter.find((f) => f.startsWith('title+')) || '+';
      return titleFilter.split('+')[1];
    }

    return '';
  });
  const [searchValue] = useDebounce(fieldValue, 500);

  useEffect(() => {
    navigate({
      search: {
        ...search,
        page: isFieldChanged ? 1 : search.page,
        filter: [`title+${searchValue}`]
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  return (
    <div className={filterTextField}>
      <TextfieldComponent
        value={fieldValue}
        onChange={(val) => {
          setIsFieldChanged(true);
          setFieldValue(val);
        }}
      />
      <HiSearch size={24} />
    </div>
  );
}
