'use client'

import Image from "next/image"
import { useRouter } from "next/navigation" //not next/router

const Logo = () => {
    const router = useRouter()

  return (
    <Image 
    onClick={() => router.push('/')}
    className="hidden md:block cursor-pointer py-3 px-4 rounded-full hover:bg-neutral-100 transition"
    src="/images/kbnb_wide.png"
    height="100"
    width="100"
    alt="Logo"
    />
  )
}

export default Logo