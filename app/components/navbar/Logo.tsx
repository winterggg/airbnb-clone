'use client'; // This is required for the client-side code to work

import Image from "next/image";
import { useRouter } from "next/navigation"; // This is the new since Next.js 13


const Logo = () => {
  const router = useRouter();

  return (
    <Image 
      alt="Logo"
      className="hidden md:block cursor-pointer"
      height="100"
      width="100"
      src="/images/logo.png"
      onClick={() => router.push("/")}
    />
  )

}

export default Logo;