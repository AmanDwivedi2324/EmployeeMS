import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-blue-400 rounded-xl p-5'>
                <div className='flex items-center justify-between'>
                    <h3 className='bg-red-600 font-medium text-sm px-3 py-1 rounded'>{data.category}</h3>
                    <h4 className='font-semibold text-sm'>{data.taskDate}</h4>
                </div>
                <h2 className='mt-7 font-semibold text-2xl'>{data.taskTitle}</h2>
                <p className='text-sm mt-2 mb-5'>{data.taskDescription}</p>
                
                <div className='flex items-center justify-center mt-4'>
                    <button className='bg-green-500 text-sm px-2 py-1'>Failed</button>
                </div>
    </div>
  )
}

export default FailedTask