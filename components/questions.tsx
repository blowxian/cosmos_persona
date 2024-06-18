"use client";

import { Progress } from "@/components/ui/progress";
import { alphabeticNumeral, resultOptions } from "@/constants";
import useModalStore from "@/hooks/useModalStore";
import React, { useEffect, useState, createContext, useContext } from "react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { preloadImages } from '@/lib/preloadImages';
import QuitQuizModal from "@/components/modals/quit-quiz-modal";

type Answer = {
    text: string;
    scores: {
        [key: string]: number;
    };
};

type Question = {
    question: string;
    image: string;
    answers: Answer[];
};

type Props = {
    questions: Question[];
};

type Scores = {
    T: number;
    F: number;
    J: number;
    P: number;
    S: number;
    N: number;
    I: number;
    E: number;
};

export const QuizContext = createContext({ resetQuiz: () => {} });

const Questions: React.FC<Props> = ({ questions }) => {
    const [curr, setCurr] = useState(0);
    const [answers, setAnswers] = useState<Answer[]>([]);
    const [selected, setSelected] = useState<string>("");
    const [progressValue, setProgressValue] = useState(0);
    const [scores, setScores] = useState<Scores>({
        T: 0,
        F: 0,
        J: 0,
        P: 0,
        S: 0,
        N: 0,
        I: 0,
        E: 0,
    });
    const [quizStarted, setQuizStarted] = useState(false);
    const { onOpen } = useModalStore();

    const handleCheck = (index: number) => {
        setSelected(index.toString());
        const selectedAnswer = questions[curr].answers[index];

        // Update score
        const newScores = { ...scores };
        Object.keys(selectedAnswer.scores).forEach((scoreKey) => {
            newScores[scoreKey as keyof Scores] += selectedAnswer.scores[scoreKey];
        });
        setScores(newScores);

        console.log(scores);

        // Check if it is the last question
        if (curr === questions.length - 1) {
            // List of images to preload based on result
            const result = calculateResult(newScores);
            const resultImage = `/_next/image?url=%2Fresult_image%2F${resultOptions[result as keyof typeof resultOptions]?.image}&w=1080&q=75`;

            if (resultImage) {
                preloadImages([resultImage]).then(r => console.log("resultImage loaded!"));
            }
        }
    };

    const handleSelect = (i: string) => {
        if (selected === i)
            return "correct";
    };

    const handleNext = () => {
        setAnswers(
            handleShuffle(questions[curr + 1].answers)
        );
        setCurr((curr) => curr + 1);
        setSelected("");
    };

    // 用户挽留部分，提升留存
    const handleQuit = () => {
        onOpen("quitQuiz");
    };

    const calculateResult = (scores: Scores) => {
        const traits = [
            scores.I > scores.E ? "I" : "E",
            scores.S > scores.N ? "S" : "N",
            scores.T > scores.F ? "T" : "F",
            scores.J > scores.P ? "J" : "P",
        ];

        return traits.join("");
    };

    const handleShowResult = () => {
        onOpen("showResults", {
            result: calculateResult(scores),
        });
    };

    const handleShuffle = (answers: Answer[]) => {
        return answers.sort(() => Math.random() - 0.5);
    };

    const resetQuiz = () => {
        setCurr(0);
        setAnswers([]);
        setSelected("");
        setProgressValue(0);
        setScores({
            T: 0,
            F: 0,
            J: 0,
            P: 0,
            S: 0,
            N: 0,
            I: 0,
            E: 0,
        });
        setQuizStarted(false);
    };

    useEffect(() => {
        if (questions.length > 0 && curr < questions.length) {
            setAnswers(handleShuffle(questions[curr].answers));
            setProgressValue((100 / questions.length) * (curr + 1));
        }

        if (questions.length > 0 && curr + 1 < questions.length) {
            const nextImage = `/${questions[curr + 1].image}`;
            preloadImages([nextImage]).then(r => console.log("Next image preloaded!"));
        }
    }, [curr, questions]);

    const formatText = (text: string): string => {
        return text.replace(/\*(.*?)\*/g, '<span class="font-bold underline">$1</span>');
    };

    return (
        <QuizContext.Provider value={{ resetQuiz }}>
            <div className="bg-white p-6 shadow-md w-full md:w-[90%] lg:w-[70%] max-w-4xl rounded-md mx-auto">
                {!quizStarted ? (
                    <div className="flex flex-col items-center justify-center h-full">
                        <h1 className="heading">Welcome to Cosmos Persona Profile Test</h1>
                        <Separator className="mb-3" />
                        <div className="w-full min-h-[50vh] my-2 flex justify-center items-center bg-custom-bg bg-contain bg-center bg-no-repeat">
                            <Button className="text-2xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded-full border border-gray-300 animate-pulse-shadow" onClick={() => setQuizStarted(true)}>Start Quiz</Button>
                        </div>
                    </div>
                ) : (
                    <>
                        <h1 className="heading">Profile Test</h1>
                        <Separator className="mb-3" />
                        <Progress value={progressValue} />
                        <div className="flex flex-col min-h-[50vh] py-10 px-3 md:px-5 gap-4 w-full">
                            {questions.length > 0 && (
                                <>
                                    <h2 className="text-2xl text-left font-medium">
                                        <img
                                            src={`/${questions[curr]?.image}`}
                                            alt="Question Image"
                                            className="w-24 h-24 md:w-32 md:h-32 float-right ml-6 mb-2 rounded-2xl"
                                        />
                                        <span
                                            dangerouslySetInnerHTML={{ __html: formatText(`Q${curr + 1}. ${questions[curr]?.question}`) }} />
                                    </h2>

                                    {answers?.map((answer, i) => (
                                        <button
                                            key={i}
                                            className={`option ${selected && handleSelect(i.toString())}`}
                                            disabled={!!selected}
                                            onClick={() => handleCheck(i)}
                                            dangerouslySetInnerHTML={{ __html: `${alphabeticNumeral(i)} ${formatText(answer.text)}` }}
                                        />
                                    ))}
                                    <Separator />
                                    <div
                                        className="flex mt-5 md:justify-between md:flex-row flex-col gap-4 md:gap-0 mx-auto max-w-xs w-full">
                                        <Button
                                            disabled={!selected}
                                            onClick={() =>
                                                questions.length === curr + 1
                                                    ? handleShowResult()
                                                    : handleNext()
                                            }
                                        >
                                            {questions.length - 1 != curr
                                                ? "Next Question"
                                                : "Show Results"}
                                        </Button>
                                        <Button variant={"destructive"} onClick={handleQuit}>
                                            Quit Quiz
                                        </Button>
                                    </div>
                                </>
                            )}
                        </div>
                    </>
                )}
            </div>
            <QuitQuizModal />
        </QuizContext.Provider>
    );
};

export default Questions;
