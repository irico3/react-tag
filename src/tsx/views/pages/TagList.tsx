import React, { FC } from 'react'
import { css } from '@emotion/core'
import { FixedSizeList as List } from 'react-window'
import { useDispatch } from 'react-redux'

// store
import { useSelector } from '../../stores/index'
import { favorite, colorSelect, colorCountSelect } from '../../stores/slices/tagListSlice'
// style
import { colors } from '../../style/components/atoms/Button'

interface ItagList {
  clrType: string
}
/**
 * 投稿された付箋をカラー毎に表示するページ
 */
export const TagList: FC<ItagList> = ({ clrType }) => {
  const dispatch = useDispatch()
  const data = useSelector((state) => colorSelect(clrType, state))
  const tagCount = useSelector((state) => colorCountSelect(clrType, state))

  const postHandler = (id: number) => {
    dispatch(favorite(id))
  }

  const tagListItem = ({ index, style }) => (
    <div
      style={style}
      css={TagCss(clrType, data[index].isFavorite)}
      key={data[index].id}
    >
      <button
        type="button"
        css={favBtnCss}
        onClick={() => postHandler(data[index].id)}
      >
        ⭐️
      </button>
      {data[index].text}
    </div>
  )

  return (
    <main>
      <p css={countCss}>
        現在のタグ総数:
        {tagCount}
      </p>
      <List
        height={500}
        itemCount={data.length}
        itemSize={56}
      >
        {tagListItem}
      </List>
    </main>
  )
}

const countCss = css`
  padding: 20px;
`

const TagCss = (clrType: string, isFavorite: boolean) => css`
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  padding: 0 20px;
  background: ${colors[clrType].background};
  white-space: pre-wrap;
  ${isFavorite && 'font-weight: bold'};
`

const favBtnCss = css`
  margin-right: 20px;
  background: #cacdf7;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`
