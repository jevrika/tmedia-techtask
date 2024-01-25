"use client"

import Image from 'next/image'
import { SetStateAction, useMemo, useState } from 'react'

import Search from '../../assets/Search.svg'
import Button from '@/components/Button/Button'
import SingleDevice from '@/components/SingleDevice/SingleDevice'

import { Device } from '../../../Device'

type DevicesProps = {
  devices: Device[]
}

type DeviceFilter = 'online' | 'offline' | 'all'

const DevicesList = ({ devices }: DevicesProps) => {
  const [deviceFilter, setDeviceFilter] = useState<DeviceFilter>('all')
  const [search, setSearch] = useState('')

  const deviceStats = useMemo(() => {
    const { online, offline } = devices.reduce(
      (accumulator, device) => {
        if (device.status === true) {
          accumulator.online++;
        } else {
          accumulator.offline++;
        }
        return accumulator;
      },
      { online: 0, offline: 0 }
    );

    return {
      online,
      offline,
    };
  }, [devices]);

    const handleSearch = (e: { target: { value: SetStateAction<string> } }) => {
      setSearch(e.target.value)
    } 

  const deviceToShare: Device[] = devices.filter((device: Device) => {
    const searchResults = device.title.toLowerCase().includes(search.toLowerCase()) || device.model.toLowerCase().includes(search.toLowerCase()) || String(device.constat).includes(search)
    if (deviceFilter === 'online') {
      return device.status === true;
    } else if (deviceFilter === 'offline') {
      return device.status === false;
    } else {
      return true && searchResults;
    }  
  });  

  const toggleDeviceStatus = (deviceStatus: DeviceFilter) => {
    deviceFilter !== deviceStatus ? setDeviceFilter(deviceStatus) : setDeviceFilter('all')
  }    

  return (
    <div className='py-5 px-32 w-full mt-[-65px] relative'>
      <div className='px-5 bg-white rounded-t'>
        <div className="flex justify-between gap-1 py-5 header">

          <div className="flex gap-1 buttonWrapper">
            <Button buttonVariant={'deviceStatusButton'} number={deviceStats.online} active={deviceFilter === 'online'} click={() => toggleDeviceStatus('online')} buttonText={'Online'} type={'button'} />
            <Button buttonVariant={'deviceStatusButton'} number={deviceStats.offline} active={deviceFilter === 'offline'} click={() => toggleDeviceStatus('offline')} buttonText={'Offline'} type={'button'} />
          </div>

          <div className="flex justify-center items-center gap-2 bg-primary rounded-md py-3 px-3"> 
            <Image src={Search} alt={'Search icon'} height={16} width={16} />
            <input className='bg-[#F0F1F4] items-center text-3.5 focus:outline-none' type='text' placeholder='Quick search...' value={search} onChange={handleSearch}/>
          </div>

        </div>
      </div>

      <div className={`bg-white grid gap-y-5 px-5 content pb-5`}>
        {deviceToShare.map((device: Device) =>
          <div key={device.id}>
            <SingleDevice deviceVariant={'device'} deviceStatus={device.status} deviceId={device.id} model={device.model} title={device.title} connectionPercentage={device.connection} messages={device.constat} />
          </div>
        )}
      </div>

      <div className="bg-device-content-background py-[12px] px-5 rounded-b-md ">
        <span className='text-3.5 text-text-secondary'> Showing 1 - {deviceToShare.length} of {devices.length} devices</span>
      </div>

    </div>
  )
}

export default DevicesList