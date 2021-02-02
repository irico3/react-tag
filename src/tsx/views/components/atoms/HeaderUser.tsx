import React, { useState, FC } from 'react'
import { css } from '@emotion/core'

export const HeaderUser = () => {
  const [username, setUsername] = useState('irico')

  return (
    <p css={UserTxtCss}>
      ようこそ
      {username}
      さん
    </p>
  )
}

const UserTxtCss = css`
  margin-left: 20px;
`
