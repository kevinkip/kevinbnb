'use client'

import Image from "next/image"
import { useRouter } from "next/navigation" //not next/router

const Logo = () => {
    const router = useRouter()

  return (
    <Image 
    onClick={() => router.push('/')}
    className="hidden md:block cursor-pointer py-1 px-1 rounded-lg hover:bg-neutral-100 transition"
    src="/images/kbnb_bold_white.png"
    height="100"
    width="100"
    alt="Logo"
    />
  )
}

export default Logo