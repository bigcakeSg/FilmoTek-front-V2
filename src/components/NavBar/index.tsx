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
import { useLocation } from '@tanstack/react-router';

export default function NavBar() {
  const location = useLocation();

  return (
    <nav className={navBar}>
      <div className={navMainNav}>
        <div className={filmotekTitle}>
          <span className="filmo">Filmo</span>
          <span className="tek">TEK</span>
        </div>
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
