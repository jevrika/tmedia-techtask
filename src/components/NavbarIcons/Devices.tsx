import React from 'react'

type Props = {
  fill: string
}

const Devices = ({ fill }: Props) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
      <g id="Icon / 24px / Device monitoring">
        <g id="icon">
          <path d="M9 12C9.55228 12 10 12.4477 10 13C10 13.5523 9.55228 14 9 14H7C6.44772 14 6 13.5523 6 13C6 12.4477 6.44772 12 7 12H9Z" fill={fill} />
          <path fillRule="evenodd" clipRule="evenodd" d="M18 2C20.2091 2 22 3.79086 22 6V14C22 16.2091 20.2091 18 18 18H6C3.79086 18 2 16.2091 2 14V6C2 3.79086 3.79086 2 6 2H18ZM18 4H6C4.89543 4 4 4.89543 4 6V14C4 15.1046 4.89543 16 6 16H18C19.1046 16 20 15.1046 20 14V6C20 4.89543 19.1046 4 18 4Z" fill={fill} />
          <path d="M9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22H15C15.5523 22 16 21.5523 16 21C16 20.4477 15.5523 20 15 20H9Z" fill={fill} />
        </g>
      </g>
    </svg>
  )
}

export default Devices