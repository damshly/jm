import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// استيراد ملفات الترجمة
import en from '@/app/locales/en/translation.json';
import ar from '@/app/locales/ar/translation.json';

i18n
  .use(initReactI18next)
  .init({
    lng: 'en', // اللغة الافتراضية
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },
  });

export default i18n;
