import React from 'react'
import {
  VictoryChart,
  VictoryLine,
  VictoryTheme,
  VictoryLegend,
  VictoryContainer
} from 'victory'
import { useStoreState } from 'easy-peasy'

const BatteryChart = () => {
  const { chartValues, values } = useStoreState(state => state.battery)

  return (
    <div className='max-w-sm rounded overflow-hidden m-auto bg-orange-100'>
      <VictoryChart
        domain={{ x: [-10, 0], y: [0, 100] }}
        theme={VictoryTheme.material}
        containerComponent={
          <VictoryContainer
            style={{
              userSelect: 'auto !important',
              pointerEvents: 'auto !important',
              touchAction: 'auto !important'
            }}
          />
        }
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
          data={[{ name: 'Charge. %', symbol: { fill: 'blue' } }]}
        />
        <VictoryLine
          style={{
            data: { stroke: 'blue', strokeWidth: 2 },
            parent: { border: '1px solid #ccc' }
          }}
          data={values.length > 1 ? chartValues : []}
        />
      </VictoryChart>
    </div>
  )
}

export { BatteryChart }
