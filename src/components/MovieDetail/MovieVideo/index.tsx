import ReactPlayer from 'react-player';
import { videoPlayer } from './movieVideo.styles';

interface MovieVideoProps {
  video: string;
}

export default function MovieVideo({ video }: Readonly<MovieVideoProps>) {
  return (
    <div className={videoPlayer}>
      <ReactPlayer src={video} width="100%" height="100%" controls />
    </div>
  );
}
