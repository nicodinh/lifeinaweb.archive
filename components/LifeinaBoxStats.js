import React from 'react'
import { useStoreState } from 'easy-peasy'

const LifeinaBoxStats = () => {
  const { value } = useStoreState(state => state.temperature)

  // console.log(value)

  return (
    <div className='max-w-sm rounded overflow-hidden m-auto bg-orange-100'>
      <img className='w-full' src='/lifeinabox.jpg' title='lifeinabox' />
      <div className='px-6 py-4'>
        <div className='font-bold text-gray-600 text-lg mb-2'>
          #1 LifeinaBox
        </div>
      </div>
      <div className='px-6 py-4 '>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2'>
          {value} °C
        </span>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2'>
          90 %
        </span>
      </div>
    </div>
  )
}

export { LifeinaBoxStats }
