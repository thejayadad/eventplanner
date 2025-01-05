import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={'/'} className="flex items-center space-x-2 mb-6">
    <div className="bg-yellow-500 text-black p-2 rounded-full text-2xl font-bold">
      EF
    </div>
    <h1 className="text-2xl font-bold text-primary">EventFair</h1>
  </Link>
  )
}

export default Logo