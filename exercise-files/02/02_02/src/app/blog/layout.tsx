export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1>Blog</h1><hr />
      {children}
    </>
  );
}