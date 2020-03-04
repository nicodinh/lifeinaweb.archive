import React from 'react'
import { VictoryChart, VictoryLine, VictoryTheme, VictoryLegend } from 'victory'

const BatteryChart = () => {
  return (
    <div className='max-w-sm rounded overflow-hidden m-auto bg-orange-100'>
      <VictoryChart
        domain={{ x: [-10, 0], y: [0, 100] }}
        theme={VictoryTheme.material}
      >
        <VictoryLegend
          x={130}
          y={2}
          title='Battery'
          centerTitle
          orientation='horizontal'
          gutter={20}
          style={{
            border: { stroke: 'black' },
            title: { fontSize: 16 }
          }}
          data={[{ name: 'Charge. %', symbol: { fill: 'green' } }]}
        />
        <VictoryLine
          style={{
            data: { stroke: 'green' },
            parent: { border: '1px solid #ccc' }
          }}
          data={[
            { x: -10, y: 100 },
            { x: -8, y: 80 },
            { x: -6, y: 40 },
            { x: -2, y: 55 },
            { x: -1, y: 60 },
            { x: 0, y: 80 }
          ]}
        />
      </VictoryChart>
    </div>
  )
}

export { BatteryChart }
