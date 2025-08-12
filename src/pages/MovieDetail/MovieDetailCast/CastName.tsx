import { Name } from '@/interfaces/movies.interfaces';
import { actorTile } from './movieDetailCast.styles';
import noName from '@assets/noName.jpg';

interface CastNameProps {
  actor: Name;
  type: 'principal' | 'extended';
}

const BASE_URL = import.meta.env.VITE_APP_API_BASE_URI;

export default function CastName({ actor, type }: Readonly<CastNameProps>) {
  return (
    <button className={actorTile({ type })}>
      <div
        className="actor-picture"
        style={{
          backgroundImage: actor.name.picture
            ? `url(${BASE_URL}/media/portraits/${actor.name.picture})`
            : `url(${noName})`
        }}
      ></div>
      <div>
        <div className="actor-name">{actor.name.text}</div>
        {actor.characters && (
          <div className="actor-characters">{actor.characters.join(' / ')}</div>
        )}
      </div>
    </button>
  );
}
