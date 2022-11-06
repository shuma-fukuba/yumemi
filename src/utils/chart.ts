import { PrefecturePopulation } from '~/entities/population'

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
