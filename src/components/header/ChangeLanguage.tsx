import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Flag from 'react-world-flags';
import { styled } from 'styled-components';
import { useTranslation } from 'react-i18next';

interface ILanguage {
  code: string;
  value: string;
}

interface ILanguages {
  [key: string]: ILanguage;
}

const languages: ILanguages = {
  en: {
    code: 'gb',
    value: 'ENG',
  },
  ee: {
    code: 'ee',
    value: 'EE',
  },
  ru: {
    code: 'rus',
    value: 'RU',
  },
};

export default function ChangeLanguage() {
  const [language, setLanguage] = useState<ILanguage>(languages.en);
  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const pickLanguage = (language: string, value: ILanguage) => {
    changeLanguage(language);
    setLanguage(value);
  };

  return (
    <DropdownStyled>
      <ChooseLanguage variant="outline" id="dropdown-basic">
        <Flag code={language.code} height={16} />
        {language.value}
      </ChooseLanguage>

      <Dropdown.Menu>
        <Language onClick={() => pickLanguage('en', languages.en)}>
          <Flag code="gb" height={16} />
          ENG
        </Language>
        <Language onClick={() => pickLanguage('ee', languages.ee)}>
          <Flag code="ee" height={20.5} />
          EE
        </Language>
        <Language onClick={() => pickLanguage('ru', languages.ru)}>
          <Flag code="RUS" height={20.5} />
          RU
        </Language>
      </Dropdown.Menu>
    </DropdownStyled>
  );
}

const DropdownStyled = styled(Dropdown)`
  margin-top: 5px;
  display: flex;
  justify-content: center;
  @media (max-width: 802px) {
    margin-top: 15px;
  }
`;

const ChooseLanguage = styled(Dropdown.Toggle)`
  display: flex;
  align-items: center;
  gap: 6px;
  border: 1px solid #adadad;
`;

const Language = styled(Dropdown.Item)`
  display: flex;
  align-items: center;
  gap: 6px;
`;
