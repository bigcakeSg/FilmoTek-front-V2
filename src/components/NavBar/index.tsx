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

export default function NavBar() {
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
          <ConfigTools />
        </div>
        <div className={filters}>
          <FilterButton />
          <SortButtons />
        </div>
      </div>
    </nav>
  );
}
