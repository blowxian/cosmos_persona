"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const QuizSettings = () => {
  const router = useRouter();

  const handleQuizStart = () => {
    router.push(
      `/questions?category=cosmos_persona`
    );
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 md:gap-6">
      <Button variant="default" size="lg" className="text-2xl" onClick={handleQuizStart}>
        Start
      </Button>
    </div>
  );
};

export default QuizSettings;
