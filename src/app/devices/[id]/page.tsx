import DeviceDetails from "@/components/DeviceDetails"

export const generateMetadata = async ({ params }: { params: { id: string } }) => {

  const response = await fetch(`http://localhost:3000/api/devices/${params.id}`)
  const device = await response.json()

  return {
    title: `LCD | ${device.title}`
  }

}

const DeviceDetailPage = ({ params }: { params: { id: number } }) => {

  return (
    <div >
      <div><DeviceDetails params={{ id: params.id }} /></div>

    </div>
  )
}

export default DeviceDetailPage