import { memo } from 'react'
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
import Spin from '~/components/atoms/spin'

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
  const loadingMarkers = useAppSelector((state) => state.resas.loadingMarkers)
  return (
    <Component
      populations={populations}
      prefectures={prefectures}
      loadingMarkers={loadingMarkers}
    />
  )
})

interface IProps {
  populations: PrefecturePopulation[]
  prefectures: Prefecture[]
  loadingMarkers: boolean
}

export const Component: React.FC<IProps> = ({
  populations,
  prefectures,
  loadingMarkers,
}) => {
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
      {loadingMarkers ? (
        <Spin />
      ) : (
        <Line height={10} width={10} data={graphData} options={options} />
      )}
    </div>
  )
}

const LineStyle = css`
  height: 400px;
  width: 1000px;
  max-width: 100%;
  background-color: #f3f3f3;
  padding: 20px;
  border-radius: 20px;
`

PopulationGraph.displayName = 'PopulationGraph'

export default PopulationGraph
