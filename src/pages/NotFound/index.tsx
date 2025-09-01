import { Link } from '@tanstack/react-router';
import { backButton, notFoundContainer } from './notFound.styles';
import bigMistake from '@assets/big-mistake.gif';

export default function NotFound() {
  // TODO:
  return (
    <div
      style={{
        backgroundImage: `url(${bigMistake})`
      }}
      className={notFoundContainer}
    >
      <div className="not-found">
        Page <span className="not">not</span> found
      </div>
      <div className="mistake">Big mistake!</div>
      <div>
        <Link className={backButton} to="/">
          Go back to home
        </Link>
      </div>
    </div>
  );
}
