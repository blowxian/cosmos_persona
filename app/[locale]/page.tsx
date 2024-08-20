'use client'

import React, { useEffect, useState, useRef } from 'react';
import { useTranslations, useMessages } from 'next-intl';
import Questions from "@/components/questions";
import { questions } from "@/constants";
import Image from "next/image";
import dynamic from 'next/dynamic';
import axios from 'axios';
import { usePathname, Link, locales, languageLabels } from '@/navigation';
import { Globe } from 'lucide-react';
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { logEvent } from '@/lib/GAlog';

const LazyLoadYouTube = dynamic(() => import('@/components/lazy-load-youtube'), { ssr: false });

const FEISHU_NOTIFY_WEBHOOK_URL = 'https://open.feishu.cn/open-apis/bot/v2/hook/7564e5e0-74ec-4a49-9bb4-1899e617f8c0';

async function notifyFeishu(message: string) {
  try {
    await axios.post(FEISHU_NOTIFY_WEBHOOK_URL, {
      msg_type: 'text',
      content: {
        text: message,
      },
    });
  } catch (error) {
    console.error('飞书通知发送失败', error);
  }
}

async function getIPLocation(ip: string) {
  try {
    const response = await axios.get(`https://ipapi.co/${ip}/json/`);
    return response.data;
  } catch (error) {
    console.error('获取IP位置信息失败:', error);
    return null;
  }
}

export default function Home() {
    const t = useTranslations('HomePage' as any) as (key: string) => string;
    const messages = useMessages() as unknown as IntlMessages;
    const pathname = usePathname();

    useEffect(() => {
        // 在组件加载时发送通知
        axios.get('https://api.ipify.org?format=json')
            .then(response => {
                const ip = response.data.ip;
                const date = new Date();
                const options = { timeZone: 'Asia/Shanghai', hour12: false };
                const formattedDate = date.toLocaleString('zh-CN', options as Intl.DateTimeFormatOptions);
                const currentUrl = window.location.href;
                const referrer = document.referrer;

                getIPLocation(ip).then(location => {
                    if (location) {
                        notifyFeishu(`[${currentUrl}] [${formattedDate}] IP: ${ip} [${location.city}, ${location.region}, ${location.country_name}], 用户访问着陆页, 来源: ${referrer || '直接访问'}`);
                    } else {
                        notifyFeishu(`[${currentUrl}] [${formattedDate}] IP: ${ip}, 用户访问着陆页, 来源: ${referrer || '直接访问'}`);
                    }
                });
            })
            .catch(error => {
                console.error('获取IP地址失败:', error);
            });

        const iframes = document.querySelectorAll<HTMLIFrameElement>('.lazy-iframe');
        iframes.forEach(iframe => {
            const dataSrc = iframe.getAttribute('data-src');
            if (dataSrc) {
                iframe.src = dataSrc;
            }
        });

        logEvent('page_view', 'Navigation', 'Home Page', 1);
    }, []);

    const handleSectionClick = (sectionName: string) => {
        notifyFeishu(`用户点击了 ${sectionName} 部分`);
        logEvent('section_click', 'Navigation', sectionName, 1);
    };

    const handleLanguageChange = (locale: string) => {
        notifyFeishu(`用户切换语言到: ${languageLabels[locale as keyof typeof languageLabels]}`);
        logEvent('language_change', 'User', `Language: ${locale}`, 1);
        window.location.href = `/${locale}${pathname}`;
    };

    return (
        <>
            <header className="bg-gray-800 text-white py-4">
                <div className="container mx-auto items-center w-full md:w-[90%] lg:w-[70%] max-w-4xl">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-2xl font-semibold">{t('title')}</h1>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="icon" className="bg-white/10 text-white hover:bg-white/20 transition-colors duration-200 rounded-md p-1.5 sm:p-2">
                                    <Globe className="h-4 w-4 sm:h-5 sm:w-5" />
                                    <span className="sr-only">切换语言</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="mt-2 bg-white rounded-md shadow-lg">
                                {locales.map((locale) => (
                                    <DropdownMenuItem key={locale} onClick={() => handleLanguageChange(locale)} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                                        {languageLabels[locale as keyof typeof languageLabels]}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <p>{t('header.p')}</p>
                </div>
            </header>

            <main className="wrapper py-6 bg-gradient-radial from-[rgb(44,62,80)] via-[rgb(52,73,94)] to-[rgb(34,47,62)]">
                <Questions questions={questions as any} />

                <section className="content bg-white p-6 shadow-md w-full md:w-[90%] lg:w-[70%] max-w-4xl rounded-md mx-auto" onClick={() => handleSectionClick('Section 1')}>
                    <p className="mb-4">{t('main.section1.p')}</p>
                    <Image
                        src={t('main.section1.img.src')}
                        alt={t('main.section1.img.alt')}
                        width={900}
                        height={303}
                        className="image-wrap"
                        placeholder="blur"
                        blurDataURL={t('main.section1.img.src')}
                    />
                </section>

                <section className="bg-white p-6 shadow-md w-full md:w-[90%] lg:w-[70%] max-w-4xl rounded-md mx-auto" onClick={() => handleSectionClick('Section 2')}>
                    <h2 className="text-2xl font-semibold mb-4">{t('main.section2.h2')}</h2>
                    <p className="mb-4">{t('main.section2.p1')}</p>
                    <p>{t('main.section2.p2')}</p>
                </section>

                <section className="content bg-white p-6 shadow-md w-full md:w-[90%] lg:w-[70%] max-w-4xl rounded-md mx-auto" onClick={() => handleSectionClick('YouTube Videos')}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <LazyLoadYouTube videoId="KGYgzHQy6Tw"/>
                        <LazyLoadYouTube videoId="OReqDA1fuGI"/>
                    </div>
                </section>

                <section className="bg-white p-6 shadow-md w-full md:w-[90%] lg:w-[70%] max-w-4xl rounded-md mx-auto">
                    <h2 className="text-2xl font-semibold mb-4">{t('main.section4.h2')}</h2>
                    <p className="mb-4">{t('main.section4.p1')}</p>
                    <p className="mb-4">{t('main.section4.p2')}</p>
                    <Image
                        src={t('main.section4.img.src')}
                        alt={t('main.section4.img.alt')}
                        width={900}
                        height={610}
                        className="image-wrap"
                        placeholder="blur"
                        blurDataURL={t('main.section4.img.src')}
                    />
                </section>                <section className="bg-white p-6 shadow-md w-full md:w-[90%] lg:w-[70%] max-w-4xl rounded-md mx-auto">
                    <h2 className="text-2xl font-semibold mb-4">{t('main.section5.h2')}</h2>
                    <p className="mb-4">{t('main.section5.p1')}</p>
                    <p className="mb-4">{t('main.section5.p2')}</p>
                    <p>{t('main.section5.p3')}</p>
                </section>

                <section className="bg-white p-6 shadow-md w-full md:w-[90%] lg:w-[70%] max-w-4xl rounded-md mx-auto">
                    <h2 className="text-2xl font-semibold mb-4">{t('main.section6.h2')}</h2>
                    <p className="mb-4">{t('main.section6.p1')}</p>
                    <Image
                        src={t('main.section6.img.src')}
                        alt={t('main.section6.img.alt')}
                        width={840}
                        height={1138}
                        className="image-wrap"
                        placeholder="blur"
                        blurDataURL={t('main.section6.img.src')}
                    />
                    <ul className="list-decimal list-inside mb-4 flex flex-wrap text-xs">
                        {messages.HomePage.main.section6.ul.map((key, index) => (
                            <li key={index} className="w-1/4 pr-2">{key}</li>
                        ))}
                    </ul>
                    <p className="mb-4">{t('main.section6.p2')}</p>
                    <table className="w-full text-left border-collapse text-xs">
                        <thead>
                        <tr>
                            <th className="border p-2">Persona</th>
                            <th className="border p-2">Representative Traits</th>
                        </tr>
                        </thead>
                        <tbody>
                        {messages.HomePage.main.section6.table.map((key, index) => (
                            <tr key={index}>
                                <td className="border p-2">{key.persona}</td>
                                <td className="border p-2">{key.traits}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <p className="mt-4">{t('main.section6.p3')}</p>
                </section>

                <section className="bg-white p-6 shadow-md w-full md:w-[90%] lg:w-[70%] max-w-4xl rounded-md mx-auto">
                    <h2 className="text-2xl font-semibold mb-4">{t('main.section7.h2')}</h2>
                    <p className="mb-4">{t('main.section7.p1')}</p>
                    <p>{t('main.section7.p2')}</p>
                </section>

                <section
                    className="content bg-white p-6 shadow-md w-full md:w-[90%] lg:w-[70%] max-w-4xl rounded-md mx-auto mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <LazyLoadYouTube videoId="8qh_sPv7Ngs"/>
                        <LazyLoadYouTube videoId="UGl8nQ9n5V8"/>
                    </div>
                </section>
            </main>

            <footer className="bg-gray-800 text-white py-4">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center w-full md:w-[90%] lg:w-[70%] max-w-4xl space-y-4 md:space-y-0">
                    <div className="flex space-x-4">
                        {messages.HomePage.footer.links.map((key, index) => (
                            <a key={index} href={key.href} className="text-sm font-semibold hover:underline" onClick={() => notifyFeishu(`用户点击了页脚链接: ${key.text}`)}>{key.text}</a>
                        ))}
                    </div>
                    <div className="text-xs">
                        <div dangerouslySetInnerHTML={{__html: messages.HomePage.footer.copyright.replace("${year}", String(new Date().getFullYear()))}} />
                    </div>
                </div>
            </footer>
        </>
    );
}