import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enJson from './translations/en.json'
import frJson from './translations/fr.json'

i18n.use(initReactI18next).init({
    fallbackLng: "en",
    interpolation: {
        escapeValue: false
    },
    resources: {
        en: enJson,
        fr: frJson
    },
});

export default i18n;