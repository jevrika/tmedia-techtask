import React from 'react'

type ButtonProps = {
  buttonText: string;
  number?: number,
  click?: () => void;
  buttonVariant: 'primary' | 'secondary';
  type: 'submit' | 'button'
}

const Button = ({ buttonText, number, click, buttonVariant, type }: ButtonProps) => {

  const getButtonStyles = () => {
    if (buttonVariant === 'primary') {
      return 'blockButton'
    } else if (buttonVariant === 'secondary') {
      return 'statusButton'
    }

    return 'button'
  }

  return (
    <button className={`button ${getButtonStyles()}`} onClick={click} type={type}> {buttonText}
      {number ?
        <span className='text-black button-primary py-1 px-2 rounded-lg text-xs font-medium'> {number}
        </span> : ''}
    </button>
  )
}

export default Button