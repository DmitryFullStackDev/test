/* eslint-disable react/display-name */

import React, { FocusEvent, forwardRef, KeyboardEvent } from 'react'
import styled from 'styled-components'

const InputElem: any = styled.input`
  &&&&&&& {
    all: revert;
    box-sizing: border-box;

    width: 100%;
    font-family: Inter, sans-serif;
    background: transparent;
    outline: none;
    border: none;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    padding: 0;
     color: ${({ theme, disabled }) =>
       disabled ? theme.color.secondary : theme.color.primary}
`

interface Props {
  placeholder?: string
  width?: any
  isError?: boolean
  margin?: string
  disabled?: boolean
  value?: string | number
  type?: string
  name?: string
  inputMode?: string
  onFocus?: (e: FocusEvent) => void
  onKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: FocusEvent) => void
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void
  onClick?: (e: FocusEvent) => void
  onKeyUp?: (e: KeyboardEvent<HTMLInputElement>) => void
  tabIndex?: any
}

export const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      tabIndex,
      placeholder,
      value,
      width,
      isError,
      disabled,
      type,
      name,
      onChange,
      onBlur,
      onKeyPress,
      onKeyDown,
      onFocus,
      onClick,
      onKeyUp,
      inputMode,
    },
    ref,
  ) => (
    <InputElem
      tabIndex={tabIndex}
      onKeyUp={onKeyUp}
      name={name}
      type={type}
      inputMode={inputMode || 'decimal'}
      lang="nl"
      value={value}
      onClick={onClick}
      onChange={onChange}
      placeholder={placeholder}
      onBlur={onBlur}
      isError={isError}
      disabled={disabled}
      ref={ref}
      onFocus={onFocus}
      onKeyPress={onKeyPress}
      onKeyDown={onKeyDown}
      width={width}
    />
  ),
)
