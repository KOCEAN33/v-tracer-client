import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { format, formatDistance } from 'date-fns';
import { ko } from 'date-fns/locale';

interface AuthorDateLineProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  image: string;
  publishedAt: string;
}

export const AuthorDateLine = ({
  name,
  image,
  publishedAt,
}: AuthorDateLineProps) => {
  function dateConverter(nowDate: string, days: number): string {
    const now = new Date();
    const inputDate: Date = new Date(nowDate);
    const distance = (+now - +inputDate) / 86400000;

    if (distance > days) {
      return format(new Date(nowDate), 'yyyy/MM/dd');
    }

    return formatDistance(new Date(nowDate), new Date(), {
      addSuffix: true,
      locale: ko,
    });
  }

  return (
    <div className="flex flex-row items-center">
      <Avatar className="h-6 w-6">
        <AvatarImage src={image} alt={name} />
        <AvatarFallback>{name} </AvatarFallback>
      </Avatar>
      <div className="ml-2 text-base">{name}</div>
      <div className="pl-2 pr-2">•</div>
      <div className="text-sm">{dateConverter(publishedAt, 14)}</div>
    </div>
  );
};
