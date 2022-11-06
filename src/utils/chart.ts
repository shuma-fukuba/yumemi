import { PrefecturePopulation } from '~/entities/population'

export const formatPopulationsDataForChart = (
  populations: PrefecturePopulation[]
) => {
    const lineChartData = []

    for (const prefecturePopulation of populations) {
      const items = prefecturePopulation.populationData
      for (const population of items) {
        if (lineChartData[population['year']] === undefined) {
          lineChartData[population['year']] = {}
          if (
            lineChartData[population['year']][population['prefCode']] ===
            undefined
          ) {
            lineChartData[population['year']][population['prefCode']] =
              population['value']
          } else {
            lineChartData[population['year']][population['prefCode']].push(
              population['value']
            )
          }
        } else {
          if (
            lineChartData[population['year']][population['prefCode']] ===
            undefined
          ) {
            lineChartData[population['year']][population['prefCode']] =
              population['value']
          } else {
            lineChartData[population['year']][population['prefCode']].push(
              population['value']
            )
          }
        }
      }
    }
    return lineChartData
}

export const getYearLabels = (populations: PrefecturePopulation[]) => {
    const labels = []
    for (const prefecturePopulation of populations) {
        const items = prefecturePopulation.populationData
        for (const population of items) {
            if (!labels.includes(population['year'])) {
                labels.push(population['year'])
            }
        }
    }
    return labels
}
