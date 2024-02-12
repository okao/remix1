import React from 'react'
import MainAd from '../../../public/img/Ads/Main.jpeg'

const AdBanner = () => {
  return (
    <div
        className='bg-[#f8f9fa] border-b border-[#e9ecef] py-4 px-4 sm:px-10 mv_waheed min-h-[70px] mx-auto flex flex-col roboto gap-y-[-8]'
    >
        <div className="caption-bottom hover:caption-bottom text-gray-500 text-[10px] text-start leading">
            Advertisement
        </div>
        <img src={MainAd} alt="mainAd" className='w-full' />
    </div>
  )
}

export default AdBanner