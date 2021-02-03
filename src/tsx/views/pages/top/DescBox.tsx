// 説明分を表示するblock
import React, { useState, FC } from 'react'
import { css } from '@emotion/core'

export const DescBox: FC = () => {
  const [isVisible, setIsVisible] = useState(true)
  return (
    <div css={DescBoxCss}>
      <DescHead />
      <DescBoxTxt isVisible={isVisible} />
      {isVisible && (
      <HideBtn setIsVisible={setIsVisible} />
      )}
    </div>
  )
}

const DescHead = () => (
  <h2 css={DescHeadCss}>このサイトについて</h2>
)

const DescHeadCss = css`
  font-weight: bold;
`
interface DescBoxTxtProps {
  isVisible: boolean
}

const DescBoxTxt: FC<DescBoxTxtProps> = ({ isVisible }) => (
  <>
    {isVisible
      ? (
        <p>
          このページは付箋をpostするページです。
          <br />
          各色のボタンを押すことで付箋の色を変更することができます。
          <br />
          それぞれの一覧から各ページの付箋リストを見ることができます。
        </p>
      )
      : <p>説明文は非表示になっています。</p>}
  </>
)

interface DescBoxBtnProps {
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const HideBtn:FC<DescBoxBtnProps> = ({ setIsVisible }) => (
  <button
    onClick={() => setIsVisible(false)}
    type="button"
  >
    説明文を非表示にする
  </button>
)

const DescBoxCss = css`
  padding: 30px 20px;
  line-height:1.5;
`