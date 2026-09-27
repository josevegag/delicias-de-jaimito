import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.deliciasdejaimito.net'),
  title: 'Las Delicias de Jaimito | Mexican Food in Passaic, NJ',
  description: 'Comida mexicana en Passaic, NJ. Explora los platillos de Las Delicias de Jaimito y ordena en línea. Mexican food, photos and online ordering.',
  openGraph: {
    title: 'Las Delicias de Jaimito',
    description: 'Comida mexicana en Passaic, NJ / Mexican food in Passaic, New Jersey.',
    url: '/',
    siteName: 'Las Delicias de Jaimito',
    locale: 'es_US',
    alternateLocale: ['en_US'],
    type: 'website',
    images: [{ url: '/images/logo-oficial.png', width: 408, height: 333, alt: 'Logo oficial de Las Delicias de Jaimito' }],
  },
  twitter: {
    card: 'summary',
    images: ['/images/logo-oficial.png'],
  },
  icons: {
    icon: '/images/logo-oficial.png',
    apple: '/images/logo-oficial.png',
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>
}
