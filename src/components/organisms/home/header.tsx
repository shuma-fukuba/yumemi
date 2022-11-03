import { css } from '@emotion/react'
import { memo } from 'react'
interface Props {}

const Header: React.FC<Props> = memo(() => {
  return <div css={HeaderStyle}>Header</div>
})

const HeaderStyle = css`
  background-color: red;
  width: 100%;
  height: var(--HEADER_HEIGHT_PRESET);
  display: flex;
  align-items: center;
  justify-content: center;
`

export default Header
