import { css } from '@emotion/react'
import { memo } from 'react'
import mq from '~/styles/responsive'
interface Props {}

const Header: React.FC<Props> = memo(() => {
  return <header css={HeaderStyle}>Resas</header>
})

const HeaderStyle = css`
  width: 100%;
  height: var(--HEADER_HEIGHT_PRESET);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1f4e79;
  color: #fff;
  margin-bottom: 60px;
  font-size: 32px;

  ${mq['smartphone']} {
    font-size: 24px;
  }
`

Header.displayName = 'Header'

export default Header
