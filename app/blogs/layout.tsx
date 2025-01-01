export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="mx-4 mb-32">{children}</section>;
}
