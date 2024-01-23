import React from 'react'

type ButtonProps = {
  buttonText: string;
  number?: number,
  click?: () => void;
  buttonVariant: 'deviceStatusButton' | 'deviceButton';
  type: 'submit' | 'button'
}

const Button = ({ buttonText, number, click, buttonVariant, type }: ButtonProps) => {

  const getButtonStyles = () => {
    if (buttonVariant === 'deviceButton') {
      return 'deviceButton'
    } else if (buttonVariant === 'deviceStatusButton') {
      return 'statusButton'
    }
    return 'button'
  }

  return (
    <button className={`button ${getButtonStyles()}`} onClick={click} type={type}> {buttonText}
      {number ?
        <span className='text-black bg-number-background button-primary py-1 px-2 rounded-lg text-xs font-medium'> {number} </span>
      : ''}
    </button>
  )
}

export default Button