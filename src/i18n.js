import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import es from './assets/i18n/es.json';
import en from './assets/i18n/en.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es }
    },
    lng: 'en',
    keySeparator: true,
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;