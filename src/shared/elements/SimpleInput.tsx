import React, { ChangeEvent, FC, useRef } from 'react'
import styled from 'styled-components'
import { Text } from '.'

const InputWrapper: any = styled.div`
  &&& {
    all: revert;
    box-sizing: border-box;

    margin: ${({ margin }: any) => margin};
    background: ${({ theme }: any) => theme.color.ui50};
    position: relative;
    border-radius: 6px;
    border: 1px solid
      ${({ theme, isError }: any) => (isError ? 'red' : theme.color.ui300)};
    box-shadow: ${({ theme }) => theme.shadows.low};
    padding: 6px 12px 16px 12px;
    display: flex;
    flex-direction: column;
    width: ${({ width }: any) => width || '100%'};
    height: 64px;

    &:hover {
      box-shadow: ${({ theme }) => theme.shadows.medium};
      background: ${({ theme }: any) => theme.color.inverse};
    }

    &:focus-within {
      border-radius: 6px;
      border: 1px solid ${({ theme }: any) => theme.color.accent};
    }
  }
`

const Input: any = styled.input`
  &&& {
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

    &::placeholder {
      color: ${({ theme }) => theme.color.disabled};
    }
  }
`

const Label = styled.label`
  all: revert;
  box-sizing: border-box;
`

type Props = {
  inputName: string
  label: string
  placeholder: string
  width?: string
  margin?: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onClick?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const SimpleInput: FC<Props> = ({
  inputName,
  label,
  placeholder,
  width,
  margin,
  value,
  onChange,
  onClick,
}) => {
  const inputRef = useRef(null)

  const escFunction = e => {
    if (e.keyCode === 27) {
      inputRef.current.blur()
    }
  }

  return (
    <InputWrapper
      margin={margin}
      width={width}
      onClick={() => inputRef.current.focus()}
    >
      <Label htmlFor={inputName}>
        <Text color="disabled" margin="0 0 2px 0" type="caption">
          {label}
        </Text>
      </Label>
      <Input
        id={inputName}
        onChange={onChange}
        onClick={onClick}
        value={value}
        onKeyDown={escFunction}
        placeholder={placeholder}
        ref={inputRef}
        type="text"
        name={inputName}
      />
    </InputWrapper>
  )
}
