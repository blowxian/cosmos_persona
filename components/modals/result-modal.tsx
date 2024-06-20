import {
  Dialog,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog";
import useModalStore from "@/hooks/useModalStore";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { resultOptions } from "@/constants";
import Image from "next/image"; // 导入 Image 组件
import { QuizContext } from "@/components/questions";
import {useContext} from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WeiboShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WeiboIcon,
} from "react-share";

type ResultType = "ISTJ" | "ISFJ" | "INFJ" | "INTJ" | "ISTP" | "ISFP" | "INFP" | "INTP" | "ESTP" | "ESFP" | "ENFP" | "ENTP" | "ESTJ" | "ESFJ" | "ENFJ" | "ENTJ";

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

  const handleReplay = () => {
    resetQuiz();
    router.push("/");
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogDescription>
          <div className="flex items-center flex-col py-1 md:py-2 lg:py-3 mt-6">
            {resultImage && (
                <Image
                    src={`/result_image/${resultImage}`}
                    alt={result ?? "Your Profile"}
                    width={368} // 调整宽度和高度
                    height={504} // 调整宽度和高度
                    className="image-wrap"
                    placeholder={"blur"}
                    blurDataURL={`/result_image/${resultImage}`}
                />
            )}
            <div className="flex mt-4">
              <FacebookShareButton url={'https://cosmospersona.net'} title={'Cosmos Persona Personality Quiz'} className="mr-2 mt-3 md:mt-5">
                <FacebookIcon size={32} round/>
              </FacebookShareButton>
              <TwitterShareButton url={'https://cosmospersona.net'} title={'Cosmos Persona Personality Quiz'} className="mr-2 mt-3 md:mt-5">
                <TwitterIcon size={32} round/>
              </TwitterShareButton>
              <LinkedinShareButton url={'https://cosmospersona.net'} title={'Cosmos Persona Personality Quiz'} className="mr-2 mt-3 md:mt-5">
                <LinkedinIcon size={32} round/>
              </LinkedinShareButton>
              <Button
                  onClick={handleReplay}
                  className="mr-2 mt-3 md:mt-5"
              >
                Quiz Again
              </Button>
            </div>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default ResultModal;
