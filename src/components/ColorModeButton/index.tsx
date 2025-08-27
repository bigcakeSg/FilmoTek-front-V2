import { useColorMode } from '@hooks/colorMode.hook';
import { HiMoon, HiSun } from 'react-icons/hi';
import { colorModeButton } from './colorModeButton.styles';

export default function ColorModeButton() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <div className={colorModeButton}>
      <button onClick={() => toggleColorMode()}>
        {colorMode === 'dark' ? <HiMoon size={24} /> : <HiSun size={24} />}
      </button>
    </div>
  );
}
