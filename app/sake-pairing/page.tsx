'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FaGlassWhiskey } from 'react-icons/fa'

export default function SakePairing() {
  const [dish, setDish] = useState('')
  const [recommendation, setRecommendation] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // ここで通常は日本酒推薦のAPIを呼び出します
    // 今回はモックの推薦を設定します
    setRecommendation(`${dish}には純米大吟醸酒をおすすめします。軽やかで果実のような香りが、繊細な味わいによく合います。`)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">日本酒と料理のペアリング</h1>
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
        <FaGlassWhiskey className="text-5xl text-primary mb-6 mx-auto" />
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="dish">どんな料理を食べますか？</Label>
            <Input
              id="dish"
              value={dish}
              onChange={(e) => setDish(e.target.value)}
              placeholder="料理名を入力してください"
            />
          </div>
          <Button type="submit" className="w-full">おすすめを見る</Button>
        </form>
        {recommendation && (
          <div className="mt-8 p-4 bg-gray-100 rounded-lg">
            <h2 className="text-xl font-bold mb-2">おすすめの日本酒</h2>
            <p>{recommendation}</p>
          </div>
        )}
      </div>
    </div>
  )
}

