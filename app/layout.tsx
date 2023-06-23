import './globals.css'
import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/Navbar'

const inter = Nunito({ subsets: ['latin'] })

//can control title and description
export const metadata = {
  title: 'Kevinbnb',
  description: 'Airbnb clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
