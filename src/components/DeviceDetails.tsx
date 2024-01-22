import React from 'react'

const getDevice = async (id: number) => {
  try {

    const response = await fetch(`http://localhost:3000/api/devices/${id}`)
    return response.json()

  } catch (error) {

    console.log('Failed to get device', error)
    throw new Error(`Failed to get device, ${error}`)

  }
}

const DeviceDetails = async ({ params }: { params: { id: number } }) => {

  const device = await getDevice(params.id)

  return (
    <div className='py-[20px] px-[135px] absolute w-full translate-y-[-65px]'>
      <div className='px-[20px] bg-[#FFFFFF] rounded-t' >
        <div className="flex justify-between gap-[4px] py-[20px] header">
        </div>
      </div>
      <h1>{device.title}</h1>
      <div className="bg-[#F0F1F4] py-[12px] px-[20px] rounded-b-md ">
        <span className='text-[14px] text-[#5C5F70] '> Showing {device.title}</span>
      </div>
    </div>
  )
}

export default DeviceDetails