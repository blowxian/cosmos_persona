// /app/page.tsx

import Questions from "@/components/questions";
import {questions} from "@/constants";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>Cosmos Persona Personality Quiz Test | Discover Your Cosmic Identity</title>
                <meta
                    name="description"
                    content="Explore the Cosmos Persona Personality Quiz, a whimsical and unique online test that determines your cosmic identity through engaging scenarios. Find out if you're a Black Hole, Nebula, or Shooting Star!"
                />
                <meta name="keywords"
                      content="Cosmos Persona, Personality Quiz, Online Test, Space-themed Quiz, Cosmic Identity"/>
                <meta name="robots" content="noindex"/>
            </Head>

            <header className="bg-gray-800 text-white py-4">
                <div className="container mx-auto items-center w-full md:w-[90%] lg:w-[70%]">
                    <h1 className="text-2xl font-semibold mb-4">Cosmos Persona Personality Quiz Test</h1>
                    <p>
                        The Cosmos Persona Personality Quiz is a whimsical and unique online personality test . It has
                        recently taken social media by storm, amassing immense popularity on platforms like Instagram,
                        TikTok, and Reddit.
                    </p>
                </div>
            </header>

            <main
                className="wrapper py-6 bg-gradient-radial from-[rgb(44,62,80)] via-[rgb(52,73,94)] to-[rgb(34,47,62)]">

                <Questions
                    questions={questions}
                />

                <section
                    className="content bg-white p-6 shadow-md w-full md:w-[90%] lg:w-[70%] max-w-4xl rounded-md mx-auto">
                    <p className="mb-4">
                        Set in a cosmic adventure, it determines personality types through a series of engaging
                        hypothetical scenarios. According to Google Trends, this space-themed quiz began capturing
                        the internet's attention and went viral between March 10, 2024, and March 16, 2024.
                    </p>
                    <Image
                        src={"/img/thumbnail_02.png"}
                        alt={"Cosmos Persona Personality"}
                        width={900}
                        height={303}
                        className="image-wrap"
                        placeholder={"blur"}
                        blurDataURL={"/img/thumbnail_02.png"}
                    />
                </section>

                <section
                    className="bg-white p-6 shadow-md w-full md:w-[90%] lg:w-[70%] max-w-4xl rounded-md mx-auto">
                    <h2 className="text-2xl font-semibold mb-4">What is the Cosmos Persona Personality Quiz?</h2>
                    <p className="mb-4">
                        The Cosmos Persona Personality Quiz is a fresh take on the classic Myers-Briggs Type
                        Indicator
                        (MBTI), combining personality tests inspired by innate character traits with a celestial
                        twist.
                        Created by the imaginative I-see WJ, it’s a fun and insightful journey into cosmic identity.
                    </p>
                    <p>
                        Over 12 quirky questions, you encounter strange situations like meeting space cats or a
                        robot.
                        Your responses determine your "Cosmos Persona" - a celestial archetype reflecting your core
                        personality.
                    </p>
                </section>

                <section
                    className="content bg-white p-6 shadow-md w-full md:w-[90%] lg:w-[70%] max-w-4xl rounded-md mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe
                                src="https://www.youtube.com/embed/KGYgzHQy6Tw?si=gacsd_pJAPBs3kwl"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </div>
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe
                                src="https://www.youtube.com/embed/OReqDA1fuGI?si=E3t1o9U52ie2-lsF"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>
                </section>

                <section
                    className="bg-white p-6 shadow-md w-full md:w-[90%] lg:w-[70%] max-w-4xl rounded-md mx-auto">
                    <h2 className="text-2xl font-semibold mb-4">How the Cosmos Persona Personality Quiz Works</h2>
                    <p className="mb-4">
                        The premise of the Cosmos Persona Quiz is simple yet imaginative. It takes the user on a
                        journey through a series of 12 questions, where they are presented with various situations
                        and asked how they would react or what they would do in those circumstances.
                    </p>
                    <p className="mb-4">
                        The quiz begins with the user embarking on a bus ride, which quickly takes an unexpected turn
                        as the bus enters a mysterious tunnel, leading to encounters with space cats, a robot, and even
                        a giant vacuum cleaner. The user's responses to these quirky and imaginative scenarios are
                        analyzed to determine their "Cosmos Persona," which reflects their core personality traits,
                        strengths, weaknesses, and compatibility with others.
                    </p>
                    <Image
                        src={"/img/thumbnail_03.png"}
                        alt={"Cosmos Persona Personality"}
                        width={900}
                        height={610}
                        className="image-wrap"
                        placeholder={"blur"}
                        blurDataURL={"/img/thumbnail_03.png"}
                    />
                </section>

                <section
                    className="bg-white p-6 shadow-md w-full md:w-[90%] lg:w-[70%] max-w-4xl rounded-md mx-auto">
                    <h2 className="text-2xl font-semibold mb-4">Who Created the Cosmos Persona Personality
                        Quiz?</h2>
                    <p className="mb-4">
                        Warisa "I-see" Jaidee, a Thai artist popular on Instagram, is the creative genius behind the
                        viral Cosmos Persona Personality Quiz. Known by the pen name Izon Falzo, Jaidee has taken social
                        media by storm with his cosmic, space-themed adventure. Utilizing his talents in graphic design
                        and imaginative storytelling, Warisa "I-see" Jaidee presents personality insights in a unique
                        and captivating way.
                    </p>
                    <p className="mb-4">
                        Falzo’s goal was to apply personality theory in a visually striking and imaginative way to spark
                        curiosity about one's true nature. He drew inspiration from popular personality assessments like
                        the Myers-Briggs Type Indicator (MBTI) as well as the recent viral "What Cake R U?" quiz.
                    </p>
                    <p>
                        Falzo is known for designing unique personality tests that blend science, art, and imagination
                        in a whimsical format. The quiz took him nearly a year to develop as his first major project.
                    </p>
                </section>

                <section
                    className="bg-white p-6 shadow-md w-full md:w-[90%] lg:w-[70%] max-w-4xl rounded-md mx-auto">
                    <h2 className="text-2xl font-semibold mb-4">What are the Possible Cosmic Personas in the
                        Quiz?</h2>
                    <p className="mb-4">
                        The main 12 possible cosmic personas or personality types in the Cosmos Persona Personality
                        Quiz
                        are:
                    </p>
                    <Image
                        src={"/img/thumbnail_04.png"}
                        alt={"Cosmos Persona Personality"}
                        width={840}
                        height={1138}
                        className="image-wrap"
                        placeholder={"blur"}
                        blurDataURL={"/img/thumbnail_04.png"}
                    />
                    <ul className="list-decimal list-inside mb-4 flex flex-wrap text-xs">
                        <li className="w-1/4 pr-2">Black Hole</li>
                        <li className="w-1/4 pr-2">Dark Matter</li>
                        <li className="w-1/4 pr-2">Nebula</li>
                        <li className="w-1/4 pr-2">Meteorite</li>
                        <li className="w-1/4 pr-2">Shooting Star</li>
                        <li className="w-1/4 pr-2">Sun</li>
                        <li className="w-1/4 pr-2">Moon</li>
                        <li className="w-1/4 pr-2">UFO</li>
                        <li className="w-1/4 pr-2">Planet</li>
                        <li className="w-1/4 pr-2">Satellite</li>
                        <li className="w-1/4 pr-2">Star Cluster</li>
                        <li className="w-1/4 pr-2">Comet</li>
                    </ul>
                    <p className="mb-4">
                        The table below provides a breakdown of part of cosmic
                        personas and their representative personality traits:
                    </p>
                    <table className="w-full text-left border-collapse text-xs">
                        <thead>
                        <tr>
                            <th className="border p-2">Persona</th>
                            <th className="border p-2">Representative Traits</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="border p-2">Black Hole</td>
                            <td className="border p-2">Intense, perceptive, brooding yet illuminating nature. Draws
                                others inward.
                            </td>
                        </tr>
                        <tr>
                            <td className="border p-2">Dark Matter</td>
                            <td className="border p-2">Ethereal, mysterious essence not fully understood. Influences
                                events subtly from periphery.
                            </td>
                        </tr>
                        <tr>
                            <td className="border p-2">Nebula</td>
                            <td className="border p-2">Creative, nurturing, transformative qualities that cultivate
                                new star and planetary life.
                            </td>
                        </tr>
                        <tr>
                            <td className="border p-2">Meteorite</td>
                            <td className="border p-2">Intrepid, adaptable spirit full of fiery passion yet prone to
                                burning out.
                            </td>
                        </tr>
                        <tr>
                            <td className="border p-2">Shooting Star</td>
                            <td className="border p-2">Fast-moving go-getter ready for new experiences though fleeting
                                by nature.
                            </td>
                        </tr>
                        <tr>
                            <td className="border p-2">Sun</td>
                            <td className="border p-2">Warm, radiant center providing light and sustenance to whole
                                solar system.
                            </td>
                        </tr>
                        <tr>
                            <td className="border p-2">Moon</td>
                            <td className="border p-2">Ever-changing but reliable regulator of tides with imaginative
                                yet grounded qualities.
                            </td>
                        </tr>
                        <tr>
                            <td className="border p-2">UFO</td>
                            <td className="border p-2">Inquisitive, boundary-pushing explorer of unknown realms far
                                from ordinary life.
                            </td>
                        </tr>
                        <tr>
                            <td className="border p-2">Planet</td>
                            <td className="border p-2">Stable, enduring foundation supporting diverse ecosystems and
                                orbiting satellites.
                            </td>
                        </tr>
                        <tr>
                            <td className="border p-2">Satellite</td>
                            <td className="border p-2">Loyal team player aiding the greater missions of planetary
                                bodies in orbit.
                            </td>
                        </tr>
                        <tr>
                            <td className="border p-2">Star Cluster</td>
                            <td className="border p-2">Gregarious bunch drawing energy from cooperation though
                                vulnerable to dispersal.
                            </td>
                        </tr>
                        <tr>
                            <td className="border p-2">Comet</td>
                            <td className="border p-2">Eccentric visitor bringing brief yet dazzling displays across
                                night skies every few decades.
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <p className="mt-4">
                        The main 12 cosmic personas represent different celestial objects and phenomena, each associated
                        with distinct personality traits, strengths, and weaknesses according to the quiz's framework.
                    </p>
                </section>

                <section
                    className="bg-white p-6 shadow-md w-full md:w-[90%] lg:w-[70%] max-w-4xl rounded-md mx-auto">
                    <h2 className="text-2xl font-semibold mb-4">How Accurate are the Results of the Cosmos Persona
                        Quiz?</h2>
                    <p className="mb-4">
                        The Cosmos Persona Quiz has gained widespread popularity on social media, with users sharing
                        their results and expressing surprise at the accuracy of the personality descriptions. While
                        its
                        accuracy is subjective, it offers a unique and visually appealing way for individuals to
                        gain
                        insights into their personalities and share their results with friends and followers.
                    </p>
                    <p>
                        However, it's important to note that like most online personality quizzes, the Cosmos
                        Persona
                        Quiz should be taken with a grain of salt and not treated as a definitive or scientific
                        assessment of one's personality. Its primary purpose is to provide a fun and engaging way
                        for
                        users to explore their personalities through the lens of cosmic phenomena.
                    </p>
                </section>

                <section
                    className="content bg-white p-6 shadow-md w-full md:w-[90%] lg:w-[70%] max-w-4xl rounded-md mx-auto mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe
                                src="https://www.youtube.com/embed/KGYgzHQy6Tw?si=gacsd_pJAPBs3kwl"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </div>
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe
                                src="https://www.youtube.com/embed/OReqDA1fuGI?si=E3t1o9U52ie2-lsF"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>
                </section>

            </main>

            <footer className="bg-gray-800 text-white py-4">
                <div className="container mx-auto flex justify-between items-center w-full md:w-[90%] lg:w-[70%]">
                    <a href="/#" className="text-sm font-semibold hover:underline">Blog</a>
                    <a href="/#" className="text-sm font-semibold hover:underline">Privacy Policy</a>
                    <a href="/#" className="text-sm font-semibold hover:underline">Disclaimer</a>
                </div>
            </footer>
        </>

    );
}
