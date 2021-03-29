import { createSlice } from '@reduxjs/toolkit'

const messageSlice = createSlice({
  name: 'message',
  initialState: {
    msgTxt: '魚大好き',
  },
  reducers: {
    changeMsg: (state, action) => {
      state.msgTxt = action.payload
    },
  },
})

export const { changeMsg } = messageSlice.actions

// reducerをexport → storeへ
export default messageSlice.reducer
