import { css } from '@emotion/react'
import { useCallback } from 'react'
import { Prefecture } from '~/entities/prefecture'
import { useAppSelector, useAppDispatch } from '~/hooks/redux'
import { updateSelectedPrefectures } from '~/modules/features/resasSlice'
import { readPopulations } from '~/modules/features/resasSlice';

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
      dispatch(readPopulations({ prefectureIds: newSelectedPrefectures}))
    },
    [dispatch, updateSelectedPrefectures, selectedPrefectures]
  )

  return (
    <div css={CheckBoxStyle}>
      <label css={LabelStyle}>
        <input
          type="checkbox"
          value={prefecture.prefCode}
          onChange={handleCheck}
          // checked={selectedPrefectures.includes(prefecture.prefCode)}
        />
        {prefecture.prefName}
      </label>
    </div>
  )
}

const CheckBoxStyle = css`
  width: 20%;
`

const LabelStyle = css`
  display: block;
`

export default CheckBox
