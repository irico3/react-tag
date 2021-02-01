import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector as rawUseSelector } from 'react-redux'
import tagListSlice from './slices/tagListSlice'

const store = configureStore({
  reducer: {
    tagList: tagListSlice,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector
export type AppDispatch = typeof store.dispatch
