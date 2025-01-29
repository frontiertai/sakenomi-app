import './globals.css'
import { Noto_Sans_JP } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const notoSansJP = Noto_Sans_JP({ subsets: ['latin'] })

export const metadata = {
  title: '大阪酒探検',
  description: '大阪の豊かな酒文化を発見しよう',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow japanese-pattern">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

