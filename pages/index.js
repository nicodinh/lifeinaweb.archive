import React from 'react'
import '../styles/index.css'
import { VictoryChart, VictoryLine, VictoryTheme, VictoryLegend } from 'victory'

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
            Find my LifeinaBox
          </a>
        </div>
      </div>
    </nav>

    <div className='flex flex-wrap -mx-2'>
      <div className='w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 px-2 mb-4'>
        <div className='h-auto p-4 /*shadow rounded bg-white*/ text-center'>
          {/* content1 */}
          <div className='max-w-sm rounded overflow-hidden shadow-lg m-auto bg-orange-100'>
            <img className='w-full' src='/lifeinabox.jpg' title='lifeinabox' />
            <div className='px-6 py-4'>
              <div className='font-bold text-gray-600 text-lg mb-2'>
                #1 LifeinaBox
              </div>
            </div>
            <div className='px-6 py-4 '>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2'>
                6 °C
              </span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2'>
                90 %
              </span>
            </div>
          </div>
          {/* content1 */}
        </div>
      </div>
      <div className='w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 px-2 mb-4'>
        <div className='h-auto p-4 /*shadow rounded bg-white*/ text-center'>
          {/* content2 */}
          <div className='max-w-sm rounded overflow-hidden shadow-lg m-auto bg-orange-100'>
            <VictoryChart
              domain={{ x: [-10, 0], y: [0, 10] }}
              theme={VictoryTheme.material}
            >
              <VictoryLegend
                x={60}
                y={0}
                title='Temperature'
                centerTitle
                orientation='horizontal'
                gutter={20}
                style={{ border: { stroke: 'black' }, title: { fontSize: 20 } }}
                data={[
                  { name: 'Min.', symbol: { fill: 'green' } },
                  { name: 'Max.', symbol: { fill: 'green' } },
                  { name: 'Temp.', symbol: { fill: 'blue' } }
                ]}
              />
              <VictoryLine
                style={{
                  data: { stroke: 'blue' },
                  parent: { border: '1px solid #ccc' }
                }}
                data={[
                  { x: -4, y: 4.5 },
                  { x: -3, y: 4.8 },
                  { x: -2, y: 4.8 },
                  { x: -1, y: 4.6 },
                  { x: 0, y: 4.6 }
                ]}
              />
            </VictoryChart>
          </div>
          {/* content2 */}
        </div>
      </div>
      <div className='w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 px-2 mb-4'>
        <div className='h-auto p-4 /*shadow rounded bg-white*/ text-center'>
          {/* content3 */}
          <div className='max-w-sm rounded overflow-hidden shadow-lg m-auto bg-orange-100'>
            <VictoryChart theme={VictoryTheme.material}>
              <VictoryLegend
                x={0}
                y={50}
                title='Battery'
                centerTitle
                orientation='horizontal'
                gutter={20}
                style={{ border: { stroke: 'black' }, title: { fontSize: 20 } }}
                data={[
                  { name: 'Min.', symbol: { fill: 'green' } },
                  { name: 'Max.', symbol: { fill: 'green' } },
                  { name: 'Temp.', symbol: { fill: 'gold' } }
                ]}
              />
              <VictoryLine
                style={{
                  data: { stroke: '#c43a31' },
                  parent: { border: '1px solid #ccc' }
                }}
                data={[
                  { x: 1, y: 2 },
                  { x: 2, y: 3 },
                  { x: 3, y: 5 },
                  { x: 4, y: 4 },
                  { x: 5, y: 7 }
                ]}
              />
            </VictoryChart>
          </div>
          {/* content3 */}
        </div>
      </div>
    </div>
  </>
)
