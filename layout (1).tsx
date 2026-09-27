import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Las Delicias de Jaimito | Mexican Restaurant in Passaic, NJ',
  description: 'Authentic Mexican food in Passaic, New Jersey. Order online, explore favorites, catering, hours, and location for Las Delicias de Jaimito.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>
}
