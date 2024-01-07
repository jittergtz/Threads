"use client"
import React from 'react'
import { sidebarLinks } from "@/constants"
import Image from 'next/image'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

function BottomNav() {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <nav className='md:hidden fixed bottom-0 z-10 w-full h-16 bg-[#0f0f0f] backdrop-blur-lg '>
       


       {/* Case User is not Signed in  */}
 <SignedOut>
        <div className='px-10 flex justify-around '>
        {sidebarLinks.slice(0, 2).map((link) => {
            const isActive = (pathname.includes
              (link.route) && link.route.length > 1)
                || pathname === link.route
          
      return ( 
       <Link 
       href={link.route}
       key={link.label}>
       <div
        className={`p-4 rounded-xl hover:bg-neutral-800
        ${isActive && "bg-neutral-800"}`}>
          <Image
          src={link.imgURL}
          width={26}
          height={26}
          alt='nav-links'/> 
        </div>
        </Link>
        )})}

        </div>

 </SignedOut>
      
      
      
      
      
  
      
      
      
      
      
       {/* Case User is Signed in  */}
       <SignedIn>
       <div className=' px-10 flex justify-between'>
        {sidebarLinks.map((link) => {
           const isActive = (pathname.includes
            (link.route) && link.route.length > 1)
              || pathname === link.route

            return (
            <Link 
            href={link.route}
            key={link.label}>
            <div 
            className={`p-4 rounded-xl hover:bg-neutral-800
            ${isActive && "bg-neutral-800"}`}>
            <Image
          
            src={link.imgURL}
            width={26}
            height={26}
            alt='nav-links'/> 
            </div>
            </Link>
            )})}
        </div>
  
      </SignedIn>


    </nav>
  )
}

export default BottomNav