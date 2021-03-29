import React, { useState, FC } from 'react'
import { useDispatch } from 'react-redux'

// store
import { useSelector } from '../../../stores/index'
import { changeMsg } from '../../../stores/slices/messageSlice'

export const HeaderMsg: FC = () => {
  const dispatch = useDispatch()
  const { msgTxt } = useSelector((state) => state.message)
  const changeMsgHandler = () => {
    dispatch(changeMsg('React大好き'))
  }

  return (
    <>
      <p>{msgTxt}</p>
      <button
        onClick={changeMsgHandler}
        type="button"
      >
        メッセージを変える
      </button>
    </>
  )
}
