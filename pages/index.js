import React from 'react'
import '../styles/index.css'
import {
  LifeinaBoxStats,
  BatteryChart,
  TemperatureChart,
  Nav
} from '../components/'

export default () => {
  return (
    <>
      <Nav />
      <div
        className='flex flex-wrap -mx-2 shadow rounded'
        style={{ backgroundColor: '#fefaf0' }}
      >
        <div className='w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 px-2 mb-4'>
          <div className='h-auto p-4 /*shadow rounded bg-white*/ text-center'>
            <LifeinaBoxStats />
          </div>
        </div>
        <div className='w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 px-2 mb-4'>
          <div className='h-auto p-4 /*shadow rounded bg-white*/ text-center'>
            <TemperatureChart />
          </div>
        </div>
        <div className='w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 px-2 mb-4'>
          <div className='h-auto p-4 /*shadow rounded bg-white*/ text-center'>
            <BatteryChart />
          </div>
        </div>
      </div>
    </>
  )
}
