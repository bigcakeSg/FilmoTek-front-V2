import { Dialog } from '@ark-ui/react/dialog';
import { Portal } from '@ark-ui/react/portal';
import { moviePoster, moviePosterLarge } from './moviePicture.styles';

interface MoviePictureProps {
  picture: string;
  originalTitle: string;
}

const BASE_URL = import.meta.env.VITE_APP_API_BASE_URI;

export default function MoviePicture({
  picture,
  originalTitle
}: Readonly<MoviePictureProps>) {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <img
          src={`${BASE_URL}/media/posters/${picture}`}
          alt={originalTitle}
          className={moviePoster}
        />
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Description>
              <img
                className={moviePosterLarge}
                src={`${BASE_URL}/media/posters/${picture}`}
                alt={originalTitle}
              />
            </Dialog.Description>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
