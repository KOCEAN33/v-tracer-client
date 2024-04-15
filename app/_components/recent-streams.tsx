import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const RecentStreams = () => {
  const recentStreams = [
    {
      id: 1,
      image:
        'https://yt3.googleusercontent.com/ytc/AIdro_k7hvLLvf0JbyupchJ_qj3QGhfDUfDe9qz-qpRX=s176-c-k-c0x00ffffff-no-rj',
      title: '에이펙스 레전드 방송',
      name: '하나부사 리사',
      duration: '1:20:24',
    },
    {
      id: 2,
      image:
        'https://yt3.googleusercontent.com/5cB1RxA8O44yMKNGvEMqvS3E1FaTloSC1GoTfY48kjAcxllPwyySVO9ioRoSfLSKFATLJycV=s176-c-k-c0x00ffffff-no-rj',
      title: '오버워치 2 랭크 갈겜',
      name: '류승룡',
      duration: '2:15:38',
    },
    {
      id: 3,
      title: '리그 오브 레전드 챌린저 매치',
      image:
        'https://yt3.googleusercontent.com/76a_ty_OwF-nJWNuuxxeJokcgqlmkKCHwXSto9cKKkyjPO2agiu5Tc7t4f6dz5uaab7X8U5mVQ=s176-c-k-c0x00ffffff-no-rj',
      name: '페이커',
      duration: '3:42:51',
    },
    {
      id: 4,
      title: '발로란트 고인물 매치',
      image:
        'https://yt3.googleusercontent.com/oIDXQDZsMSTeGShVPE_-CAifw4duLe5z-8_6zhT3x3cenZq0KScM6UH0Y6Gva9k-p648YDrNMA=s176-c-k-c0x00ffffff-no-rj',
      name: '김민교',
      duration: '1:58:12',
    },
    {
      id: 5,
      title: '카트라이더 러쉬플러스 1인칭 시점',
      image:
        'https://yt3.googleusercontent.com/t557GNcLS_5tgJCkbA7qaEs7XrogCmScjWRauTQRtknc7VXuGMF18YjeLVHFEarbkRN5pWOF=s176-c-k-c0x00ffffff-no-rj',
      name: '문호준',
      duration: '0:48:39',
    },
  ];
  return (
    <Card x-chunk="dashboard-01-chunk-5">
      <CardHeader>
        <CardTitle>Recent Streams</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-8">
        {recentStreams.map((recentStream) => (
          <div className="flex items-center gap-4" key={recentStream.id}>
            <Avatar className="hidden h-9 w-9 sm:flex">
              <AvatarImage src={recentStream.image} alt="Avatar" />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <p className="text-md font-medium leading-none">
                {recentStream.title}
              </p>
              <p className="text-sm text-muted-foreground">
                {recentStream.name}
              </p>
            </div>
            <div className="ml-auto font-medium">{recentStream.duration}</div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
