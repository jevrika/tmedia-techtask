import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

import RightArrow from '../../assets/Right.svg'
import Button from '../Button/Button';

type SingleDeviceProps = {
  title: string;
  connectionPercentage: number;
  deviceVariant: 'device' | '',
  model: string;
  messages: number;
  deviceId?: number,
  deviceStatus?: boolean;
}

const SingleDevice = ({ title, connectionPercentage, deviceVariant, model, messages, deviceId, deviceStatus }: SingleDeviceProps) => {

  const getDeviceStyle = () => {
    if (deviceVariant === 'device') {
      return 'device'
    }
    return 'device'
  }


  return (
    <div className={`device ${getDeviceStyle()}`} >

      <div className={deviceStatus ? 'statusIndicator deviceOnline' : 'statusIndicator deviceOffline'}></div>

      <div className="firstColumn">
        <h1 className='text-3.5 font-medium'> {title}</h1>
        <p className='text-3 text-secondary' >Connection {connectionPercentage} %</p>
      </div>

      <div className="secondColumn">
        <h3 className='text-3 text-secondary'> Model </h3>
        <p className='text-3.5 font-medium' >{model}
        </p>
      </div>
      <div className="thirdColumn">
        <h3 className='text-3 text-secondary' > Con-stat </h3>
        <p className='text-3.5 font-medium'>{messages} messages over 28 days </p>
      </div>

      <div className="flex gap-1 ml-[auto]" >

        <Button buttonText={'Settings'} buttonVariant={'primary'} type={'button'}/>
        <Button buttonText={'Control'} buttonVariant={'primary'} type={'button'}/>

        <Link className='flex justify-center' href={`/devices/${deviceId}`}>
          <Image src={RightArrow} alt='Right arrow' className='ml-auto' />
        </Link>

      </div>
    </div>
  )

}

export default SingleDevice