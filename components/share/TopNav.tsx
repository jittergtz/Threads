"use client"
import { SignInButton, SignOutButton, SignedIn, SignedOut } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { sidebarLinks } from "@/constants"
import { Button } from '../ui/button'
import { usePathname, useRouter } from 'next/navigation'

function TopNav() {
  const router = useRouter()
  const pathname = usePathname()


  return (
    <nav className='topbar hidden md:flex px-10 '>
       <Link href={"/"}>
        <Image
        className='mx-10'
        src="/assets/threads-dark-logo.jpg"
        alt='logo'
        width={28}
        height={28}
        />
      </Link>

     


   {/* Case user is not Signed in */}
   <SignedOut>
            
            <div className='flex gap-5'>
            {sidebarLinks.slice(0, 2).map((link) => {
            const isActive = (pathname.includes
              (link.route) && link.route.length > 1)
            || pathname === link.route

            return ( 
            <Link href={link.route}
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






                <SignInButton>
                  <Button >
                    Anmelden -
                  </Button>
                  </SignInButton>
   </SignedOut>





        {/* Case user is Signed in */}
       <SignedIn>

            <div className='flex justify-center gap-8'>
            {sidebarLinks.map((link) => {
            const isActive = (pathname.includes
              (link.route) && link.route.length > 1)
                || pathname === link.route

                return (
                <Link href={link.route}
                key={link.label}>
                <div
                 key={link.label}
                  className={`p-4 rounded-xl hover:bg-neutral-800
                  ${isActive && "bg-neutral-800"}`}>
                  <Image 
                  src={link.imgURL}
                  width={26}
                  height={26}
                  alt='nav-links'
                  />
                </div>
                </Link>
            )})} 
            </div>

            <SignOutButton>
            <div className='mr-5 p-4 cursor-pointer rounded-xl hover:bg-neutral-800'>
                <Image
                src="assets/logout.svg"
                alt='logout'
                width={24}
                height={24}
                />
             </div>
             </SignOutButton>
        
        </SignedIn>
        
    
    </nav>
  )
}

export default TopNav