"use client"
import Image from 'next/image'
import React, { useState } from 'react'

import Search from '../../assets/Search.svg'
import Button from '@/components/Button/Button'
import SingleDevice from '@/components/SingleDevice/SingleDevice'
import { Device } from '../../../Device'

type DevicesProps = {
  devices: Device[]
}
const Devices = ({ devices }: DevicesProps) => {
  const [status, setStatus] = useState(true)

  return (
    <div className='py-5 px-32 absolute w-full translate-y-[-65px]'>
      <div className='px-5 bg-[#FFFFFF] rounded-t'>
        <div className="flex justify-between gap-1 py-5 header">
          <div className="flex gap-1 buttonWrapper">
            <Button buttonVariant={'secondary'} number={devices.filter((device: Device) => device.status === true).length} click={() => setStatus(true)} buttonText={'Online'} type={'button'} />
            <Button buttonVariant={'secondary'} number={devices.filter((device: Device) => device.status === false).length} click={() => setStatus(false)} buttonText={'Offline'} type={'button'} />
          </div>
          <div className="searchWrapper">
            <Image src={Search} alt={'Search icon'} height={16} width={16} />
            <input className='bg-[#F0F1F4] items-center text-3.5' type='text' placeholder='Quick search...' />
          </div>
        </div>
      </div>
      {devices.filter((device: Device) => device.status === status).map((device: Device) =>
        <div key={device.id} className={`bg-[#FFFFFF] px-5 flex flex-col gap-1 content pb-5 DeviceId-${device.id}`}>
          <SingleDevice deviceVariant={'device'} deviceStatus={device.status} deviceId={device.id} model={device.model} title={device.title} connectionPercentage={device.connection} messages={device.constat} />
        </div>
      )}
      <div className="bg-device-content-background py-[12px] px-5 rounded-b-md ">
        <span className='text-3.5 text-secondary'> Showing 1 - {devices.filter((device: Device) => device.status === status).length} of {devices.length} devices</span>
      </div>
    </div>
  )
}

export default Devices