import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import TopNav from '@/components/share/TopNav'
import BottomNav from '@/components/share/BottomNav'
import TopNavMobile from '@/components/share/TopNav-mobile'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Threads',
  description: 'Social Media Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">

<ClerkProvider
    appearance={{
      variables: {
        colorPrimary: "black",
        colorText: "black"
      }
    
    }}>
        <body className={`${inter.className}`}>
        
        <TopNav />
        <TopNavMobile/>
        

      <main>

        <section className='main-container'>
          <div className='w-full max-w-4xl'>
          {children}
          </div>
        </section>
   
      </main>
          
        <BottomNav/>
       
        </body>
        </ClerkProvider>
    </html>


  )
}
