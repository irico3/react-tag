import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../index'

interface tag {
  color: string,
  text: string,
  id: number
}

const data: tag[] = []
for (let i = 0; i < 100; i++) {
  data.push({
    color: 'white',
    text: '夜ネギを買う',
    id: i,
  })
}

const tagListSlice = createSlice({
  //   slice名
  name: 'tagList',
  //   初期値
  initialState: {
    nextId: 1,
    data,
  },
  // 各reducer 第一引数でstate情報を受け取り、第二引数でユーザーが操作した情報を受け取る
  reducers: {
    addTag: (state, action) => {
      state.data = [
        ...state.data,
        {
          ...action.payload,
          id: state.nextId,
        },
      ]
      state.nextId += 1
    },
  },
})

// actionをexport
export const { addTag } = tagListSlice.actions
// state情報をexport

// 特定の色のタグのみ
export const colorSelect = (color: string, state: RootState) => {
  const tags: tag[] = Object.values(state.tagList.data)
  return tags.filter((thisTag) => thisTag.color === color)
}

// 現在のポスト数の確認
export const colorCountSelect = (color: string, state: RootState) => {
  const tags = colorSelect(color, state)
  return tags.length
}

// reducerをexport → storeへ
export default tagListSlice.reducer
