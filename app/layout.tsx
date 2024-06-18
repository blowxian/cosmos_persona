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
    title: "Cosmos Persona Personality Quiz Test",
    description: "Cosmos Persona Personality Quiz Test",
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
        <body className={poppins.className}>
        <ModalProvider/>
        {children}
        </body>
        </html>
    );
}
