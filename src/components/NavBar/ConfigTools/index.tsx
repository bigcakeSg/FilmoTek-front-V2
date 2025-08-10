import UserAvatar from '@components/UserAvatar';
import { configTools } from './configTools.styles';
import MenuLang from '@components/MenuLang';
import ColorModeButton from '@components/ColorModeButton';
import FilterTextfield from '@/components/FilterComponents/FilterTextfield';

export default function ConfigTools() {
  return (
    <div className={configTools}>
      <FilterTextfield />
      <UserAvatar />
      <MenuLang />
      <ColorModeButton />
    </div>
  );
}
