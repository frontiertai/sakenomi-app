'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { FaUser } from 'react-icons/fa'

export default function Profile() {
  const [profile, setProfile] = useState({
    name: '',
    favoriteSake: '',
    preferredTaste: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // ここで通常はプロフィールをデータベースに保存します
    console.log('プロフィールを保存:', profile)
    // 今回はプロフィールをログに出力するだけです
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">あなたの日本酒プロフィール</h1>
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
        <FaUser className="text-5xl text-primary mb-6 mx-auto" />
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="name">名前</Label>
            <Input
              id="name"
              value={profile.name}
              onChange={(e) => setProfile({...profile, name: e.target.value})}
              placeholder="名前を入力してください"
            />
          </div>
          <div>
            <Label htmlFor="favoriteSake">好きな日本酒</Label>
            <Input
              id="favoriteSake"
              value={profile.favoriteSake}
              onChange={(e) => setProfile({...profile, favoriteSake: e.target.value})}
              placeholder="好きな日本酒を入力してください"
            />
          </div>
          <div>
            <Label htmlFor="preferredTaste">好みの日本酒の味</Label>
            <Select
              value={profile.preferredTaste}
              onValueChange={(value) => setProfile({...profile, preferredTaste: value})}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="味を選択してください" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sweet">甘口</SelectItem>
                <SelectItem value="dry">辛口</SelectItem>
                <SelectItem value="balanced">バランスの取れた味</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full">プロフィールを保存</Button>
        </form>
      </div>
    </div>
  )
}

