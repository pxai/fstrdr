import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es from '../config/i18n/es';
import en from '../config/i18n/en';

const resources = { en, es };

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
