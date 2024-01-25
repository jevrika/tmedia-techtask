type ButtonProps = {
  buttonText: string;
  number?: number,
  active?: boolean;
  click?: () => void;
  buttonVariant: 'deviceStatusButton' | 'deviceButton';
  type: 'submit' | 'button'
}

const Button = ({ buttonText, number, click, buttonVariant, type, active = false }: ButtonProps) => {

  const getButtonStyles = () => {
    if (buttonVariant === 'deviceButton') {
      return 'deviceButton'
    } else if (buttonVariant === 'deviceStatusButton') {
      return active ? 'border border-solid border-border-primary bg-button-active text-white border border-solid border-border-primary' : 'border border-solid border-border-primary'
    }
    return 'flex flex-row items-center py-1.5 px-4 rounded-md gap-2.5 '
  }

  return (
    <button className={`flex flex-row items-center py-1.5 px-4 rounded-md gap-2.5 ${getButtonStyles()}`} onClick={click} type={type}> {buttonText}
      {number ?
        <span className='text-black bg-number-background button-primary py-1 px-2 rounded-lg text-xs font-medium'> {number} </span>
        : ''}
    </button>
  )
}

export default Button