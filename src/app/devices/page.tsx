import Button from '@/components/Button'
import { Metadata } from 'next'
import React from 'react'
import Search from '../../assets/Search.svg'
import Image from 'next/image'
import Block from '@/components/Block'
import { Device } from '../../../Device'

export const metadata: Metadata = {
  title: 'LCD | Devices',
}

const getDevices = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/devices')
    return response.json()
  } catch (error) {
    console.log('Failed to get devices', error)
    throw new Error(`Failed to get devices, ${error}`)
  }
}

const Devices = async () => {

  const devices = await getDevices()

  return (
    <div className='py-[20px] px-[135px] absolute w-full translate-y-[-65px]'>
      <div className='px-[20px] bg-[#FFFFFF] rounded-t' >
        <div className="flex justify-between gap-[4px] py-[20px] header">
          <div className="flex gap-[4px] buttonWrapper">
            <Button className={'button buttonOnline'} number={2} buttonText={'Online'} />
            <Button className={'button buttonOffline'} number={3} buttonText={'Offline'} />
          </div>
          <div className="searchWrapper">
            <Image src={Search} alt={'Search icon'} height={16} width={16} />
            <input className='bg-[#F0F1F4] items-center text-[14px]' type='text' placeholder='Quick search...' />
          </div>
        </div>
      </div>
      {devices.map((device: Device) =>
          <div key={device.id} className="bg-[#FFFFFF] px-[20px] flex flex-col gap-[4px] content pb-[20px]">
            <Block model={device.model} className={'block'} title={device.title} connectionPercentage={device.connection} messages={device.constat} days={28} />
          </div>
        )}
      <div className="bg-[#F0F1F4] py-[12px] px-[20px] rounded-b-md ">
        <span className='text-[14px] text-[#5C5F70] '> Showing 1 - 3 of devices</span>
      </div>
    </div>
  )
}

export default Devices