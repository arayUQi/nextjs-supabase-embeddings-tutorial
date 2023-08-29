'use client'

import Link from 'next/link'

const KnowledgeButton = () => {
  return (
    <div className="flex justify-end mb-5">
      <Link href="/knowledge">
        <div className="focus:outline-none text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 dark:focus:ring-blue-900">
          知識データベース
        </div>
      </Link>
    </div>
  )
}

export default KnowledgeButton
