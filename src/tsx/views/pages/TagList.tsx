import React, { FC } from 'react'
import { css } from '@emotion/core'
import { FixedSizeList as List } from 'react-window'

// store
import { useSelector } from '../../stores/index'
import { colorSelect } from '../../stores/slices/tagListSlice'
// style
import { colors } from '../../style/components/atoms/Button'

interface ItagList {
  clrType: string
}
/**
 * 投稿された付箋をカラー毎に表示するページ
 */
export const TagList: FC<ItagList> = ({ clrType }) => {
  const data = useSelector((state) => colorSelect(clrType, state))

  const tagListItem = ({ index, style }) => (
    <div
      style={style}
      css={TagCss(clrType)}
      key={data[index].id}
    >
      <button
        type="button"
        style={favBtnCss}
      >
        ⭐️
      </button>
      {data[index].text}
    </div>
  )

  return (
    <main>
      <List
        height={500}
        itemCount={data.length - 1}
        itemSize={56}
      >
        {tagListItem}
      </List>
    </main>
  )
}

const TagCss = (clrType: string) => css`
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  padding: 0 20px;
  background: ${colors[clrType].background};
  white-space: pre-wrap;
`

const favBtnCss = css`
  margin-right: 20px
`
