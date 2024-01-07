import { SignInButton, SignOutButton, SignedIn, SignedOut } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { sidebarLinks } from "@/constants"
import { Button } from '../ui/button'



function TopNavMobile() {
  return (
    <nav className='topbar md:hidden '>
    
        <div></div>

       <div className='flex absolute justify-center w-full -z-10 '>
       <Link href={"/"}>
        <Image
        src="/assets/threads-dark-logo.jpg"
        alt='logo'
        width={28}
        height={28}
         />
      </Link>
      </div>


   
   
   {/* Case user is not Signed in */}
<SignedOut>
  
      <Button className='mr-5'>
    <SignInButton>
        Anmelden
    </SignInButton>
      </Button>

</SignedOut>



       {/* Case user is Signed in */} 
    <SignedIn>

            <SignOutButton>
            <div 
            className='mr-5 p-4 cursor-pointer rounded-xl hover:bg-neutral-800'>
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

export default TopNavMobile