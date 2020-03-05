import React from 'react'
import Link from 'next/link'
import { FindButton } from './FindButton'

const Nav = () => {
  // current page class color: text-teal-200

  return (
    <nav
      className='flex items-center justify-between flex-wrap p-6 rounded-lg mb-4'
      style={{ backgroundColor: '#15bef0' }}
    >
      <div className='flex items-center flex-shrink-0 text-white mr-4'>
        <img src='/logo.svg' style={{ height: 80 }} />
      </div>

      <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
        <div className='text-xl lg:flex-grow font-semibold'>
          <Link href='/'>
            <a className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-teal-100 mr-4'>
              Dashboard
            </a>
          </Link>
          <Link href='/settings'>
            <a className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-100 mr-4'>
              Settings
            </a>
          </Link>
          <Link href='/chat-with-us'>
            <a className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-100 mr-4'>
              Chat with us
            </a>
          </Link>
        </div>

        <div>
          <FindButton />
        </div>
      </div>
    </nav>
  )
}

export { Nav }
