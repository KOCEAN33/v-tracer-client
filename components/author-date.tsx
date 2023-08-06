import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { dateConverter } from '@/lib/date-converter';

interface AuthorDateLineProps {
  name: string;
  image: string;
  publishedAt: string;
}

export function AuthorDateLine({
  name,
  image,
  publishedAt,
}: AuthorDateLineProps) {
  return (
    <div className="flex flex-row items-center">
      <Avatar className="h-6 w-6">
        <AvatarImage src={image} alt={name} />
        <AvatarFallback>{name} </AvatarFallback>
      </Avatar>
      <div className="ml-2 text-sm">{name}</div>
      <div className="pl-2 pr-2">•</div>
      <div className="text-sm">{dateConverter(publishedAt, 14)}</div>
    </div>
  );
}
