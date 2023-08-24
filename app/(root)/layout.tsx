import { redirect } from 'next/navigation';

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // TODO: Mockup data
  const product = { id: '9312u2itr3oij', handle: 'notion' };

  const userId = 'isdfa';

  if (!userId) {
    redirect('/login');
  }

  return <>{children}</>;
}
