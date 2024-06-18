"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import useModalStore from "@/hooks/useModalStore";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { QuizContext } from "@/components/questions";

const QuitQuizModal = () => {
  const { isOpen, type, onClose } = useModalStore();
  const open = isOpen && type === "quitQuiz";
  const router = useRouter();
  const { resetQuiz } = useContext(QuizContext);

  const handleConfirm = () => {
    resetQuiz();
    router.push("/");
  };

  return (
      <AlertDialog open={open} onOpenChange={onClose}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              Your progress will be lost.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirm}>
              Confirm
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
  );
};

export default QuitQuizModal;
