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
            <Button
              onClick={handleReplay}
              className="mt-3 md:mt-5"
            >
              Play Again
            </Button>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default ResultModal;
