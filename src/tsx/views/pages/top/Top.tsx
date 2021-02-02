import React, { FC } from 'react'
import { hot } from 'react-hot-loader'
// component
import { PostBox } from './PostBox'
import { DescBox } from './DescBox'

const Top: FC = () => (
  <main>
    <PostBox />
    <DescBox />
  </main>
)

export default hot(module)(Top)
