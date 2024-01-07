//import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from "next/font/google"
import '../globals.css'
import { ClerkProvider } from "@clerk/nextjs"


export const metadata = {
    title: "Threads",
    description: "Social media platform"
}


const inter = Inter({subsets: ["latin", ]})

export default function RootLayout({ 
    children 
}:
 {children : React.ReactNode}) {

    return (
    <ClerkProvider
 appearance={{
     variables: {
       colorPrimary: "black",
       colorText: "black"
     }}}
    >
        <html lang="de">
            <body className={`${inter.className} bg-neutral-900`}>
                {children}
            </body>
        </html>

    </ClerkProvider>
 )}


