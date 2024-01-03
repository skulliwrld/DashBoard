import { Inter } from 'next/font/google'
import '@/components/ui/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Admin App',
  description: 'Discover Our Admin Panel Where All Your Details Are In Place',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
