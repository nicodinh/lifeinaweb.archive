import React from 'react'
import '../styles/index.css'

export default () => (
  <>
    <nav
      className='flex items-center justify-between flex-wrap p-6 rounded-lg mb-4'
      style={{ backgroundColor: '#15bef0' }}
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

    <div className='flex flex-wrap -mx-2'>
      <div className='w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 px-2 mb-4'>
        <div className='h-auto p-4 shadow rounded bg-white text-center'>
          {/* content1 */}
          <div className='max-w-sm w-full lg:max-w-full lg:flex'>
            {/* <div
              className='h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden'
              style={{ backgroundImage: 'url(' + '/lifeinabox.jpg' + ')' }}
              title='lifeinabox'
            ></div> */}
            <div className='border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
              {/* <div className='mb-8'>
                <p className='text-sm text-gray-600 flex items-center'>
                  #1 LifeinaBox
                </p>
              </div> */}
              {/* <div className="flex items-center">
                <div className="text-sm">
                  <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                  <p className="text-gray-600">Aug 18</p>
                </div>
              </div> */}
            </div>
          </div>
          {/* content1 */}
        </div>
      </div>
      <div className='w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 px-2 mb-4'>
        <div className='h-64 p-4 shadow rounded bg-white text-center'>
          {/* content2 */}

          {/* content2 */}
        </div>
      </div>
      <div className='w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 px-2 mb-4'>
        <div className='h-64 p-4 shadow rounded bg-white text-center'>
          {/* content3 */}

          {/* content3 */}
        </div>
      </div>
    </div>
  </>
)
