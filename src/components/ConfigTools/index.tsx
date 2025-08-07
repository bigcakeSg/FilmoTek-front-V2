import { HiSearch } from 'react-icons/hi';
import UserAvatar from '@components/UserAvatar';
import { configTools } from './configTools.styles';
import MenuLang from '@components/MenuLang';
import ColorModeButton from '@components/ColorModeButton';

export default function ConfigTools() {
  return (
    <div className={configTools}>
      <button>
        <HiSearch size={24} />
      </button>
      <UserAvatar />
      <MenuLang />
      <ColorModeButton />
    </div>
  );
}
