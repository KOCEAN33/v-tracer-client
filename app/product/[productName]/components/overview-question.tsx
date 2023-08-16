'use client';

interface Question {
  id: string;
  author: { id: string; image: string; name: string };
  title: string;
  body: string;
  answers: number;
  vote: { up: number; down: number };
  publishedAt: string;
}

interface OverviewQuestionProps extends React.HTMLAttributes<HTMLDivElement> {
  question: Question;
}

export const OverviewQuestion: React.FC<OverviewQuestionProps> = ({
  question,
}) => {
  return <></>;
};
