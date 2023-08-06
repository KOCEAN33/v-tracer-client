export interface Reviews {
  id: string;
  author: { id: string; image: string; name: string };
  title: string;
  body: string;
  vote: { up: number; down: number };
  publishedAt: string;
}

export const SampleReviews: Reviews[] = [
  {
    id: '2752496fogsfogn345o',
    author: {
      id: '6494ed4bcdebc4eb4c615c25',
      image: 'https://github.com/kocean33.png',
      name: 'KOCEAN',
    },
    title: '노트앱 그 이상',
    body: '노션은 단순한 노트앱을 넘어 데이터베이스 기능과 API 지원을 통해 개인이 사용할 수 있는 최고의 데이터베이스 환경을 제공한다.',
    vote: { up: 15, down: 3 },
    publishedAt: '2023-08-01T18:38:24.402+00:00',
  },
  {
    id: '324u503495u60geo',
    author: {
      id: '6494ed4bcdebc4eb4c615c25',
      image: 'https://github.com/kocean33.png',
      name: 'KOCEAN',
    },
    title: '앗살라말라이쿰',
    body: '노션은 단순한 노트앱을 넘어 데이터베이스 기능과 API 지원을 통해 개인이 사용할 수 있는 최고의 데이터베이스 환경을 제공한다.',
    vote: { up: 10, down: 16 },
    publishedAt: '2023-07-22T18:38:24.402+00:00',
  },
  {
    id: '324u503495u60hkyukgeo',
    author: {
      id: '6494ed4bcdebc4sdfseb4c615c25',
      image: 'https://github.com/kocean33.png',
      name: 'KOCEAN',
    },
    title: '앗살라말라dhgkaerhtaiuehgkzdng이쿰',
    body: '노션은 단순한 노트앱을 넘어 데이터베이스 기능과 API 지원을 통해 개인이 사용할 수 있는 최고의 데이터베이스 환경을 제공한다.',
    vote: { up: 218345, down: 10 },
    publishedAt: '2023-05-22T18:38:24.402+00:00',
  },
];
