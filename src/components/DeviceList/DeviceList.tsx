"use client"

import Image from 'next/image'
import { useMemo, useState } from 'react'

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

  const deviceStats = useMemo(() => {
    const onlineCount = devices.filter((device) => device.status === true).length;
    const offlineCount = devices.filter((device) => device.status === false).length;

    return {
      online: onlineCount,
      offline: offlineCount,
    };
  }, [devices]);

  const deviceToShare: Device[] = devices.filter((device: Device) => {
    if (deviceFilter === 'online') {
      return device.status === true;
    } else if (deviceFilter === 'offline') {
      return device.status === false;
    } else {
      return true;
    }
  });

  const toggleDeviceStatus = (deviceStatus: DeviceFilter) => {
    deviceFilter !== deviceStatus ? setDeviceFilter(deviceStatus) : setDeviceFilter('all')
  }

  return (
    <div className='py-5 px-32 absolute w-full translate-y-[-65px]'>
      <div className='px-5 bg-white rounded-t'>
        <div className="flex justify-between gap-1 py-5 header">

          <div className="flex gap-1 buttonWrapper">
            <Button buttonVariant={'deviceStatusButton'} number={deviceStats.online} active={deviceFilter === 'online'} click={() => toggleDeviceStatus('online')} buttonText={'Online'} type={'button'} />
            <Button buttonVariant={'deviceStatusButton'} number={deviceStats.offline} active={deviceFilter === 'offline'} click={() => toggleDeviceStatus('offline')} buttonText={'Offline'} type={'button'} />
          </div>

          <div className="searchWrapper">
            <Image src={Search} alt={'Search icon'} height={16} width={16} />
            <input className='bg-[#F0F1F4] items-center text-3.5' type='text' placeholder='Quick search...' />
          </div>

        </div>
      </div>

      {deviceToShare.map((device: Device) =>
        <div key={device.id} className={`bg-white px-5 flex flex-col gap-1 content pb-5 DeviceId-${device.id}`}>
          <SingleDevice deviceVariant={'device'} deviceStatus={device.status} deviceId={device.id} model={device.model} title={device.title} connectionPercentage={device.connection} messages={device.constat} />
        </div>
      )}

      <div className="bg-device-content-background py-[12px] px-5 rounded-b-md ">
        <span className='text-3.5 text-text-secondary'> Showing 1 - {deviceToShare.length} of {devices.length} devices</span>
      </div>

    </div>
  )
}

export default DevicesList