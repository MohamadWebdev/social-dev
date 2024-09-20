import React from 'react'
import Hr from './Hr'

type Props = {}

const UsersideFooter = (props: Props) => {
  return (
    <div className='z-10 w-full bg-white mt-5'>
      <Hr/>
      <div className='flex flex-col items-center justify-center gap-2 py-4'>
        <div className='flex items-center gap-2'>
          <span className='text-sm font-medium text-gray-500'>© 2023</span>
          <span className='text-sm font-medium text-gray-500'>All Rights Reserved</span>
        </div>
        <div className='flex items-center gap-2'>
          <span className='text-sm font-medium text-gray-500'>Privacy Policy</span>
          <span className='text-sm font-medium text-gray-500'>Terms of Use</span>
        </div>
      </div>
    </div>
  )
}

export default UsersideFooter