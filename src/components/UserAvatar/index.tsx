import PopoverComponent from '@components/ui/PopoverComponent';
import AvatarIcon from './AvatarIcon';
import AuthProvider from '../AuthProvider';
import UserInfos from '../AuthProvider/UserInfos';
import { userAvatar } from './userAvatar.styles';

export default function UserAvatar() {
  return (
    <div>
      <PopoverComponent trigger={<AvatarIcon />}>
        <div className={userAvatar}>
          <AuthProvider>
            <UserInfos />
          </AuthProvider>
        </div>
      </PopoverComponent>
    </div>
  );
}
