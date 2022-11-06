import { css } from '@emotion/react'
import React, { memo, useCallback } from 'react'
import CheckBox from '~/components/moleculus/checkbox'
import { Prefecture } from '~/entities/prefecture'
import { useAppSelector, useAppDispatch } from '~/hooks/redux'
import { AppDispatch } from '~/modules/store'
import { useEffect } from 'react';
interface Props {}

const CheckBoxes: React.FC<Props> = memo(() => {
  const dispatch = useAppDispatch()
  const { prefectures, selectedPrefectures } = useAppSelector(
    (state) => state.resas
  )
  return <Component {...{ prefectures, selectedPrefectures, dispatch }} />
})

interface IProps {
  prefectures: Prefecture[]
  selectedPrefectures: number[]
  dispatch: AppDispatch
}

const Component: React.FC<IProps> = ({
  prefectures,
  selectedPrefectures,
  dispatch,
}) => {

  return (
    <div css={CheckBoxesWrapper}>
      {prefectures.map((item, index) => (
        <CheckBox prefecture={item} key={index} />
      ))}
    </div>
  )
}

const CheckBoxesWrapper = css`
  display: flex;
  justify-content: center;
  justify-content: center;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 1000px;
  margin-bottom: 60px;
  max-width: 100%;
`

export default CheckBoxes
