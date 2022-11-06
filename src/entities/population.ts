export interface ResponsePopulationSchema {
  year: number
  value: number
}

export interface ResponsePopulationDataSetSchema {
  label: string
  data: ResponsePopulationSchema[]
}

export interface ResponsePopulationsSchema {
  message: null
  result: {
    boundaryYear: number
    data: ResponsePopulationDataSetSchema[]
  }
}

export class Population {
  year: number
  value: number
  constructor(props: ResponsePopulationSchema) {
    this.year = props.year
    this.value = props.value
  }
}

// ある都道府県の人口のデータセット
export class PrefecturePopulation {
  data: Population[]
  prefCode: number

  constructor(props: ResponsePopulationDataSetSchema, prefCode: number) {
    this.data = props.data.map((d) => new Population(d))
    this.prefCode = prefCode
  }

  get populationData() {
    return this.data.map((d) => {
      return {
        year: d.year,
        value: d.value,
        prefCode: this.prefCode,
      }
    })
  }
}
