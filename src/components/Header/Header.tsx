"use client"

import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname()
  let sectionName = pathname.substring(1).charAt(0).toUpperCase() + pathname.substring(2);

  if (pathname === '/general-settings') {
    sectionName = 'General Settings'
  }

  return (
    <div className="py-5 px-36 bg-header-background flex flex-col gap-3">
      <div className='text-text-primary text-sm'>Home /</div>
      <span className='text-white text-xl'>{sectionName}</span>
      <div className='h-9'></div>
    </div>
  )
}

export default Header