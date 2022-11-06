export interface ResponsePrefectureSchema {
  prefCode: number
  prefName: string
}

export interface ResponsePrefecturesSchema {
  message: null
  result: ResponsePrefectureSchema[]
}

export class Prefecture {
  prefCode: number
  prefName: string

  constructor(props: ResponsePrefectureSchema) {
    this.prefCode = props.prefCode
    this.prefName = props.prefName
  }
}
