import Link from 'next/link'
import { FaWineBottle, FaUtensils } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">大阪酒探検へようこそ</h1>
        <p className="text-xl">大阪の豊かな酒文化を発見しよう</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link href="/brewery-tour/route" className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
          <div className="p-6">
            <FaWineBottle className="text-5xl text-primary mb-4 mx-auto" />
            <h2 className="text-2xl font-bold mb-2 text-center">酒蔵巡り</h2>
            <p className="text-center">大阪の酒蔵を巡るツアーを計画しよう</p>
          </div>
        </Link>
        <Link href="/sake-pairing" className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
          <div className="p-6">
            <FaUtensils className="text-5xl text-primary mb-4 mx-auto" />
            <h2 className="text-2xl font-bold mb-2 text-center">酒ペアリング</h2>
            <p className="text-center">料理に合う最適な日本酒を見つけよう</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

