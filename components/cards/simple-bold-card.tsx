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
  mainValue: string;
  subValue: string;
}) => {
  return (
    <Card x-chunk="dashboard-01-chunk-0">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{mainValue}</div>
        <p className="text-xs text-muted-foreground">
          {subValue} from last month
        </p>
      </CardContent>
    </Card>
  );
};
