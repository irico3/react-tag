import React, { useState, FC } from 'react'

export const HeaderMsg: FC = () => {
  const [message, setMessage] = useState('魚大好き')
  return (
    <>
      <p>{message}</p>
      <button
        onClick={() => setMessage('react大好き')}
        type="button"
      >
        メッセージを変える
      </button>
    </>
  )
}
