import React from 'react'
import '../styles/index.css'

export default () => (
  <>
    <nav
      className='flex items-center justify-between flex-wrap p-6 rounded-lg mb-4'
      style={{ backgroundColor: 'rgb(54,188,238)' }}
    >
      <div className='flex items-center flex-shrink-0 text-white mr-4'>
        <img src='/logo.svg' style={{ height: 80 }} />
      </div>
      <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
        <div className='text-xl lg:flex-grow font-semibold'>
          <a
            href='/'
            className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-teal-100 mr-4'
          >
            Dashboard
          </a>
          <a
            href='/settings'
            className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-200 mr-4'
          >
            Settings
          </a>
        </div>
        <div>
          <a
            onClick={() => console.log('Scan')}
            href='#'
            className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0'
          >
            Find my lifeinabox
          </a>
        </div>
      </div>
    </nav>

    <div class='flex flex-wrap -mx-2'>
      <div class='w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 px-2 mb-4'>
        <div class='h-64 p-4 shadow rounded bg-white text-center'>a</div>
      </div>
      <div class='w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 px-2 mb-4'>
        <div class='h-64 p-4 shadow rounded bg-white text-center'>a</div>
      </div>
      <div class='w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 px-2 mb-4'>
        <div class='h-64 p-4 shadow rounded bg-white text-center'>a</div>
      </div>
    </div>
  </>
)
