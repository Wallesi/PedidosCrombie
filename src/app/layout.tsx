import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './Components/Nav'
import Footer from './Components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pedidos Crombie',
  description: 'Pagina de pedidos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <div className='container-xl mx-auto'>
          
            <NavBar />
          
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
