"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';

import RightArrow from '../assets/Right.svg'
import Button from './Button';

type Props = {
  title: string;
  connectionPercentage: number;
  className: string;
  model: string;
  messages: number;
  days: number;
  deviceId?: number;
  deviceStatus?: boolean;
}

const Block = ({ title, connectionPercentage, className, model, messages, days, deviceId, deviceStatus }: Props) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <>
      <div className={className} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
        {deviceStatus ? (
          <div className='status statusTrue'></div>
        ) : (
          <div className='status statusFalse'></div>
        )}

        <div className="firstColumn">
          <h1 className='text-[14px] font-medium'> {title}</h1>
          <p className='text-[12px] text-[#5C5F70]' >Connection {connectionPercentage} %</p>
        </div>
        <div className="secondColumn">
          <h3 className='text-[12px] text-[#5C5F70]'> Model </h3>
          <p className='text-[14px] font-medium' >{model}
          </p>
        </div>
        <div className="thirdColumn">
          <h3 className='text-[12px] text-[#5C5F70]' > Con-stat </h3>
          <p className='text-[14px] font-medium'>{messages} messages over {days} days </p>
        </div>

        <div className="flex gap-[4px] ml-[auto] buttonWrapper" >
          {isHovering && (
            <>
              <Button buttonText={'Settings'} className={'button blockButton'} />
              <Button buttonText={'Control'} className={'button blockButton'} />
            </>
          )}
          <Link className='flex justify-center' href={`/devices/${deviceId}`}><Image src={RightArrow} alt='Right arrow' className='ml-auto' /></Link>

        </div>
      </div>
    </>
  )

}

export default Block