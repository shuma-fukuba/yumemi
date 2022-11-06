import { memo, useEffect } from 'react'
// import { G2, Line as AntdLine } from '@ant-design/charts'
import { useAppSelector } from '~/hooks/redux'
import { PrefecturePopulation } from '~/entities/population'
import { Prefecture } from '~/entities/prefecture'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { getYearLabels } from '~/utils/chart'
import { css } from '@emotion/react'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

interface Props {}

const PopulationGraph: React.FC<Props> = memo(() => {
  const populations = useAppSelector((state) => state.resas.populations)
  const prefectures = useAppSelector((state) => state.resas.prefectures)
  return <Component populations={populations} prefectures={prefectures} />
})

interface IProps {
  populations: PrefecturePopulation[]
  prefectures: Prefecture[]
}

export const Component: React.FC<IProps> = ({ populations, prefectures }) => {
  const labels = getYearLabels(populations)
  const datasets = populations.map((population) => {
    return {
      label: prefectures.find((pref) => pref.prefCode === population.prefCode)
        .prefName,
      data: [
        ...population.populationData.map((item) => {
          return item.value
        }),
      ],
      borderColor: `rgb(${Math.random() * 255},${Math.random() * 255},${
        Math.random() * 255
      })`,
    }
  })

  const graphData = {
    labels: labels,
    datasets: datasets,
  }

  const options: {} = {
    maintainAspectRatio: false,
  }

  return (
    <div css={LineStyle}>
      <Line height={10} width={10} data={graphData} options={options} />
    </div>
  )
}

const LineStyle = css`
  height: 300px;
  width: 1000px;
  max-width: 100%;
`

export default PopulationGraph
