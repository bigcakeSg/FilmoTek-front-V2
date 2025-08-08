import { Avatar } from '@ark-ui/react/avatar';
import useUserStore from '@/stores/user.store';
import noName from '@assets/noName.jpg';
import { avatar } from './avatar.styles';

export default function AvatarIcon() {
  const { user } = useUserStore();
  const BASE_URL = import.meta.env.VITE_APP_API_BASE_URI;

  return (
    <div className={avatar}>
      <Avatar.Root>
        <Avatar.Fallback>
          <img src={noName} alt="User not logged in" />
        </Avatar.Fallback>
        {user && (
          <Avatar.Image
            src={`${BASE_URL}/media/profile/${user.avatar}`}
            alt="avatar"
          />
        )}
      </Avatar.Root>
    </div>
  );
}
