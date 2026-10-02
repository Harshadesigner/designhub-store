import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DesignHub Store',
  description: 'Premium marketplace for digital design assets and creative products.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
