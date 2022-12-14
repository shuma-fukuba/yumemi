import { css } from '@emotion/react'
import { useCallback } from 'react'
import { Prefecture } from '~/entities/prefecture'
import { useAppSelector, useAppDispatch } from '~/hooks/redux'
import { readPopulations } from '~/modules/features/resasSlice'
import mq from '~/styles/responsive'

interface Props {
  prefecture: Prefecture
}

const CheckBox: React.FC<Props> = ({ prefecture }) => {
  const selectedPrefectures = useAppSelector(
    (state) => state.resas.selectedPrefectures
  )
  const dispatch = useAppDispatch()

  const handleCheck = useCallback(
    (e: any) => {
      const prefectureId = Number(e.target.value)
      const selected = e.target.checked
      const newSelectedPrefectures = selected
        ? [...selectedPrefectures, prefectureId]
        : selectedPrefectures.filter((row) => row !== prefectureId)
      dispatch(readPopulations({ prefectureIds: newSelectedPrefectures }))
    },
    [dispatch, selectedPrefectures]
  )

  return (
    <div css={CheckBoxStyle}>
      <label css={LabelStyle}>
        <input
          type="checkbox"
          value={prefecture.prefCode}
          onChange={handleCheck}
        />
        {prefecture.prefName}
      </label>
    </div>
  )
}

const CheckBoxStyle = css`
  width: 20%;

  ${mq['smartphone']} {
    width: 50%;
  }
`

const LabelStyle = css`
  display: block;
`

CheckBox.displayName = 'CheckBox'

export default CheckBox
