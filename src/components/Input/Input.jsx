import React from 'react'

import {
  InputContainer,
  InputFormat,
  Label
} from './Input.elements'

const Input = (props, {wid} ) => {
  return (
    <InputContainer wid={wid}>
      <Label>{props.title}</Label>
      <InputFormat {...props} />
    </InputContainer>
  )
}

export default Input