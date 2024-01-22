"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { useState } from 'react';

import Logo from '../assets/Logotype.svg'
import DropdownArrow from '../assets/DropdownArrow.svg'

import Dashboard from "./NavbarIcons/Dashboard"
import Connectors from "./NavbarIcons/Connectors"
import Devices from "./NavbarIcons/Devices"
import GeneralSettings from "./NavbarIcons/GeneralSettings"

const Navbar = () => {
  const pathname = usePathname()
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedName, setSelectedName] = useState('Roberts');
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const isLinkActive = (href: string) => {
    return pathname === href;
  };

  return (
    <nav>
      <Link className="mr-[20px]" href={'/'} >
        <Image src={Logo} alt="LCD logo" width={66} height={40} />
      </Link>

      <Link className="link" href={'/dashboard'} onMouseOver={handleMouseOver} >
        <Dashboard fill={isLinkActive('/dashboard') ? '#3498DB' : '#9DA0AF'} />
        Dashboard
      </Link>

      <Link className="link" href={'/connectors'} >
        <Connectors fill={isLinkActive('/connectors') ? '#3498DB' : '#9DA0AF'} />
        Connectors
      </Link>

      <Link className="link" href={'/devices'} >
        <Devices fill={isLinkActive('/devices') ? '#3498DB' : '#9DA0AF'} />
        Devices
      </Link>

      <Link className="link" href={'/general_settings'} >
        <GeneralSettings fill={isLinkActive('/general_settings') ? '#3498DB' : '#9DA0AF'} />
        General Settings
      </Link>

      <div className=" relative userWrapper">
        <div className="firstLetter">
          <h3> {selectedName[0].toUpperCase()} </h3>
        </div>

        <div className="profile-container">
          <div className="flex flex-row cursor-pointer" onClick={toggleDropdown}>
            <span className="username">{selectedName}</span>
            
            {dropdownVisible ?
            (
              <Image src={DropdownArrow} alt={"Dropdown Arrow"} className="ml-[4px] rotate-180" />
            ) : (
              <Image src={DropdownArrow} alt={"Dropdown Arrow"} className="ml-[4px]" />
            )
            }
          </div>
        </div>
        {dropdownVisible && (
          <div className="dropdown">
            <a href="#" >Settings</a>
            <a href="#" >Logout</a>
          </div>
        )}
      </div>

    </nav>
  )
}

export default Navbar