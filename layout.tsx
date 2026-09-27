import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Las Delicias de Jaimito | Mexican Food in Passaic, NJ',
  description:
    'Authentic Mexican restaurant in Passaic, New Jersey. Order online, view the menu, and visit Las Delicias de Jaimito at 25 Howe Ave #2.',
  openGraph: {
    title: 'Las Delicias de Jaimito',
    description: 'Authentic Mexican food in Passaic, NJ.',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
