import ConfigTools from './ConfigTools';
import {
  filmotekTitle,
  filters,
  navBar,
  navMainNav,
  navSecondaryNav
} from './navBar.styles';
import NavButtons from './NavButtons';
import FilterButton from './FilterButton';
import SortButtons from './SortButtons';
import { Link, useLocation } from '@tanstack/react-router';
import useRouteStore from '@/stores/route.store';

export default function NavBar() {
  const location = useLocation();
  const { page, sort, filter } = useRouteStore();

  return (
    <nav className={navBar}>
      <div className={navMainNav}>
        <Link
          className={filmotekTitle}
          to="/"
          search={{
            page,
            sortBy: sort.name,
            direction: sort.direction,
            filter: filter.map((f) => `${f.name}+${f.value}`)
          }}
        >
          <span className="filmo">Filmo</span>
          <span className="tek">TEK</span>
        </Link>
        <NavButtons />
      </div>
      <div className={navSecondaryNav}>
        <div>
          <ConfigTools path={location.pathname} />
        </div>
        <div className={filters}>
          {location.pathname === '/' && (
            <>
              <FilterButton />
              <SortButtons />
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
