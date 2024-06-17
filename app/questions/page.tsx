import Questions from "@/components/questions";
import { categoryOptions, questions } from "@/constants";
import { redirect } from "next/navigation";

type Props = {
  searchParams: {
    category: string;
  };
};

const QuestionsPage = async ({ searchParams }: Props) => {
  const category = searchParams.category as string;

  const validateCategory = (category: string) => {
    const validCategories = categoryOptions.map((option) => option.value);
    return validCategories.includes(category);
  };

  if (
    !validateCategory(category)
  ) {
    return redirect("/");
  }

  return (
    <Questions
      questions={questions}
    />
  );
};

export default QuestionsPage;
