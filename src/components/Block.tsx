"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import RightArrow from '../assets/Right.svg'
import Button from './Button';

type Props = {
  title: string;
  connectionPercentage: number;
  className: string;
  model: string;
  messages: number;
  days: number
}

const Block = ({ title, connectionPercentage, className, model, messages, days }: Props) => {
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
        <input className='checkbox' type="checkbox" />
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
          <Image src={RightArrow} alt='Right arrow' className='ml-auto' />
        </div>
      </div>
    </>
  )

}

export default Block