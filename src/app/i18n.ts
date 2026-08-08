import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Polyfill بسيط ومباشر يمنع السيرفر من الانهيار إذا تم استدعاء localStorage
if (typeof window === 'undefined') {
  (global as any).localStorage = {
    getItem: () => null,
    setItem: () => { },
    removeItem: () => { },
    clear: () => { },
  };
}

if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources: {
        // حط ملفات الترجمة تبعك هون
      },
      lng: 'ar',
      fallbackLng: 'ar',
      interpolation: {
        escapeValue: false,
      },
    });
}

export default i18n;
