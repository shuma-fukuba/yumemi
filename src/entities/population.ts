import { Entity, Id, ResponseEntityIdSchema } from './base'
import { Prefecture } from './prefecture'

export interface ResponsePopulationSchema extends ResponseEntityIdSchema {
  year: number
  value: string
}

export interface ResponsePopulationsSchema extends ResponseEntityIdSchema {
  data: ResponsePopulationSchema[]
}

// 各年の人口のデータ
export class Population extends Entity<Id> {
  year: number
  value: string
  constructor(props: ResponsePopulationSchema) {
    super(props)
    this.year = props.year
    this.value = props.value
  }
}

// ある都道府県の人口のデータセット
export class PrefecturePopulation extends Entity<Id> {
  data: Population[]
  prefCode: number

  constructor(props: ResponsePopulationsSchema, prefCode: number) {
    super(props)
    this.data = props.data.map((d) => new Population(d))
    this.prefCode = prefCode
  }
}
