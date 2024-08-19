import ModalProvider from "@/components/modals/modal-provider";
import "./globals.css";
import type {Metadata} from "next";
import Script from "next/script";
import {Poppins} from "next/font/google";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

const poppins = Poppins({
    weight: "400",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Cosmos Persona Personality Quiz Test Free Online | Discover Your Cosmic Identity",
    description: "The Cosmos Persona Personality Quiz Free Online is a whimsical and unique online personality test . It has recently taken social media by storm, amassing immense popularity on platforms like Instagram, TikTok, and Reddit. ",
};

export default async function LocaleLayout({
                                               children,
                                               params: {locale}
                                           }: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    // 假设 NEXT_PUBLIC_GA_ID 是逗号分隔的字符串
    const gaIds = process.env.NEXT_PUBLIC_GA_IDS?.split(',') || [];

    // 组装 Google Analytics 配置脚本
    const gaConfigScript = gaIds.map(id =>
        `gtag('config', '${id}', { page_path: window.location.pathname });`
    ).join('');

    return (
        <html lang="en" suppressHydrationWarning>
        <head>
            <meta name="google-site-verification" content="rpDVApX0PnUjDfaTwh0tke808LErmuAljbtB7UMvyME"/>
            <link rel="preload" href="/img/thumbnail_01.webp" as="image"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link rel="manifest" href="/site.webmanifest"/>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${gaIds[0]}`}
                strategy="afterInteractive"
            />
            <Script
                id="gtag-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            ${gaConfigScript}
                        `,
                }}
            />
        </head>
        <body className={poppins.className}>
        <ModalProvider/>
        <NextIntlClientProvider messages={messages}>
            {children}
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
