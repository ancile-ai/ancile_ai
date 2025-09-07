import { Inter } from 'next/font/google'
import '../index.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ancile AI - Consulting & Solutions',
  description: 'Veteran-founded AI consulting firm specializing in advanced logistics solutions, generative AI planning, and government-focused AI implementations.',
  icons: {
    icon: [
      { url: '/images/logo/ancile_logo_orange_white_circle_transparent.png', sizes: '180x180' }
    ],
  },
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
