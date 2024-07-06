import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    // A list of all locales that are supported
    locales: ['en', 'de', 'zh', 'tw', 'ja', 'ko', 'fr', 'pt', 'es', 'vi', 'ar', 'nl', 'pl'],

    // Used when no locale matches
    defaultLocale: 'en'
});

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(de|en|zh|tw|ja|ko|fr|pt|es|vi|ar|nl|pl)/:path*']
};