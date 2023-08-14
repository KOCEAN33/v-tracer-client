export interface Question {
  id: string;
  author: { id: string; image: string; name: string };
  title: string;
  body: string;
  answers: number;
  vote: { up: number; down: number };
  publishedAt: string;
}

export interface Answers {
  id: string;
  author: { id: string; image: string; name: string };
  body: string;
  vote: { up: number; down: number };
  publishedAt: string;
}
export interface QuestionDetail {
  question: Question;
  answers: Answers[];
}

const sampleQuestion = {
  id: '203957203fgdrye',
  author: {
    id: '23035u20j2',
    image: 'https://github.com/oven-sh.png',
    name: '오븐',
  },
  title: '노션AI 돈값 하나요?',
  body: '이거 한달에 개비싼데 되나요',
  answers: 10,
  vote: { up: 10, down: 5 },
  publishedAt: '2023-08-01T18:38:24.402+00:00',
};

export const sampleAnswers: Answers[] = [
  {
    id: 'dkfjseofwnego243820',
    author: {
      id: 'dsjfoiwehto234502',
      name: '세리자와',
      image: 'https://github.com/AbbyB97.png',
    },
    body: '그렇게 나쁘지는 않은데 가격 생각하면 그냥 chatGPT 쓰는게 가성비가 좋은듯여',
    vote: { up: 5, down: 6 },
    publishedAt: '2023-08-01T18:38:24.402+00:00',
  },
  {
    id: 'dkfjseofwnego243820',
    author: {
      id: 'SaidBySolo',
      name: 'SaidBySolo',
      image: 'https://github.com/SaidBySolo.png',
    },
    body:
      '.getMonth() returns a zero-based number so to get the correct month you need to add 1, so calling .getMonth() in may will return 4 and not 5.\n' +
      '\n' +
      'So in your code we can use currentdate.getMonth()+1 to output the correct value. In addition:\n' +
      '\n' +
      '    .getDate() returns the day of the month <- this is the one you want\n' +
      '    .getDay() is a separate method of the Date object which will return an integer representing the current day of the week (0-6) 0 == Sunday etc\n' +
      '\n' +
      'so your code should look like this:',
    vote: { up: 5, down: 6 },
    publishedAt: '2023-08-01T18:38:24.402+00:00',
  },
  {
    id: 'dkfjseofwnego243820',
    author: {
      id: 'bog4t',
      name: 'bogᔦT',
      image: 'https://github.com/bog4t.png',
    },
    body:
      '\n' +
      '\n' +
      'For true mysql style output use this function below: 2019/02/28 15:33:12\n' +
      '\n' +
      "    If you click the 'Run code snippet' button below\n" +
      '    It will show you an simple realtime digital clock example\n' +
      '    The demo will appear below the code snippet.\n',
    vote: { up: 5, down: 6 },
    publishedAt: '2023-08-01T18:38:24.402+00:00',
  },
  {
    id: 'dkfjseofwnego243820',
    author: {
      id: 'Manusha Dilan',
      name: 'Manusha Dilan',
      image: 'https://github.com/manushadilan.png',
    },
    body:
      '\n' +
      '\n' +
      'Basic JS (good to learn): we use the Date() function and do all that we need to show the date and day in our custom format.',
    vote: { up: 5, down: 6 },
    publishedAt: '2023-08-01T18:38:24.402+00:00',
  },
  {
    id: 'dkfjseofwnego243820',
    author: {
      id: 'Ele7o',
      name: 'Ele7o',
      image: 'https://github.com/Ele7o.png',
    },
    body:
      '\n' +
      '\n' +
      'I have found the simplest way to get current date and time in JavaScript from here - How to get current Date and Time using JavaScript',
    vote: { up: 5, down: 6 },
    publishedAt: '2023-08-01T18:38:24.402+00:00',
  },
];

export const questionDetail: QuestionDetail = {
  question: sampleQuestion,
  answers: sampleAnswers,
};
