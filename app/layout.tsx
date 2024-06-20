import ModalProvider from "@/components/modals/modal-provider";
import "./globals.css";
import type {Metadata} from "next";
import Script from "next/script";
import {Poppins} from "next/font/google";

const poppins = Poppins({
    weight: "400",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Cosmos Persona Personality Quiz Test | Discover Your Cosmic Identity",
    description: "The Cosmos Persona Personality Quiz is a whimsical and unique online personality test . It has recently taken social media by storm, amassing immense popularity on platforms like Instagram, TikTok, and Reddit. ",
    keywords: "Cosmos Persona, Personality Quiz, Online Test, Space-themed Quiz, Cosmic Identity",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
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
        {children}
        </body>
        </html>
    );
}
