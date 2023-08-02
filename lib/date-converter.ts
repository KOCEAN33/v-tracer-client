import { format, formatDistance } from 'date-fns';
import { ko } from 'date-fns/locale';

export function dateConverter(nowDate: string, days: number): string {
  const now = new Date();
  const inputDate: Date = new Date(nowDate);
  const distance = (+now - +inputDate) / 86400000;

  if (distance > days) {
    return format(new Date(now), 'yyyy/MM/dd');
  }

  return formatDistance(new Date(nowDate), new Date(), {
    addSuffix: true,
    locale: ko,
  });
}
