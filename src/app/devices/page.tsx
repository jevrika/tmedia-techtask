import { Metadata } from 'next'
import DeviceList from '../../components/DeviceList/DeviceList'

export const metadata: Metadata = {
  title: 'LCD | Devices',
}

const getDevices = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/devices', { cache: 'no-store' })
    return response.json()
  } catch (error) {
    console.log('Failed to get devices', error)
    throw new Error(`Failed to get devices, ${error}`)
  }
}

const Devices = async () => {

  const devices = await getDevices()

  return (
    <DeviceList devices={devices} />
  )
}

export default Devices