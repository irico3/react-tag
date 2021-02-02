import React, { useState } from 'react'
import { css } from '@emotion/core'
import { Link } from 'react-router-dom'

// components
import { HeaderColorBtn } from '../atoms/HeaderColorBtn'
import { HeaderUser } from '../atoms/HeaderUser'
import { HeaderMsg } from '../atoms/HeaderMsg'
// style
import { HeaderContainer } from '../../../style/components/block/Header'

export default function Header() {
  return (
    <div css={HeaderContainer}>
      <h1>
        <Link to="/" css={TitleCss}>Tag React</Link>
      </h1>
      <HeaderUser />
      <div css={BtnsCss}>
        <HeaderColorBtn clrType="white" />
        <HeaderColorBtn clrType="blue" />
        <HeaderColorBtn clrType="green" />
        <HeaderColorBtn clrType="red" />
        <HeaderColorBtn clrType="yellow" />
      </div>
      <HeaderMsg />
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
