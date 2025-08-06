import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu } from '@ark-ui/react/menu';
import { Avatar } from '@ark-ui/react/avatar';
import { HiSearch, HiMoon, HiSun } from 'react-icons/hi';
import { useColorMode } from '@/hooks/colorMode.hook';
import {
  avatar,
  colorModeButton,
  configTools,
  langIcon,
  menuLang
} from './configTools.styles';
import enIcon from '@assets/en.png';
import frIcon from '@assets/fr.png';
import noName from '@assets/noName.jpg';
import useUserStore from '@/stores/user.store';

type LangType = 'en' | 'fr';

const LangIcon = ({ lang }: Readonly<{ lang: LangType }>) => {
  return (
    <div className={langIcon}>
      {lang === 'fr' ? (
        <img src={frIcon} alt="Français" />
      ) : (
        <img src={enIcon} alt="English" />
      )}
    </div>
  );
};

const AvatarIcon = () => {
  const { user } = useUserStore();
  const BASE_URL = import.meta.env.VITE_APP_API_BASE_URI;

  return (
    <button className={avatar}>
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
    </button>
  );
};

export default function ConfigTools() {
  const { i18n } = useTranslation();
  const { toggleColorMode, colorMode } = useColorMode();
  const [lang, setLang] = useState(i18n.language); // TODO: utiliser un store global pour la langue et sauvegarder dans le localStorage

  const handleChangeLang = (newLang: LangType) => {
    i18n.changeLanguage(newLang);
    setLang(newLang);
  };

  return (
    <div className={configTools}>
      <button>
        <HiSearch size={24} />
      </button>
      <AvatarIcon />
      <div className={menuLang}>
        <Menu.Root
          positioning={{ placement: 'bottom' }}
          onSelect={(details) => {
            handleChangeLang(details.value as LangType);
          }}
        >
          <Menu.Trigger>
            {lang === 'en' ? <LangIcon lang="en" /> : <LangIcon lang="fr" />}
          </Menu.Trigger>
          <Menu.Positioner>
            <Menu.Content>
              <Menu.Item value="en">
                <LangIcon lang="en" />
              </Menu.Item>
              <Menu.Item value="fr">
                <LangIcon lang="fr" />
              </Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Menu.Root>
      </div>
      <div className={colorModeButton}>
        <button onClick={() => toggleColorMode()}>
          {colorMode === 'dark' ? <HiMoon size={24} /> : <HiSun size={24} />}
        </button>
      </div>
    </div>
  );
}
