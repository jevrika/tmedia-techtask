import React from 'react'

type ButtonProps = {
  buttonText: string;
  className: string;
  number?: number,
  click?: () => void;
}

const Button = ({ buttonText, className, number, click }: ButtonProps) => {
  return (
    <button className={className} onClick={click}> {buttonText}
      {number ? 
      <span className='text-black button-primary py-1 px-2 rounded-lg text-xs font-medium'> {number}
      </span> : ''}
    </button>
  )
}

export default Button