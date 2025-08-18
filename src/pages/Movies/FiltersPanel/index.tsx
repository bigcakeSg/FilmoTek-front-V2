import { Dispatch, SetStateAction, useEffect } from 'react';
import ButtonComponent from '@/components/ui/ButtonComponent';
import CheckboxComponent from '@/components/ui/CheckboxComponent';
import { useCollections } from '@/hooks/collections.hook';
import useUiStore from '@/stores/ui.store';
import { useLocation, useNavigate } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import {
  groupFilters,
  collectionsForm,
  collectionsTitles,
  filters,
  filtersButtons,
  filtersPanel,
  supportsFilters
} from './filtersPanel.styles';
import { filtersMap } from './filters.helpers';

interface FiltersPanelProps {
  dirtyFilters: Record<string, string[] | undefined>;
  setDirtyFilters: Dispatch<
    SetStateAction<Record<string, string[] | undefined>>
  >;
  searchFilters: Record<string, string[] | undefined>;
  setSearchFilters: Dispatch<
    SetStateAction<Record<string, string[] | undefined>>
  >;
}

export default function FiltersPanel({
  dirtyFilters,
  setDirtyFilters,
  searchFilters,
  setSearchFilters
}: Readonly<FiltersPanelProps>) {
  const { t } = useTranslation();
  const navigate = useNavigate({ from: '/' });
  const { search } = useLocation();
  const { data: collections } = useCollections();
  const { closeTopPanel } = useUiStore();

  const watchedId = collections.find(
    (c) => c.name === 'collection.watched'
  )?._id;

  const pinnedId = collections.find((c) => c.name === 'collection.pinned')?._id;

  const favoriteId = collections.find(
    (c) => c.name === 'collection.favorite'
  )?._id;

  useEffect(() => {
    setSearchFilters(filtersMap(search.filter || []));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search.filter]);

  // TODO: start date, end date, name, genre
  return (
    <div className={filtersPanel}>
      <div className={filters}>
        <div className={groupFilters}>
          <h2 className={collectionsTitles}>{t('filters.collections')}</h2>
          <div className={collectionsForm}>
            {watchedId && (
              <div className="watched">
                <CheckboxComponent
                  label={t('tileTooltip.notWatched')}
                  checked={!!searchFilters?.notcollection?.includes(watchedId)}
                  onChange={(checked) => {
                    setSearchFilters((prevState) => {
                      const notCollection = [
                        ...(prevState.notcollection || [])
                      ];

                      return {
                        ...prevState,
                        notcollection: checked
                          ? [...notCollection, watchedId]
                          : notCollection.filter((id) => id !== watchedId)
                      };
                    });
                  }}
                />
                <CheckboxComponent
                  label={t('tileTooltip.watched')}
                  checked={!!searchFilters?.collection?.includes(watchedId)}
                  onChange={(checked) => {
                    setSearchFilters((prevState) => {
                      const collection = [...(prevState.collection || [])];

                      return {
                        ...prevState,
                        collection: checked
                          ? [...collection, watchedId]
                          : collection.filter((id) => id !== watchedId)
                      };
                    });
                  }}
                />
              </div>
            )}
            {pinnedId && (
              <div className="pinned">
                <CheckboxComponent
                  label={t('tileTooltip.notPinned')}
                  checked={!!searchFilters?.notcollection?.includes(pinnedId)}
                  onChange={(checked) => {
                    setSearchFilters((prevState) => {
                      const notCollection = [
                        ...(prevState.notcollection || [])
                      ];

                      return {
                        ...prevState,
                        notcollection: checked
                          ? [...notCollection, pinnedId]
                          : notCollection.filter((id) => id !== pinnedId)
                      };
                    });
                  }}
                />
                <CheckboxComponent
                  label={t('tileTooltip.pinned')}
                  checked={!!searchFilters?.collection?.includes(pinnedId)}
                  onChange={(checked) => {
                    setSearchFilters((prevState) => {
                      const collection = [...(prevState.collection || [])];

                      return {
                        ...prevState,
                        collection: checked
                          ? [...collection, pinnedId]
                          : collection.filter((id) => id !== pinnedId)
                      };
                    });
                  }}
                />
              </div>
            )}
            {favoriteId && (
              <div className="favorite">
                <CheckboxComponent
                  label={t('tileTooltip.notFavorite')}
                  checked={!!searchFilters?.notcollection?.includes(favoriteId)}
                  onChange={(checked) => {
                    setSearchFilters((prevState) => {
                      const notCollection = [
                        ...(prevState.notcollection || [])
                      ];

                      return {
                        ...prevState,
                        notcollection: checked
                          ? [...notCollection, favoriteId]
                          : notCollection.filter((id) => id !== favoriteId)
                      };
                    });
                  }}
                />
                <CheckboxComponent
                  label={t('tileTooltip.favorite')}
                  checked={!!searchFilters?.collection?.includes(favoriteId)}
                  onChange={(checked) => {
                    setSearchFilters((prevState) => {
                      const collection = [...(prevState.collection || [])];

                      return {
                        ...prevState,
                        collection: checked
                          ? [...collection, favoriteId]
                          : collection.filter((id) => id !== favoriteId)
                      };
                    });
                  }}
                />
              </div>
            )}
          </div>
        </div>
        <div className={groupFilters}>
          <h2 className={collectionsTitles}>{t('filters.supports')}</h2>
          <div className={supportsFilters}>
            <CheckboxComponent
              label="VHS"
              checked={!!searchFilters?.support?.includes('vhs')}
              onChange={(checked) => {
                setSearchFilters((prevState) => {
                  const support = [...(prevState.support || [])];

                  return {
                    ...prevState,
                    support: checked
                      ? [...support, 'vhs']
                      : support.filter((id) => id !== 'vhs')
                  };
                });
              }}
            />
            <CheckboxComponent
              label="Laserdisc"
              checked={!!searchFilters?.support?.includes('ld')}
              onChange={(checked) => {
                setSearchFilters((prevState) => {
                  const support = [...(prevState.support || [])];

                  return {
                    ...prevState,
                    support: checked
                      ? [...support, 'ld']
                      : support.filter((id) => id !== 'ld')
                  };
                });
              }}
            />
            <CheckboxComponent
              label="DVD"
              checked={!!searchFilters?.support?.includes('dvd')}
              onChange={(checked) => {
                setSearchFilters((prevState) => {
                  const support = [...(prevState.support || [])];

                  return {
                    ...prevState,
                    support: checked
                      ? [...support, 'dvd']
                      : support.filter((id) => id !== 'dvd')
                  };
                });
              }}
            />
            <CheckboxComponent
              label="Blu-Ray"
              checked={!!searchFilters?.support?.includes('bd')}
              onChange={(checked) => {
                setSearchFilters((prevState) => {
                  const support = [...(prevState.support || [])];

                  return {
                    ...prevState,
                    support: checked
                      ? [...support, 'bd']
                      : support.filter((id) => id !== 'bd')
                  };
                });
              }}
            />
            <CheckboxComponent
              label="Blu-Ray 4K UHD"
              checked={!!searchFilters?.support?.includes('uhd')}
              onChange={(checked) => {
                setSearchFilters((prevState) => {
                  const support = [...(prevState.support || [])];

                  return {
                    ...prevState,
                    support: checked
                      ? [...support, 'uhd']
                      : support.filter((id) => id !== 'uhd')
                  };
                });
              }}
            />
          </div>
        </div>
      </div>
      <div className={filtersButtons}>
        <ButtonComponent
          label={t('cancel')}
          onClick={() => {
            // TODO: rénitialiser les filtres (dirty state)
            setSearchFilters(dirtyFilters);
            closeTopPanel();
          }}
        />
        <div>
          <ButtonComponent
            label={t('filters.removeFilters')}
            version="secondary"
            onClick={() => {
              setSearchFilters((prevState) => {
                return Object.fromEntries(
                  Object.entries(prevState).filter(([key]) => key === 'title')
                );
              });
            }}
          />
          <ButtonComponent
            label={t('filters.filter')}
            onClick={() => {
              closeTopPanel();
              setDirtyFilters(searchFilters);
              navigate({
                search: {
                  ...search,
                  page: 1,
                  filter: Object.entries(searchFilters)
                    // filter out empty values
                    .filter((entrie) => {
                      return entrie?.[1]?.length;
                    })
                    // transform objects into string+string
                    .reduce<string[]>((acc, [key, value]) => {
                      if (value !== undefined && value !== null) {
                        acc.push(`${key}+${value}`);
                      }
                      return acc;
                    }, [])
                }
              });
            }}
          />
        </div>
      </div>
    </div>
  );
}
