import React from 'react'
import { useStoreState } from 'easy-peasy'
import { celciusToFahrenheit } from '../lib/'

const LifeinaBoxStats = () => {
  const temperatureValue = useStoreState(state => state.temperature.value)
  const batteryValue = useStoreState(state => state.battery.value)
  const batteryStatus = useStoreState(state => state.battery.status)
  const { unit } = useStoreState(state => state.settings)

  return (
    <div className='max-w-sm rounded overflow-hidden m-auto bg-orange-100'>
      <img className='w-full' src='/lifeinabox.jpg' title='lifeinabox' />
      <div className='px-6 py-4'>
        <div className='font-bold text-gray-600 text-lg mb-2'>
          #1 LifeinaBox
        </div>
      </div>
      <div className='px-6 py-4 '>
        {temperatureValue && unit === 'C' ? (
          <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2'>
            {`${temperatureValue} °C`}
          </span>
        ) : temperatureValue && unit === 'F' ? (
          <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2'>
            {`${celciusToFahrenheit(temperatureValue)} °F`}
          </span>
        ) : null}
        {batteryValue ? (
          <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2'>
            {`${batteryValue} %`}
          </span>
        ) : null}
        {batteryStatus ? (
          <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2'>
            {`${batteryStatus}`}
          </span>
        ) : null}
      </div>
    </div>
  )
}

export { LifeinaBoxStats }
