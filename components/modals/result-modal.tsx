import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import useModalStore from "@/hooks/useModalStore";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { resultOptions } from "@/constants";
import Image from "next/image";
import { QuizContext } from "@/components/questions";
import { useContext } from "react";
import {
    FacebookShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
} from "react-share";

type ResultType =
    | "ISTJ"
    | "ISFJ"
    | "INFJ"
    | "INTJ"
    | "ISTP"
    | "ISFP"
    | "INFP"
    | "INTP"
    | "ESTP"
    | "ESFP"
    | "ENFP"
    | "ENTP"
    | "ESTJ"
    | "ESFJ"
    | "ENFJ"
    | "ENTJ";

interface ResultOptions {
    [key: string]: {
        image: string;
    };
}

const ResultModal = () => {
    const { isOpen, type, onClose, additionalData } = useModalStore();
    const open = isOpen && type === "showResults";
    const router = useRouter();
    const { resetQuiz } = useContext(QuizContext);

    const result = additionalData?.result as ResultType | undefined;
    const resultImage = result ? resultOptions[result]?.image : null;

    const [email, setEmail] = useState("");
    const [subscribe, setSubscribe] = useState(false);
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleReplay = () => {
        resetQuiz();
        router.push("/");
        onClose();
    };

    const handleSubmitEmail = async () => {
        const payload = {
            msg_type: "text",
            content: {
                text: `Email: ${email}, Subscribe: ${subscribe}`,
            },
        };

        const webhookUrl = "https://open.feishu.cn/open-apis/bot/v2/hook/7564e5e0-74ec-4a49-9bb4-1899e617f8c0";

        try {
            await fetch(webhookUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });
            setEmailSubmitted(true);
        } catch (error) {
            console.error("Failed to submit email", error);
        }
    };

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-center text-xl md:text-2xl">
                        Cosmos Persona Personality
                    </DialogTitle>
                </DialogHeader>
                <DialogDescription>
                    <div className="flex items-center flex-col py-1 md:py-2 lg:py-3">
                        {!emailSubmitted ? (
                            <>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="mb-2 p-2 border rounded w-2/3"
                                />
                                <label className="mb-4">
                                    <input
                                        type="checkbox"
                                        checked={subscribe}
                                        onChange={(e) => setSubscribe(e.target.checked)}
                                        className="mr-2"
                                    />
                                    I would like to receive the latest tests and experiences.
                                </label>
                                <Button onClick={handleSubmitEmail}>Submit Email</Button>
                            </>
                        ) : (
                            <>
                                {resultImage && (
                                    <Image
                                        src={`/result_image/${resultImage}`}
                                        alt={result ?? "Your Profile"}
                                        width={368}
                                        height={504}
                                        className="image-wrap"
                                        placeholder={"blur"}
                                        blurDataURL={`/result_image/${resultImage}`}
                                    />
                                )}
                                <div className="flex mt-4">
                                    <FacebookShareButton
                                        url={'https://cosmospersona.net'}
                                        title={'Cosmos Persona Personality Quiz'}
                                        className="mr-2 mt-3 md:mt-5"
                                    >
                                        <FacebookIcon size={32} round />
                                    </FacebookShareButton>
                                    <TwitterShareButton
                                        url={'https://cosmospersona.net'}
                                        title={'Cosmos Persona Personality Quiz'}
                                        className="mr-2 mt-3 md:mt-5"
                                    >
                                        <TwitterIcon size={32} round />
                                    </TwitterShareButton>
                                    <LinkedinShareButton
                                        url={'https://cosmospersona.net'}
                                        title={'Cosmos Persona Personality Quiz'}
                                        className="mr-6 mt-3 md:mt-5"
                                    >
                                        <LinkedinIcon size={32} round />
                                    </LinkedinShareButton>
                                    <Button
                                        onClick={handleReplay}
                                        className="mr-2 mt-3 md:mt-5"
                                    >
                                        Quiz Again
                                    </Button>
                                </div>
                            </>
                        )}
                    </div>
                </DialogDescription>
            </DialogContent>
        </Dialog>
    );
};

export default ResultModal;
