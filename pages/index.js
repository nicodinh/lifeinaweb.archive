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
      {/* <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div> */}
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
    <div className='grid grid-cols-3 gap-4'>
      <div className='p-4 shadow rounded bg-white text-center shadow-lg'></div>
      <div className='p-4 shadow rounded bg-white text-center'>
        <h1 className='text-purple-500 leading-relaxed'>lifeinaweb</h1>
      </div>
      <div className='p-4 shadow rounded bg-white text-center'>
        <h1 className='text-purple-500 leading-relaxed'>lifeinaweb</h1>
      </div>
      <div className='p-4 shadow rounded bg-white text-center'>
        <h1 className='text-purple-500 leading-relaxed'>lifeinaweb</h1>
      </div>
      <div className='p-4 shadow rounded bg-white text-center'>
        <h1 className='text-purple-500 leading-relaxed'>logo</h1>
      </div>
      <div className='p-4 shadow rounded bg-white text-center'>
        <h1 className='text-purple-500 leading-relaxed'>lifeinaweb</h1>
      </div>
      <div className='p-4 shadow rounded bg-white text-center'>
        <h1 className='text-purple-500 leading-relaxed'>lifeinaweb</h1>
      </div>
      <div className='p-4 shadow rounded bg-white text-center'>
        <h1 className='text-purple-500 leading-relaxed'>lifeinaweb</h1>
      </div>
      <div className='p-4 shadow rounded bg-white text-center'>
        <h1 className='text-purple-500 leading-relaxed'>lifeinaweb</h1>
      </div>
    </div>
  </>
)
