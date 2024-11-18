import en from "@/lib/translations/en.json";
import fr from "@/lib/translations/fr.json";
import { Lang } from "@/types/Lang";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: en,
    },
    fr: {
        translation: fr,
    },
};

i18n.use(initReactI18next)
    .init({
        resources,
        lng: "fr",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
    });

export const langs: Lang[] = [
    {
        code: "en",
        name: "English",
        flag: "en-flag.svg",
    },
    {
        code: "fr",
        name: "Français",
        flag: "fr-flag.svg",
    },
];

export default i18n;
