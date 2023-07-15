import Navbar from '@/components/navbar';

export default async function ProductLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { productName: string };
}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
