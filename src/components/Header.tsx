"use client"
import React from 'react'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname()
  let sectionName = pathname.substring(1).charAt(0).toUpperCase() + pathname.substring(2);
  const deviceId = pathname.substring(1)
  console.log(deviceId)

  if(pathname === '/general_settings') {
    sectionName  = 'General Settings'
  }

  return (
      <div className="py-[20px] px-[150px] bg-[#181e34] headerBox">
        <div className='text-[#C5C7D3] text-sm'>Home /</div>
        <span className='text-white text-xl'>{sectionName}</span>
        <div className='h-9'></div>
      </div>
  )
}

export default Header