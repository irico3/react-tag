import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector as rawUseSelector } from 'react-redux'
import tagListSlice from './slices/tagListSlice'
import messageSlice from './slices/messageSlice'

const store = configureStore({
  reducer: {
    tagList: tagListSlice,
    message: messageSlice,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector
export type AppDispatch = typeof store.dispatch
