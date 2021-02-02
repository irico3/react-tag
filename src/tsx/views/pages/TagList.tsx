import React, { useMemo, FC } from 'react'
import { css } from '@emotion/core'
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

  const tagListDom = useMemo(
    () => data.map((tagData) => (
      <div
        css={TagCss(clrType)}
        key={tagData.id}
      >
        {tagData.text}

      </div>
    )), [data],
  )

  return (
    <main>
      {tagListDom}
    </main>
  )
}

const TagCss = (clrType: string) => css`
  border: 1px solid #ccc;
  padding: 20px;
  background: ${colors[clrType].background};
  white-space: pre-wrap;
`
