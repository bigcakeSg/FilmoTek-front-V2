import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { HiSearch } from 'react-icons/hi';
import UserAvatar from '@components/UserAvatar';
import { configTools } from './configTools.styles';
import MenuLang from '@components/MenuLang';
import ColorModeButton from '@components/ColorModeButton';
import TextfieldComponent from '../ui/TextfieldComponent';
import { useNavigate, useSearch } from '@tanstack/react-router';

export default function ConfigTools() {
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
  console.log(isFieldChanged);
  return (
    <div className={configTools}>
      <div style={{ display: 'flex' }}>
        <TextfieldComponent
          value={fieldValue}
          onChange={(val) => {
            setIsFieldChanged(true);
            setFieldValue(val);
          }}
        />
        <HiSearch size={24} />
      </div>
      <UserAvatar />
      <MenuLang />
      <ColorModeButton />
    </div>
  );
}
