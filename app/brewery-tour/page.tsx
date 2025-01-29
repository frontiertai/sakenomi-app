"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { FaMapMarkedAlt } from "react-icons/fa"
import { useRouter } from "next/navigation"

export default function BreweryTour() {
  const router = useRouter()
  const [region, setRegion] = useState("")

  const handleGenerateRoute = () => {
    if (!region) return
    router.push(`/brewery-tour/route?region=${region}`)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">酒蔵巡りを計画する</h1>
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
        <FaMapMarkedAlt className="text-5xl text-primary mb-6 mx-auto" />
        <div className="space-y-6">
          <div>
            <Label htmlFor="region">地区を選ぶ</Label>
            <Select value={region} onValueChange={setRegion}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="地区を選択してください" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sennan">泉南地域</SelectItem>
                <SelectItem value="sennan-sakai-1">泉南・堺地域①</SelectItem>
                <SelectItem value="mishima-1">三島地域①</SelectItem>
                <SelectItem value="mishima-2">三島地域②</SelectItem>
                <SelectItem value="sakai-minamikawachi">堺・南河内地域</SelectItem>
                <SelectItem value="kitakawachi">北河内地域</SelectItem>
                <SelectItem value="sennan-sakai-2">泉南・堺地域②</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button onClick={handleGenerateRoute} className="w-full mt-4">
            ルートを生成
          </Button>
        </div>
      </div>
    </div>
  )
}



