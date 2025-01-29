import Link from 'next/link'
import { FaWineBottle } from 'react-icons/fa'

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <FaWineBottle className="text-2xl" />
            <span className="text-xl font-bold">大阪酒探検</span>
          </Link>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:text-gray-300 transition duration-300">ホーム</Link></li>
            <li><Link href="/brewery-tour/route" className="hover:text-gray-300 transition duration-300">酒蔵巡り</Link></li>
            <li><Link href="/sake-pairing" className="hover:text-gray-300 transition duration-300">酒ペアリング</Link></li>
            <li><Link href="/profile" className="hover:text-gray-300 transition duration-300">プロフィール</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header

