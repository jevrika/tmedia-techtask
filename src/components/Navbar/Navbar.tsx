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
import React from "react";

const Navbar = () => {

  const user = 'Roberts'
  const pathname = usePathname()
  const [dropdownVisible, setDropdownVisible] = useState(false);


  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const isLinkActive = (href: string) => {
    return pathname === href;
  };

  
  return (
    <nav className="bg-navbar-background">
      <Link className="mr-5" href={'/'} >
        <Image src={Logo} alt="LCD logo" width={66} height={40} />
      </Link>

      <Link className="link" href={'/dashboard'} >
        <Dashboard fill={isLinkActive('/dashboard') ? 'navbar-active' : 'navbar-primary'} />
        Dashboard
      </Link>

      <Link className="link" href={'/connectors'} >
        <Connectors fill={isLinkActive('/connectors') ? 'navbar-active' : 'navbar-primary'} />
        Connectors
      </Link>

      <Link className="link" href={'/devices'} >
        <Devices fill={isLinkActive('/devices') ? 'navbar-active' : 'navbar-primary'} />
        Devices
      </Link>

      <Link className="link" href={'/general_settings'} >
        <GeneralSettings fill={isLinkActive('/general_settings') ? 'navbar-active' : 'navbar-primary'} />
        General Settings
      </Link>

      <div className="relative userWrapper">
        <div className="firstLetter">
          <h3> {user[0].toUpperCase()} </h3>
        </div>

        <div className="profile-container">
          <div className="flex flex-row cursor-pointer" onClick={toggleDropdown}>
            <span className="username">{user}</span>
          
            <Image src={DropdownArrow} alt={"Dropdown Arrow"} className={dropdownVisible ? 'arrowDown' : 'arrowUp'} />

          </div>
        </div>

        {dropdownVisible && (
          <div className="dropdown">
            <Link href="#" >Settings</Link>
            <Link href="#" >Logout</Link>
          </div>
        )}

      </div>

    </nav>
  )
}

export default Navbar