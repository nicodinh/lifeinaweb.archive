import React from 'react'
import { VictoryChart, VictoryLine, VictoryTheme, VictoryLegend } from 'victory'

const TemperatureChart = () => {
  return (
    <div className='max-w-sm rounded overflow-hidden m-auto bg-orange-100'>
      <VictoryChart
        domain={{ x: [-10, 0], y: [0, 10] }}
        theme={VictoryTheme.material}
      >
        <VictoryLegend
          x={60}
          y={2}
          title='Temperature'
          centerTitle
          orientation='horizontal'
          gutter={20}
          style={{
            border: { stroke: 'black' },
            title: { fontSize: 16 }
          }}
          data={[
            { name: 'Min.', symbol: { fill: 'green' } },
            { name: 'Max.', symbol: { fill: 'green' } },
            { name: 'Temp.', symbol: { fill: 'blue' } }
          ]}
        />
        <VictoryLine
          data={[
            { x: -10, y: 8 },
            { x: 0, y: 8 }
          ]}
          domain={{
            x: [0, 0],
            y: [-10, 15]
          }}
          scale={{ x: 'time', y: 'linear' }}
          standalone={false}
          style={{
            data: { stroke: 'green', strokeWidth: 2 },
            parent: { border: '1px solid #ccc' }
          }}
        />
        <VictoryLine
          data={[
            { x: -10, y: 2 },
            { x: 0, y: 2 }
          ]}
          domain={{
            x: [0, 0],
            y: [-10, 15]
          }}
          scale={{ x: 'time', y: 'linear' }}
          standalone={false}
          style={{
            data: { stroke: 'green', strokeWidth: 2 },
            parent: { border: '1px solid #ccc' }
          }}
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
  )
}

export { TemperatureChart }
