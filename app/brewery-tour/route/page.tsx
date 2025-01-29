"use client"

import { useState } from "react"
import { FaWineBottle, FaTrain, FaBus, FaWalking } from "react-icons/fa"
import { Button } from "@/components/ui/button"


type Brewery = {
  id: number
  name: string
  image: string
  sake:string
  image2:string
  tel:string
  time:string
  visit:string
  open_time:string
  url:string
  details: string
}

type TransportationMethod = "train" | "bus" | "walk"

type RouteStep = {
  brewery: Brewery
  transportationMethod: TransportationMethod
  googleMapsUrl: string
}

const startingPoints = ["大阪駅", "道頓堀", "関西国際空港", "新大阪駅"]

const regions: { [key: string]: number[] } = {
  "泉南地域": [1, 2],
  "泉南・堺地域①": [1, 2, 11, 7],
  "三島地域①": [3, 4],
  "三島地域②": [3, 4, 5],
  "堺・南河内地域": [7, 8],
  "北河内地域": [9, 10],
  "泉南・堺地域②": [7, 11]
}

const breweries: Brewery[] = [
  { id: 1, name: "有限会社北庄司酒造", image: "/image/1_kita_build.jpg", sake: "荘の郷", image2: "/image/1_kita_sake.jpg", tel: "072-468-3172", time: "9時～16時", visit: "10時～16時 所要時間 60分", open_time: "9時～16時", url: "https://kitashouji.jp/", details: "伝統的な手法で醸造" },
  { id: 2, name: "浪花酒造有限会社", image: "/image/2_naniwa_build.jpg", sake: "浪花政宗", image2: "/image/2_naniwa_sake.jpg", tel: "072-472-0032", time: "平日10時～17時 土日祝10時～16時", visit: "10時～16時", open_time: "平日10時～17時 土日祝10時～16時", url: "https://naniwamasamune.com/", details: "革新的な酒造り" },
  { id: 3, name: "壽酒造株式会社", image: "/image/3_kotobuki_build.jpg", sake: "國乃長", image2: "/image/3_kotobuki_sake.jpg", tel: "072-696-0003", time: "平日10時～17時 土日祝10時～16時", visit: "10時～16時 所要時間 60分-3時間", open_time: "平日10時～17時 土日祝10時～16時", url: "https://kuninocho.jp/", details: "地元米を使用" },
  { id: 4, name: "清鶴酒造株式会社", image: "/image/4_kiyoturu_build.jpg", sake: "清鶴", image2: "/image/4_kiyoturu_sake.jpg", tel: "072-696-0014", time: "", visit: "毎年2月 所要時間", open_time: "", url: "https://www.kiyotsuru.jp/", details: "伝統の味" },
  { id: 5, name: "中尾酒造株式会社", image: "/image/5_nakao_build.jpg", sake: "凡愚", image2: "/image/5_nakao_sake.jpg", tel: "072-643-2226", time: "072-643-2226", visit: "平日10時～17時", open_time: "", url: "https://nakaosyuzou.com/", details: "職人技が光る" },
  { id: 7, name: "有限会社利休蔵", image: "/image/6_rikyuu_build.jpg", sake: "千利休 純米吟醸酒", image2: "/image/6_rikyuu_sake.jpg", tel: "072-222-0708", time: "平日10時～17時", visit: "平日10時～17時", open_time: "平日10時～17時", url: "https://rikyugura.jp/", details: "茶文化と融合" },
  { id: 8, name: "西條合資会社", image: "/image/8_nishi_build.jpg", sake: "天野酒", image2: "/image/8_nishi_sake.jpg", tel: "0721-55-1101", time: "10時～17時", visit: "1月27日土曜から3月2日までの毎週土曜日開催", open_time: "10時～17時", url: "https://www.amanosake.com/", details: "地域密着の酒蔵" },
  { id: 9, name: "大門酒造株式会社", image: "/image/9_daimon_build.jpg", sake: "利休梅", image2: "/image/9_daimon_sake.jpg", tel: "072-891-0353", time: "平日9時～17時", visit: "水、木、金の午後12時半", open_time: "平日9時～17時", url: "Home - JP - Daimon Brewery Co., Ltd.", details: "歴史ある酒造" },
  { id: 10, name: "山野酒造株式会社", image: "/image/10_yamano_build.jpg", sake: "片野桜 大吟醸 玄櫻", image2: "/image/10_yamano_sake.jpg", tel: "072-891-1046", time: "9時～17時", visit: "2025年1月14日～3月28日 所要時間 60分-3時間", open_time: "9時～17時", url: "https://www.katanosakura.com/", details: "独自の発酵技術" },
  { id: 11, name: "株式会社元朝", image: "/image/11_moto_build.jpg", sake: "元朝", image2: "/image/11_moto_sake.jpg", tel: "072-438-1518", time: "11時～20時", visit: "立ち飲み屋さん", open_time: "11時～20時", url: "https://gancho-sake.jimdofree.com/", details: "新時代の日本酒" }
];

const transportationMethods: TransportationMethod[] = ["train", "bus", "walk"]

const TransportationIcon = ({ method }: { method: TransportationMethod }) => {
  switch (method) {
    case "train":
      return <FaTrain className="text-2xl" />
    case "bus":
      return <FaBus className="text-2xl" />
    case "walk":
      return <FaWalking className="text-2xl" />
  }
}

export default function BreweryTourRoute() {
  const [startingPoint, setStartingPoint] = useState(startingPoints[0])
  const [region, setRegion] = useState(Object.keys(regions)[0])
  const [route, setRoute] = useState<RouteStep[]>([])

  const generateRoute = () => {
    const breweryIds = regions[region] || []
    const selectedBreweries = breweries.filter(b => breweryIds.includes(b.id))
    const newRoute = selectedBreweries.map((brewery, index) => ({
      brewery,
      transportationMethod: transportationMethods[index % transportationMethods.length],
      //Googleマップの経路検索URLを動的に生成
      googleMapsUrl: `https://www.google.com/maps/dir/${encodeURIComponent(index === 0 ? startingPoint : selectedBreweries[index - 1].name)}/${encodeURIComponent(brewery.name)}/`
    }))
    setRoute(newRoute)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">酒蔵巡りルート</h1>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">出発地点:</label>
        <select value={startingPoint} onChange={(e) => setStartingPoint(e.target.value)} className="border rounded px-2 py-1 w-full">
          {startingPoints.map(point => <option key={point} value={point}>{point}</option>)}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">地域を選択:</label>
        <select value={region} onChange={(e) => setRegion(e.target.value)} className="border rounded px-2 py-1 w-full">
          {Object.keys(regions).map(r => <option key={r} value={r}>{r}</option>)}
        </select>
      </div>

      <Button onClick={generateRoute} className="mb-8 w-full">ルートを生成</Button>

      <div className="space-y-8">
        {route.map((step, index) => (
          <div key={step.brewery.id} className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <FaWineBottle className="text-2xl text-primary mr-2" />
                <h2 className="text-2xl font-bold">{step.brewery.name}</h2>
              </div>
              <div className="flex space-x-5 ">
                <div>
                  <img src={step.brewery.image} alt={step.brewery.name} className="w-96 h-48 object-cover mb-4 rounded" />
                  <p className="text-gray-600 mb-4">{step.brewery.details}</p>
                </div>
                <div>
                  <img src={step.brewery.image2} alt={step.brewery.name} className="w-36 h-48 object-cover mb-4 rounded" />
                  <p className="text-gray-600 mb-4">代表銘柄:{step.brewery.sake}</p>
                </div>
                <div className="flex p-4 flex-col  items-center space-y-8 text-sm border-4  border-black  rounded-md h-full w-96 ">
                  <div>TEL: {step.brewery.tel}</div>
                  <div>営業時間:{step.brewery.time}</div>
                  <div>見学:{step.brewery.visit}</div>
                  <div>売店:{step.brewery.open_time}</div>
                  <a href={step.brewery.url}target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">HPはこちらから</a>
                </div>
               
              </div>
              
              
              {index < route.length - 1 && (
                <div className="flex items-center justify-between border-t pt-4">
                  <div className="flex items-center">
                    <TransportationIcon method={step.transportationMethod} />
                    <span className="ml-2 text-gray-600">次の目的地まで: {step.transportationMethod}</span>
                  </div>
                  <a href={step.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">ルートを見る</a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

