'use client'

import { SearchParamsProps } from "@/@types/SearchParamsProps"
import { Countdown } from "./components/countdown"
import { useEffect, useState } from "react"

const DynamicCountdown: React.FC<{ searchParams: SearchParamsProps }> =
  ({ searchParams }) => {
    const [isVisible, setIsVisible] = useState(false)
    useEffect(() => {
      setIsVisible(true)
    }, [])
    return (
      <main className={`overflow-hidden flex justify-center items-center transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{
        backgroundColor: `#${searchParams.bg_color}`,
        width: `${searchParams.width}px`,
        height: `${searchParams.height}px`,
        borderRadius: `${searchParams.border_radius}%`
      }} >
        <Countdown searchParams={searchParams} />
      </main>
    )
  }

export default DynamicCountdown