import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from '@tanstack/react-router';
import { useDebounce } from 'use-debounce';
import { Field } from '@ark-ui/react/field';
import { filterTextField } from './filterTextField.styles';
import { HiSearch } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';

export default function FilterTextfield() {
  const { t } = useTranslation();
  const navigate = useNavigate({ from: '/' });
  const { search } = useLocation();

  const [isFieldChanged, setIsFieldChanged] = useState(false);
  const [fieldValue, setFieldValue] = useState(() => {
    const titleFilter = search.filter
      ? search.filter.find((f) => f.startsWith('title+')) || '+'
      : '+';
    return titleFilter.split('+')[1];
  });
  const [isFieldOpen, setIsFieldOpen] = useState(fieldValue !== '');

  const [searchValue] = useDebounce(fieldValue, 500);

  useEffect(() => {
    navigate({
      search: {
        ...search,
        page: isFieldChanged ? 1 : search.page,
        filter: [
          `title+${searchValue}`,
          ...(search.filter?.filter((f) => !f.startsWith('title+')) || [])
        ]
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  useEffect(() => {
    const titleFilter = search.filter
      ? search.filter.find((f) => f.startsWith('title+')) || '+'
      : '+';

    setFieldValue(titleFilter.split('+')[1]);
  }, [search.filter]);

  const handleOpen = () => {
    setIsFieldOpen(true);
    const input = document.querySelector(
      `.textfield-container [data-scope="field"][data-part="input"]`
    );
    if (input) (input as HTMLInputElement).focus();
  };

  const handleClose = () => {
    setIsFieldOpen(false);
    setFieldValue('');
    const input = document.querySelector(
      `.textfield-container [data-scope="field"][data-part="input"]`
    );
    if (input) (input as HTMLInputElement).blur();
  };

  const handleChange = (value: string) => {
    setIsFieldChanged(true);
    setFieldValue(value);
  };

  return (
    <div className={filterTextField}>
      <div className={`textfield-container ${isFieldOpen ? 'open' : 'closed'}`}>
        {isFieldOpen && <HiSearch size={24} />}
        <Field.Root>
          <Field.Input
            value={fieldValue}
            onChange={(e) => handleChange(e.target.value)}
            placeholder={t('filters.search')}
          />
        </Field.Root>
        {isFieldOpen ? (
          <button onClick={handleClose}>
            <IoClose size={24} />
          </button>
        ) : (
          <button onClick={handleOpen}>
            <HiSearch size={24} />
          </button>
        )}
      </div>
    </div>
  );
}
