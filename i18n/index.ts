import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import _locale from './_locale.json';

export const initInternationalization = (Lng: string) => i18next.use(initReactI18next).init({
    debug: false,
    defaultNS: 'translations',

    fallbackLng: Lng,
    interpolation: {
        formatSeparator: ',',
    },
    keySeparator: false,
    ns: ['translations'],
    react: {
        useSuspense: false,
    },
    resources: _locale,
})