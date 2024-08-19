import {createSharedPathnamesNavigation} from 'next-intl/navigation';

export const locales = ['en', 'de', 'zh', 'tw', 'ja', 'ko', 'fr', 'pt', 'es', 'vi', 'ar', 'nl', 'pl'] as const;
export const {Link, redirect, usePathname, useRouter} = createSharedPathnamesNavigation({locales});

export const pathnames = {
    '/': '/',
} as const;

// Use this type to get autocompletion for pathnames
export type Pathnames = keyof typeof pathnames;

// Added language labels
export const languageLabels = {
    en: 'English',
    de: 'Deutsch',
    zh: '简体中文',
    tw: '繁體中文',
    ja: '日本語',
    ko: '한국어',
    fr: 'Français',
    pt: 'Português',
    es: 'Español',
    vi: 'Tiếng Việt',
    ar: 'العربية',
    nl: 'Nederlands',
    pl: 'Polski'
} as const;