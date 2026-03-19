import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Økonoobs – BDO AI Sprint | NM i Økonomi 2026',
  description: 'Økonoobs presenterer BDO AI Sprint – et standardisert 12-ukers program som hjelper SMB-er å skape dokumentert forretningsverdi med KI.',
  keywords: ['BDO', 'AI Sprint', 'KI', 'SMB', 'NM i Økonomi', 'Økonoobs'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="no" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-ink-900 text-cream-200 font-body antialiased">
        {children}
      </body>
    </html>
  )
}
