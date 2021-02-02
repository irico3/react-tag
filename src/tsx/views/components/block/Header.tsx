import React, { useState } from 'react'
import { css } from '@emotion/core'
import { Link } from 'react-router-dom'

// components
import { HeaderColorBtn } from '../atoms/HeaderColorBtn'
// style
import { HeaderContainer } from '../../../style/components/block/Header'

export default function Header() {
  const [userData, setUserData] = useState({
    name: 'irico',
    age: 25,
    message: '魚大好き',
  })

  return (
    <div css={HeaderContainer}>
      <h1>
        <Link to="/" css={TitleCss}>Tag React</Link>
      </h1>
      <p css={MessageCss}>
        ようこそ
        {userData.name}
        さん
      </p>
      <div css={BtnsCss}>
        <HeaderColorBtn clrType="white" />
        <HeaderColorBtn clrType="blue" />
        <HeaderColorBtn clrType="green" />
        <HeaderColorBtn clrType="red" />
        <HeaderColorBtn clrType="yellow" />
      </div>
      <button
        onClick={() => setUserData({
          ...userData,
          name: 'sakana',
        })}
        type="button"
      >
        名前を変える
      </button>
    </div>
  )
}

const BtnsCss = css`
  display: flex;
  margin-left: 50px;
`

const TitleCss = css`
  color: #fff;
  text-decoration: none;
`

const MessageCss = css`
  margin-left: 20px;
`
