import { useColorMode } from '@/hooks/colorMode.hook';
import { useTranslation } from 'react-i18next';

export default function ConfigTools() {
  const { i18n } = useTranslation();
  const { toggleColorMode } = useColorMode();

  const handleToggleLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
  };

  return (
    <div>
      <button onClick={() => toggleColorMode()}>Dark/Light Mode</button> |{' '}
      <button onClick={() => handleToggleLang()}>Language</button>
    </div>
  );
}
