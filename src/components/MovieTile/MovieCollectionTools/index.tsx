import { movieCollectionTools } from './movieCollectionTools.styles';

interface MovieCollectionToolsProps {
  watched?: boolean;
  favorite?: boolean;
  pinned?: boolean;
}

export default function MovieCollectionTools({
  watched,
  favorite,
  pinned
}: Readonly<MovieCollectionToolsProps>) {
  return <div className={movieCollectionTools}></div>;
}
