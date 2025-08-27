import { Name } from '@interfaces/movies.interfaces';
import { actorTile } from './movieDetailCast.styles';
import noName from '@assets/noName.jpg';

interface CastNameProps {
  actor: Name & { characters: string[] };
  type: 'principal' | 'extended';
  onSelectName: (name: Name | null) => void;
}

const BASE_URL = import.meta.env.VITE_APP_API_BASE_URI;

export default function CastName({
  actor,
  type,
  onSelectName
}: Readonly<CastNameProps>) {
  return (
    <button onClick={() => onSelectName(actor)} className={actorTile({ type })}>
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
