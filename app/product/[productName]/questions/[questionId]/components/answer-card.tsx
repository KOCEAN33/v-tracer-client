import { Questions } from '@/app/product/[productName]/data/questions';

interface Answer {
  id: string;
  author: { id: string; image: string; name: string };
  body: string;
  vote: { up: number; down: number };
  publishedAt: string;
}

interface AnswersCardProps extends React.HTMLAttributes<HTMLDivElement> {
  answer: Answer;
}

export const AnswerCard: React.FC<AnswersCardProps> = ({ answer }) => {
  return;
};
