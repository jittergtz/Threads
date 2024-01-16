"use client"
import { Separator } from "@/components/ui/separator"
import { UserButton } from "@clerk/nextjs"
import Image from "next/image"
import { useEffect, useState } from "react"

interface Deezer {
  name: string
  picture_medium: string
}

export default function Home() {
  const [data, setData] = useState<Deezer[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const fetch = require("node-fetch")

      const url = "https://deezerdevs-deezer.p.rapidapi.com/genre/%7Bid%7D"
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "c0d3e93c90mshdba2e37a4f35c93p128b06jsnfff8637f4ad8",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        },
      }

      try {
        const response = await fetch(url, options)
        const result = await response.json()
        console.log(result)
        setData([result])
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  return (
    <main>
      <h1 className="head-text font-bold text-left">Home</h1>
      <Separator
      className="bg-neutral-600"/>

      <div className="mt-10">
        {data.map((data) => {
          return (
            <div key={data.name} className="flex gap-3 h-28 ">
              <Image
                className="rounded-lg"
                src={data.picture_medium}
                width={110}
                height={0}
                alt="deezer-music-track-picture"
              />
              <div className=" w-64 border overflow-hidden  border-neutral-600 rounded-lg p-2">
                <span className="text-black mr-2 bg-neutral-100 px-4 rounded-lg border border-neutral-500 ">
                  {data.name}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </main>
  )
}
