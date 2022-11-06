export interface ResponsePrefectureSchema {
  prefCode: number
  prefName: string
}

export interface ResponsePrefecturesSchema {
  message: null
  result: ResponsePrefectureSchema[]
}


// チェックボックス用の都道府県データ
export class Prefecture {
    prefCode: number
    prefName: string

    constructor(props: ResponsePrefectureSchema) {
        this.prefCode = props.prefCode
        this.prefName = props.prefName
    }
}
