

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

    <div className='py-5 px-32 absolute w-full translate-y-[-65px]'>
      <div className='px-5 bg-[#FFFFFF] rounded-t' >
        <div className="flex justify-between gap-1 py-5 header">
          <div className={device.status ? 'statusIndicator deviceOnline' : 'statusIndicator deviceOffline'}></div>
          <h1>{device.title}</h1>
          <span>Connection {device.connection} %</span>
          <span> {device.model}</span>
          <p className='text-3.5 font-medium'>{device.constat} messages over 28 days </p>
        </div>
      </div>

      <div className="bg-device-content-background py-3 px-5 rounded-b-md ">
        <span className='text-3.5 text-text-secondary'> Showing {device.title}</span>
      </div>

    </div>
  )
}

export default DeviceDetails