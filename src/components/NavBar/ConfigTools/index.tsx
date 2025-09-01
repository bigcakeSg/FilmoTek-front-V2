import UserAvatar from '@components/UserAvatar';
import MenuLang from '@components/MenuLang';
import ColorModeButton from '@components/ColorModeButton';
import FilterTextfield from '@components/FilterComponents/FilterTextfield';
import { configTools } from './configTools.styles';

interface ConfigToolsProps {
  path: string;
}

export default function ConfigTools({ path }: Readonly<ConfigToolsProps>) {
  return (
    <div className={configTools}>
      {path === '/' && <FilterTextfield />}
      <UserAvatar />
      <MenuLang />
      <ColorModeButton />
    </div>
  );
}
