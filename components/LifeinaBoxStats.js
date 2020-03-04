import React from 'react'
import { useStoreState } from 'easy-peasy'

const LifeinaBoxStats = () => {
  const temperatureValue = useStoreState(state => state.temperature.value)
  const batteryValue = useStoreState(state => state.battery.value)

  return (
    <div className='max-w-sm rounded overflow-hidden m-auto bg-orange-100'>
      <img className='w-full' src='/lifeinabox.jpg' title='lifeinabox' />
      <div className='px-6 py-4'>
        <div className='font-bold text-gray-600 text-lg mb-2'>
          #1 LifeinaBox
        </div>
      </div>
      <div className='px-6 py-4 '>
        {temperatureValue ? (
          <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2'>
            {`${temperatureValue} °C`}
          </span>
        ) : null}
        {batteryValue ? (
          <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2'>
            {`${batteryValue} %`}
          </span>
        ) : null}
      </div>
    </div>
  )
}

export { LifeinaBoxStats }
