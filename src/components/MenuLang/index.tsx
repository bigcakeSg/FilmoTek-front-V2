import { useState } from 'react';
import { Menu } from '@ark-ui/react/menu';
import { useTranslation } from 'react-i18next';
import enIcon from '@assets/en.png';
import frIcon from '@assets/fr.png';
import { langIcon, menuLang } from './menuLang.styles';

export type LangType = 'en' | 'fr';

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

export default function MenuLang() {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);

  const handleChangeLang = (newLang: LangType) => {
    i18n.changeLanguage(newLang);
    setLang(newLang);
  };

  return (
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
  );
}
