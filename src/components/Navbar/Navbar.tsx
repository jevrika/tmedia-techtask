"use client"

import Link from "next/link"
import Image from "next/image"
import Logo from '../../assets/Logotype.svg'
import Dashboard from '../../assets/Dashboard.svg'
import Connectors from "../../assets/Connectors.svg"
import Devices from '../../assets/Devices.svg'
import GeneralSettings from "../../assets/GeneralSettings.svg"
import { useState } from 'react';

const Navbar = () => {

  const [selectedName, setSelectedName] = useState('');

  const handleSelectChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedName(selectedValue);
  };

  return (
    <nav>

      <Link className="logo" href={'/'} >
        <Image src={Logo} alt="LCD logo" width={66} height={40} />
      </Link>
      <Link className="link" href={'/dashboard'} >
        <Image className="navbarIcon" src={Dashboard} alt="Dashboard image" width={24} height={24} />
        Dashboard
      </Link>
      <Link className="link" href={'/connectors'} >
        <Image className="navbarIcon" src={Connectors} alt="Connectors image" width={24} height={24} />
        Connectors</Link>
      <Link className="link" href={'/devices'} >
        <Image className="navbarIcon" src={Devices} alt="Devices image" width={24} height={24} />
        Devices</Link>
      <Link className="link" href={'/general_settings'} >
        <Image className="navbarIcon" src={GeneralSettings} alt="GeneralSettings image" width={24} height={24} />
        General Settings</Link>
      <div className="userWrapper">
        <div className="circleWithFirstLetter"><h3 className="firstLetter">
          {selectedName ? selectedName[0].toUpperCase() : 'R'}
        </h3></div>

        <select className="dropdown" name="name" id="name" onChange={handleSelectChange} value={selectedName}>
          <option value="roberts">Roberts</option>
          <option value="anna">Anna</option>
          <option value="janis">Jānis</option>
        </select>

      </div>

    </nav>
  )
}

export default Navbar