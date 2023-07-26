export interface Reviews {
  id: string;
  author: { id: string; name: string };
  title: string;
  body: string;
  vote: { up: number; down: number };
  publishedAt: string;
  comment: [{ id: string; author: { id: string; name: string }; body: string }];
}

export const reviews: Reviews[] = [
  {
    id: '2752496fogsfogn345o',
    author: { id: '6494ed4bcdebc4eb4c615c25', name: 'KOCEAN' },
    title: '노트앱 그 이상',
    body: '노션은 단순한 노트앱을 넘어 데이터베이스 기능과 API 지원을 통해 개인이 사용할 수 있는 최고의 데이터베이스 환경을 제공한다.',
    vote: { up: 15, down: 3 },
    publishedAt: '1975-08-19T23:15:30.000Z',
    comment: [
      {
        id: '3274023sdgfoserhgo23',
        author: { id: 'dafsdfadsfad', name: 'Serizawa Asahi' },
        body: '노트앱중 최고인거 같으면 개추 일단 나부터',
      },
    ],
  },
];
