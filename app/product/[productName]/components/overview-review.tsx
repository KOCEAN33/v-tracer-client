'use client';

export interface Review {
  id: string;
  author: { id: string; image: string; name: string };
  title: string;
  body: string;
  vote: { up: number; down: number };
  publishedAt: string;
}

interface OverviewReviewProps extends React.HTMLAttributes<HTMLDivElement> {
  review: Review;
}

export const OverviewReview: React.FC<OverviewReviewProps> = ({ review }) => {
  return <></>;
};
