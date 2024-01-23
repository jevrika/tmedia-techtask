import React from 'react'

type DashboardProps = {
  fill: string
}

const Dashboard = ({ fill }: DashboardProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
      <g id="Icon / 24px / Dashboard">
        <g id="icon">
          <path fillRule="evenodd" clipRule="evenodd" d="M5 2C3.34315 2 2 3.34315 2 5V8C2 9.65685 3.34315 11 5 11H8C9.65685 11 11 9.65685 11 8V5C11 3.34315 9.65685 2 8 2H5ZM4 5C4 4.44772 4.44772 4 5 4H8C8.55228 4 9 4.44772 9 5V8C9 8.55228 8.55228 9 8 9H5C4.44772 9 4 8.55228 4 8V5Z" fill={fill} />
          <path fillRule="evenodd" clipRule="evenodd" d="M5 13C3.34315 13 2 14.3431 2 16V19C2 20.6569 3.34315 22 5 22H8C9.65685 22 11 20.6569 11 19V16C11 14.3431 9.65685 13 8 13H5ZM4 16C4 15.4477 4.44772 15 5 15H8C8.55228 15 9 15.4477 9 16V19C9 19.5523 8.55228 20 8 20H5C4.44772 20 4 19.5523 4 19V16Z" fill={fill} />
          <path fillRule="evenodd" clipRule="evenodd" d="M13 5C13 3.34315 14.3431 2 16 2H19C20.6569 2 22 3.34315 22 5V8C22 9.65685 20.6569 11 19 11H16C14.3431 11 13 9.65685 13 8V5ZM16 4C15.4477 4 15 4.44772 15 5V8C15 8.55228 15.4477 9 16 9H19C19.5523 9 20 8.55228 20 8V5C20 4.44772 19.5523 4 19 4H16Z" fill={fill} />
          <path fillRule="evenodd" clipRule="evenodd" d="M16 13C14.3431 13 13 14.3431 13 16V19C13 20.6569 14.3431 22 16 22H19C20.6569 22 22 20.6569 22 19V16C22 14.3431 20.6569 13 19 13H16ZM15 16C15 15.4477 15.4477 15 16 15H19C19.5523 15 20 15.4477 20 16V19C20 19.5523 19.5523 20 19 20H16C15.4477 20 15 19.5523 15 19V16Z" fill={fill} />
        </g>
      </g>
    </svg>

  )
}

export default Dashboard