import React, { FC } from 'react'
import styled from 'styled-components'

import { Message } from './Message'

export const App: FC<{ title: string }> = ({ title }) => (
  <>
    <Title>{title}</Title>
    <Message />
  </>
)

const Title = styled.h1`
  color: red;
`
