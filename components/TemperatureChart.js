import React from 'react'
import {
  VictoryChart,
  VictoryLine,
  VictoryTheme,
  VictoryLegend,
  VictoryContainer
} from 'victory'
import { useStoreState } from 'easy-peasy'

const TemperatureChart = () => {
  const { chartValues, values } = useStoreState(state => state.temperature)
  const { unit } = useStoreState(state => state.settings)
  const legendTemperature = unit === 'C' ? '°C' : '°F'
  const minTemperature = unit === 'C' ? 0 : 32
  const minAcceptableTemperature = unit === 'C' ? 2 : 35.6
  const maxAcceptableTemperature = unit === 'C' ? 8 : 46.4
  const maxTemperature = unit === 'C' ? 10 : 50

  return (
    <div className='max-w-sm rounded overflow-hidden m-auto bg-orange-100'>
      <VictoryChart
        domain={{ x: [-10, 0], y: [minTemperature, maxTemperature] }}
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
            { name: `Temp. ${legendTemperature}`, symbol: { fill: 'blue' } }
          ]}
        />
        <VictoryLine
          data={[
            { x: -10, y: maxAcceptableTemperature },
            { x: 0, y: maxAcceptableTemperature }
          ]}
          domain={{
            x: [0, minTemperature],
            y: [-10, maxTemperature]
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
            { x: -10, y: minAcceptableTemperature },
            { x: 0, y: minAcceptableTemperature }
          ]}
          domain={{
            x: [0, minTemperature],
            y: [-10, maxTemperature]
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
            data: { stroke: 'blue', strokeWidth: 2 },
            parent: { border: '1px solid #ccc' }
          }}
          data={values.length > 1 ? chartValues : []}
        />
      </VictoryChart>
    </div>
  )
}

export { TemperatureChart }
