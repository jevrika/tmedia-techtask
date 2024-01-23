"use client"

import React, { useState } from 'react'

type Props = {
  buttonText: string;
  className: string;
  number?: number,
  state?: boolean
  click?: () => void;
}

const Button = ({ buttonText, className, number, click }: Props) => {
  return (
    <button className={className} onClick={click}> {buttonText}
      {number ? <p className='text-black bg-[#F0F1F4] py-[4px] px-[8px] rounded-lg text-xs font-medium'> {number}
      </p> : ''}
    </button>
  )
}

export default Button