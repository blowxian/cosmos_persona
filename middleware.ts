import createMiddleware from 'next-intl/middleware';
import { locales, pathnames } from '@/navigation';

export default createMiddleware({
    // 支持的所有语言列表
    locales: locales,

    // 当没有匹配的语言时使用的默认语言
    defaultLocale: 'en',

    // 关闭语言自动检测
    localeDetection: false,

    localePrefix: 'as-needed',

    pathnames
});

export const config = {
    // Match only internationalized pathnames
    matcher: [
        // 匹配所有路径名，除了：
        // - 以 `/api`、`/_next` 或 `/_vercel` 开头的路径
        // - 包含点的路径（例如 `favicon.ico`）
        '/((?!api|_next|_vercel|.*\\.).*)',
    ]
};