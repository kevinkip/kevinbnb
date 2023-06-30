'use client'

import Image from "next/image"
import { useRouter } from "next/navigation" //not next/router

const Logo = () => {
    const router = useRouter()

  return (
    <Image 
    onClick={() => router.push('/')}
    className="hidden md:block cursor-pointer"
    src="/images/kbnb_wide.png"
    height="200"
    width="400"
    alt="Logo"
    />
  )
}

export default Logo