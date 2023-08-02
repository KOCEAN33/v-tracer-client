import { formatDistance } from 'date-fns';
import { ko } from 'date-fns/locale';

function dateConverter(date, days) {
  const dateIn = new Date(date);
  const dateNow = new Date();

  if ((dateNow - dateIn) / 8640000 > days) {
    return;
  }

  const result = formatDistance(new Date(date), new Date(), {
    addSuffix: true,
    locale: ko,
  });
  return result;
}

const now = '2023-08-01T18:38:24.402+00:00';
const distance = 30;

console.log(dateConverter(now, distance));
