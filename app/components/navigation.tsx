'use client'

import Link from 'next/link'

// ナビゲーション
const Navigation = () => {
  return (
    <header className="border-b py-5">
      <div className="text-center">
        <Link href="/" className="font-bold text-xl cursor-pointer">
          ダイナモテックソリューション株式会社：機械学習班
        </Link>
      </div>
    </header>
  )
}

export default Navigation
