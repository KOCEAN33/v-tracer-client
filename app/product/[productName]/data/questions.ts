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
    publishedAt: '2023-07-01T18:38:24.402+00:00',
  },
  {
    id: 'dfg3k4hj56s8fgd23',
    author: {
      id: 'as45dfg67hj',
      image: 'https://github.com/user123.png',
      name: 'User123',
    },
    title: '휴대폰 추천해주세요!',
    body: '새로 휴대폰을 구매하려고 하는데 어떤 모델이 좋을까요?',
    answers: 8,
    vote: {
      up: 20,
      down: 2,
    },
    publishedAt: '2023-07-05T09:22:11.123+00:00',
  },

  {
    id: '9o7i6u5y4t3r2e1wq',
    author: {
      id: 'zxcvbnmasd',
      image: 'https://github.com/user456.png',
      name: 'User456',
    },
    title: '여행지 추천해주세요!',
    body: '다가오는 휴가 때 어디로 여행을 갈까 고민 중입니다. 제안 부탁드려요!',
    answers: 12,
    vote: {
      up: 15,
      down: 1,
    },
    publishedAt: '2023-07-10T15:45:08.765+00:00',
  },

  {
    id: 'plmoknijbuhvycftxdr',
    author: {
      id: 'qwertyuiop',
      image: 'https://github.com/user789.png',
      name: 'User789',
    },
    title: '코딩 공부 시작하려고 하는데, porgramming language부터 고를까요?',
    body: '프로그래밍 언어부터 공부하려고 하는데 어떤 언어부터 시작하는게 좋을까요?',
    answers: 6,
    vote: {
      up: 8,
      down: 3,
    },
    publishedAt: '2023-07-15T20:11:05.890+00:00',
  },

  {
    id: 'bnmwe1qazx2cder3vf',
    author: {
      id: 'lkjhgfdsa',
      image: 'https://github.com/user987.png',
      name: 'User987',
    },
    title: '책 추천해주세요!',
    body: '요즘 읽을 만한 책을 찾고 있어요. 다양한 추천 부탁드립니다!',
    answers: 10,
    vote: {
      up: 25,
      down: 0,
    },
    publishedAt: '2023-07-20T12:34:56.789+00:00',
  },
  {
    id: 'zxcvbnmasdfghjklqw',
    author: {
      id: 'poiuytrewq',
      image: 'https://github.com/user246.png',
      name: 'User246',
    },
    title: '운동하는데 필요한 식단 정보 공유해요!',
    body: '운동을 시작하려는데 어떤 식단을 가져야 할지 알려주세요.',
    answers: 3,
    vote: {
      up: 6,
      down: 2,
    },
    publishedAt: '2023-07-25T07:59:32.456+00:00',
  },
  {
    id: 'mnbvcxzpoiuytrewal',
    author: {
      id: 'mnbvcxz',
      image: 'https://github.com/user135.png',
      name: 'User135',
    },
    title: '자유로운 휴가지 추천해주세요!',
    body: '스트레스를 풀기 위해 가까운 곳에서 자유롭게 놀 수 있는 휴가지를 찾고 있습니다.',
    answers: 7,
    vote: {
      up: 11,
      down: 1,
    },
    publishedAt: '2023-07-30T18:20:09.345+00:00',
  },
  {
    id: '09876poiuytrdfghjk',
    author: {
      id: '09876poiuy',
      image: 'https://github.com/user579.png',
      name: 'User579',
    },
    title: '취미로 배울 수 있는 언어 추천해주세요!',
    body: '시간 날 때마다 배울 수 있는 언어를 찾고 있습니다. 추천 부탁드립니다.',
    answers: 4,
    vote: {
      up: 9,
      down: 0,
    },
    publishedAt: '2023-08-05T14:15:18.567+00:00',
  },
  {
    id: 'lkjhgfdsamnbvcxqwe',
    author: {
      id: 'zxcvbnmlkj',
      image: 'https://github.com/user753.png',
      name: 'User753',
    },
    title: '집 꾸미는 데코 아이디어 공유해주세요!',
    body: '집을 더 아늑하게 꾸미고 싶은데 다양한 데코 아이디어를 제안해주세요.',
    answers: 9,
    vote: {
      up: 14,
      down: 2,
    },
    publishedAt: '2023-08-10T09:43:21.234+00:00',
  },
  {
    id: 'qazwsxplmkonijuhbv',
    author: {
      id: 'qazwsxplm',
      image: 'https://github.com/user246.png',
      name: 'User246',
    },
    title: '공부 방법에 대한 조언 부탁드립니다!',
    body: '효율적인 공부 방법이 있을까요? 공부에 도움이 되는 조언을 알려주세요.',
    answers: 11,
    vote: {
      up: 18,
      down: 3,
    },
    publishedAt: '2023-08-15T16:07:34.890+00:00',
  },
];
