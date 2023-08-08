export interface Questions {
  id: string;
  author: { id: string; image: string; name: string };
  title: string;
  body: string;
  answers: number;
  vote: { up: number; down: number };
  publishedAt: string;
}

export const SampleQuestions: Questions[] = [
  {
    id: '203957203fgdrye',
    author: {
      id: '23035u20j2',
      image: 'https://github.com/oven-sh.png',
      name: '오븐',
    },
    title: '노션AI 돈값 하나요?',
    body: '이거 한달에 개비싼데 되나요',
    answers: 5,
    vote: { up: 10, down: 5 },
    publishedAt: '2023-08-01T18:38:24.402+00:00',
  },
];
