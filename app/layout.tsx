import './globals.css'
import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import LoginModal from './components/modals/LoginModal'
import RegisterModal from './components/modals/RegisterModal'
import SearchModal from './components/modals/SearchModal'
import RentModal from './components/modals/RentModal'

import ToasterProvider from './providers/ToasterProvider'
import getCurrentUser from './actions/getCurrentUser'

import ClientOnly from './components/ClientOnly'

const font = Nunito({ subsets: ['latin'] })

//can control title and description
export const metadata = {
  title: 'Kevinbnb',
  description: 'Airbnb clone',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="NLGF57S_BI82gpIzIaiOoydbjYJoPnL2788lzLctcyY" />
      </head>
      <body className={font.className}>
          <ClientOnly>
            <ToasterProvider />
            <LoginModal />
            <RegisterModal />
            <SearchModal />
            <RentModal />
            <Navbar currentUser={currentUser} />
          </ClientOnly>
          <div className="pb-20 pt-28">
            {children}
          </div>
        </body>
    </html>
  )
}
