"use client"
import Image from 'next/image'
import React, { useState } from 'react'

import Search from '../assets/Search.svg'
import { Device } from '../../Device'

import Button from '@/components/Button'
import Block from '@/components/Block'

type Props = {
  devices: Device[]
}
const Devices = ({ devices }: Props) => {
  const [status, setStatus] = useState(true)

  return (
    <div className='py-[20px] px-[135px] absolute w-full translate-y-[-65px]'>
      <div className='px-[20px] bg-[#FFFFFF] rounded-t'>
        <div className="flex justify-between gap-[4px] py-[20px] header">
          <div className="flex gap-[4px] buttonWrapper">
            <Button className={'button statusButton buttonOnline'} number={devices.filter((device: Device) => device.status === true).length} click={() => setStatus(true)} buttonText={'Online'} />
            <Button className={'button statusButton buttonOffline'} number={devices.filter((device: Device) => device.status === false).length} click={() => setStatus(false)} buttonText={'Offline'} />
          </div>
          <div className="searchWrapper">
            <Image src={Search} alt={'Search icon'} height={16} width={16} />
            <input className='bg-[#F0F1F4] items-center text-[14px]' type='text' placeholder='Quick search...' />
          </div>
        </div>
      </div>
      {devices.filter((device: Device) => device.status === status).map((device: Device) =>
        <div key={device.id} className={`bg-[#FFFFFF] px-[20px] flex flex-col gap-[4px] content pb-[20px] DeviceId-${device.id}`}>
          <Block deviceStatus={device.status}deviceId={device.id} model={device.model} className={'block'} title={device.title} connectionPercentage={device.connection} messages={device.constat} days={28} />
        </div>
      )}
      <div className="bg-[#F0F1F4] py-[12px] px-[20px] rounded-b-md ">
        <span className='text-[14px] text-[#5C5F70] '> Showing 1 - {devices.filter((device: Device) => device.status === status).length} of {devices.length} devices</span>
      </div>
    </div>
  )
}

export default Devices