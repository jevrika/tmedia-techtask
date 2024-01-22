import React from 'react'

type Props = {
  buttonText: string;
  className: string;
  number?: number
}

const Button = ({ buttonText, className, number }: Props) => {
  return (
    <button className={className}> {buttonText}
      {number ? <p className='text-black bg-[#F0F1F4] py-[4px] px-[8px] rounded-lg text-xs font-medium'> {number}
      </p> : ''}
    </button>
  )
}

export default Button