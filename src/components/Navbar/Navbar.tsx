"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { useState } from 'react';

import Logo from '../../assets/Logotype.svg'
import DropdownArrow from '../../assets/DropdownArrow.svg'

import Dashboard from "../NavbarIcons/Dashboard"
import Connectors from "../NavbarIcons/Connectors"
import Devices from "../NavbarIcons/Devices"
import GeneralSettings from "../NavbarIcons/GeneralSettings"

const user = 'Roberts'

const Navbar = () => {

  const pathname = usePathname()
  const [dropdownVisible, setDropdownVisible] = useState(false);


  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const isLinkActive = (href: string) => {
    return pathname === href;
  };

  const links = [
    { Icon: Dashboard, label: 'Dashboard', href: "/dashboard" },
    { Icon: Connectors, label: 'Connectors', href: "/connectors" },
    { Icon: Devices, label: 'Devices', href: "/devices" },
    { Icon: GeneralSettings, label: 'General Settings', href: "/general-settings" },
  ]

  return (
    <nav className="bg-navbar-background flex justify-center items-center gap-8 py-5 px-36 text-nowrap text-text-primary">

      <Link className="mr-5" href={'/'} >
        <Image src={Logo} alt="LCD logo" width={66} height={40} />
      </Link>

      {links.map(({ Icon, label, href }, index) => (
        <Link key={index} href={href} className={`flex items-center gap-2 ${isLinkActive(href) ? 'fill-navbar-active' : 'fill-navbar-primary'}`}>
          <Icon />
          {label}
        </Link>
      ))}

      <div className="relative flex justify-center ml-[auto] items-center gap-2">
        <div className="bg-profile-background text-navbar-background font-bold text-sm w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center">
          <h3> {user[0].toUpperCase()} </h3>
        </div>

        <div className="profile-container">
          <div className="flex flex-row cursor-pointer" onClick={toggleDropdown}>

            <span className="username">{user}</span>

            <Image src={DropdownArrow} alt={"Dropdown Arrow"} className={dropdownVisible ? 'ml-1 rotate-180' : 'ml-1'} />

          </div>
        </div>

        {dropdownVisible && (
          <div className="absolute top-0 right-5 w-full my-9 pl-16 flex flex-col bg-transparent gap-1">
            <Link href="#" >Settings</Link>
            <Link href="#" >Logout</Link>
          </div>
        )}

      </div>

    </nav>
  )
}

export default Navbar