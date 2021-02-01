import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../index'

interface tag {
  color: string,
  text: string,
  id: number
}

const tagListSlice = createSlice({
  //   slice名
  name: 'tagList',
  //   初期値
  initialState: {
    nextId: 1,
    data: [{
      color: 'white',
      text: '夜ネギを買う',
      id: 0,
    }],
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

// reducerをexport → storeへ
export default tagListSlice.reducer
