// /app/page.tsx
'use client'

import {useEffect} from "react";
import Questions from "@/components/questions";
import {questions} from "@/constants";
import Image from "next/image";
import dynamic from 'next/dynamic';
import {useMessages, useTranslations} from 'next-intl';

const LazyLoadYouTube = dynamic(() => import('@/components/lazy-load-youtube'), {ssr: false});

export default function Home() {
    const t = useTranslations('HomePage' as any) as (key: string) => string;
    const messages = useMessages() as unknown as IntlMessages;

    useEffect(() => {
        const iframes = document.querySelectorAll<HTMLIFrameElement>('.lazy-iframe');
        iframes.forEach(iframe => {
            const dataSrc = iframe.getAttribute('data-src');
            if (dataSrc) {
                iframe.src = dataSrc;
            }
        });
    }, []);

    return (
        <>
            <header className="bg-gray-800 text-white py-4">
                <div className="container mx-auto items-center w-full md:w-[90%] lg:w-[70%] max-w-4xl">
                    <h1 className="text-2xl font-semibold mb-4">{t('title')}</h1>
                    <p>{t('header.p')}</p>
                </div>
            </header>

            <main
                className="wrapper py-6 bg-gradient-radial from-[rgb(44,62,80)] via-[rgb(52,73,94)] to-[rgb(34,47,62)]">
                <Questions questions={questions as any}/>

                <section
                    className="content bg-white p-6 shadow-md w-full md:w-[90%] lg:w-[70%] max-w-4xl rounded-md mx-auto">
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

                <section className="bg-white p-6 shadow-md w-full md:w-[90%] lg:w-[70%] max-w-4xl rounded-md mx-auto">
                    <h2 className="text-2xl font-semibold mb-4">{t('main.section2.h2')}</h2>
                    <p className="mb-4">{t('main.section2.p1')}</p>
                    <p>{t('main.section2.p2')}</p>
                </section>

                <section
                    className="content bg-white p-6 shadow-md w-full md:w-[90%] lg:w-[70%] max-w-4xl rounded-md mx-auto">
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
                </section>

                <section className="bg-white p-6 shadow-md w-full md:w-[90%] lg:w-[70%] max-w-4xl rounded-md mx-auto">
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
                <div
                    className="container mx-auto flex flex-col md:flex-row justify-between items-center w-full md:w-[90%] lg:w-[70%] max-w-4xl space-y-4 md:space-y-0">
                    <div className="flex space-x-4">
                        {messages.HomePage.footer.links.map((key, index) => (
                            <a key={index} href={key.href}
                               className="text-sm font-semibold hover:underline">{key.text}</a>
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
