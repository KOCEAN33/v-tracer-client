'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const SimpleBoldCard = ({
  title,
  icon,
  mainValue,
  subValue,
}: {
  title: string;
  icon: React.ReactNode;
  mainValue: string | undefined;
  subValue: string | undefined;
}) => {
  const increaseDecrease = (value: string | undefined): string => {
    if (Number(value) < 0) {
      return '감소';
    }
    return '증가';
  };

  return (
    <Card x-chunk="dashboard-01-chunk-0">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{mainValue}</div>
        <p className="text-xs text-muted-foreground">
          지난 달에 비해 {subValue}% {increaseDecrease(subValue)}
        </p>
      </CardContent>
    </Card>
  );
};
