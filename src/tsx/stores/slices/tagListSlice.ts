import { createSlice, createSelector } from '@reduxjs/toolkit'
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
export const colorSelect = createSelector(
  (state: RootState) => state.tagList.data,
  (state, clrType) => clrType,
  (tags, clrType) => tags.filter((thisTag) => thisTag.color === clrType),
)

// 現在のポスト数の確認
export const colorCountSelect = createSelector(
  (state: RootState, color) => colorSelect(state, color),
  (tags) => tags.length,
)

// reducerをexport → storeへ
export default tagListSlice.reducer
