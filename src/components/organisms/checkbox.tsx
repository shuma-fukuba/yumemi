import { css } from '@emotion/react'
import React, { memo } from 'react'
import CheckBox from '~/components/moleculus/checkbox'
import { Prefecture } from '~/entities/prefecture'
import { useAppSelector } from '~/hooks/redux'
interface Props {}

const CheckBoxes: React.FC<Props> = memo(() => {
  const { prefectures } = useAppSelector(
    (state) => state.resas
  )
  return <Component {...{ prefectures }} />
})

interface IProps {
  prefectures: Prefecture[]
}

const Component: React.FC<IProps> = ({
  prefectures,
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
  background-color: #f3f3f3;
  padding: 20px;
  border-radius: 10px;
`

export default CheckBoxes
