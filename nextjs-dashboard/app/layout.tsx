import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

// RootLayout :: required
// Any UI you add to the root layout will be
// shared across all pages in your application.
// You can use the root layout to modify your
// <html> and <body> tags, and add metadata
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
