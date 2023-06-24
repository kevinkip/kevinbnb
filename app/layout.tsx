import './globals.css'
import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import LoginModal from './components/modals/LoginModal'

import ClientOnly from './components/ClientOnly'

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
          <ClientOnly>
              <LoginModal />
              <Navbar />
          </ClientOnly>
          {children}
        </body>
    </html>
  )
}
