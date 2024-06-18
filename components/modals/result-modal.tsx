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
import { Separator } from "@/components/ui/separator";
import { resultOptions } from "@/constants";
import Image from "next/image"; // 导入 Image 组件

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

  const result = additionalData?.result as ResultType | undefined;
  const resultImage = result ? resultOptions[result]?.image : null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center text-xl md:text-2xl">
            Result
          </DialogTitle>
        </DialogHeader>
        <Separator />
        <DialogDescription>
          <div className="flex items-center flex-col py-1 md:py-2 lg:py-3">
            {resultImage && (
                <Image
                    src={`/result_image/${resultImage}`} // 根据你的项目调整图片路径
                    alt={result ?? "Your Profile"}
                    width={500} // 调整宽度和高度
                    height={500} // 调整宽度和高度
                    priority
                />
            )}
            <Button
              onClick={() => {
                router.push("/");
                onClose();
              }}
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
