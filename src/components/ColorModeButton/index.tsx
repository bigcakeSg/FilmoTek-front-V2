import { HiMoon, HiSun } from 'react-icons/hi';
import { colorModeButton } from './colorModeButton.styles';
import useColorModeStore from '@stores/colorMode.store';

export default function ColorModeButton() {
  const { toggleColorMode, colorMode } = useColorModeStore();

  return (
    <div className={colorModeButton}>
      <button onClick={() => toggleColorMode()}>
        {colorMode === 'dark' ? <HiMoon size={24} /> : <HiSun size={24} />}
      </button>
    </div>
  );
}
