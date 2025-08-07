import PopoverComponent from '@components/ui/PopoverComponent';
import AvatarIcon from './AvatarIcon';
import AuthProvider from '../AuthProvider';
import UserInfos from '../AuthProvider/UserInfos';

export default function UserAvatar() {
  return (
    <div>
      <PopoverComponent trigger={<AvatarIcon />}>
        <AuthProvider>
          <UserInfos />
        </AuthProvider>
      </PopoverComponent>
    </div>
  );
}
